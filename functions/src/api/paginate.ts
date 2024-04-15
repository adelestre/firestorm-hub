import { Query, DocumentData } from 'firebase-admin/firestore'
import { db } from '../firebase/firebase'
import { Request, Response } from 'express'

export async function paginate(req: Request, res: Response) {
  const {
    body: {
      limit,
      order = null,
      startPoint = null,
      filterName = null,
      filterClass = null,
    },
  } = req
  if (!limit)
    return res.status(400).json({
      status: 'error',
      message: 'Limit is required',
    })
  if (limit > 200)
    return res.status(400).json({
      status: 'error',
      message: 'Limit must be less than 200',
    })
  try {
    let query = db.collection('players') as Query<DocumentData, DocumentData>
    query = query.limit(limit)
    if (filterClass) query = query.where('pclass', '==', filterClass)
    if (filterName)
      query = query
        .where('name', '>=', filterName)
        .where('name', '<=', filterName + '\uf8ff')
    query = order ? query.orderBy('fsio', order) : query.orderBy('fsio', 'desc')
    query = query.orderBy('name')
    if (startPoint) query = query.startAfter(startPoint)
    const players = (await query.get()).docs.map((doc) => doc.data())
    return res.status(200).json(players)
  } catch (error) {
    return res.status(500).json('Error getting documents: ' + error)
  }
}
