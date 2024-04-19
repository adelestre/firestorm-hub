import { Query, DocumentData } from 'firebase-admin/firestore'
import { db } from '../firebase/firebase'
import { Request, Response } from 'express'
import { PaginateParameters } from '../types'
import { getFirstPage, getPlayerCount } from '../firebase/storage'

export async function paginate(req: Request, res: Response) {
  const {
    body: {
      limit,
      order = null,
      lastElement = null,
      filterName = null,
      filterClass = null,
    },
  } = req
  if (!limit)
    return res.status(400).json({
      status: 'error',
      message: 'Limit is required',
    })
  if (limit < 0)
    return res.status(400).json({
      status: 'error',
      message: 'Limit must be greater than 0',
    })
  if (limit > 200)
    return res.status(400).json({
      status: 'error',
      message: 'Limit must be less than 200',
    })
  try {
    const data = await getPagination({
      limit,
      order,
      lastElement,
      filterName,
      filterClass,
    })
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json('Error getting documents: ' + error)
  }
}

function isFirstPageRequest(parameters: PaginateParameters) {
  const isCorrectLimit = parameters.limit === 50
  const isCorrectAnchor = !parameters.lastElement
  const isCorrectFilterName =
    !parameters.filterName || parameters.filterName === ''
  const isCorrectFilterClass =
    !parameters.filterClass || parameters.filterClass === ''
  const isCorrectOrder = !parameters.order || parameters.order === 'desc'
  return (
    isCorrectLimit &&
    isCorrectAnchor &&
    isCorrectFilterName &&
    isCorrectFilterClass &&
    isCorrectOrder
  )
}

function mergePlayersAndCount(players: DocumentData[], count: number) {
  return {
    players,
    count,
  }
}

export async function getPagination(parameters: PaginateParameters) {
  const count = await getPlayerCount()
  if (isFirstPageRequest(parameters)) {
    const data = await getFirstPage()
    if (data) return data
  }
  let query = db.collection('players') as Query<DocumentData, DocumentData>
  query = query.limit(parameters.limit)
  const order = parameters.order ?? 'desc'
  query = query.orderBy('fsio', order)
  query = query.orderBy('pid')
  if (parameters.lastElement)
    query = query.startAfter(
      parameters.lastElement.fsio,
      parameters.lastElement.pid
    )
  if (parameters.filterClass)
    query = query.where('pclass', '==', parameters.filterClass)
  if (parameters.filterName)
    query = query
      .where('name', '>=', parameters.filterName)
      .where('name', '<=', parameters.filterName + '\uf8ff')
  const players = (await query.get()).docs.map((doc) => doc.data())
  return mergePlayersAndCount(players, count)
}
