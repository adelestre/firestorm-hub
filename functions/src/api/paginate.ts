import { Request, Response } from 'express'
import { Query, DocumentData } from 'firebase-admin/firestore'
import { PaginateParameters, PaginateResponse } from '../types'
import { db } from '../db/services/firebase'
import { getFirstPage, getPlayerCount } from '../db/storage'
import { mergePlayersAndCount } from '../utils'

export async function paginate(req: Request, res: Response) {
  const {
    body: {
      limit,
      order = null,
      season = null,
      lastElement = null,
      filterName = null,
      filterClass = null,
      filterRole = null,
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
      season,
      lastElement,
      filterName,
      filterClass,
      filterRole,
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

export async function getPagination(
  parameters: PaginateParameters,
  forceNew = false
): Promise<PaginateResponse> {
  const count = await getPlayerCount(parameters.season ?? '2')
  if (!forceNew && isFirstPageRequest(parameters)) {
    const data = await getFirstPage(parameters.season ?? '2')
    if (data) return data
  }
  let collectionName = 'players'
  if (parameters.season) {
    if (parameters.season !== '1') collectionName += `_${parameters.season}`
  } else collectionName += '_2'
  let query = db.collection(collectionName) as Query<DocumentData, DocumentData>
  query = query.limit(parameters.limit)
  const order = parameters.order ?? 'desc'
  query = query.orderBy('fsio', order)
  query = query.orderBy('pid')
  if (parameters.filterClass)
    query = query.where('pclass', '==', parameters.filterClass)
  if (parameters.filterRole)
    query = query.where('roles', 'array-contains', parameters.filterRole)
  if (parameters.filterName)
    query = query
      .where('name', '>=', parameters.filterName)
      .where('name', '<=', parameters.filterName + '\uf8ff')
  if (parameters.lastElement)
    query = query.startAfter(
      parameters.lastElement.fsio,
      parameters.lastElement.pid
    )
  const players = (await query.get()).docs.map((doc) => doc.data())
  return mergePlayersAndCount(players, count) as PaginateResponse
}
