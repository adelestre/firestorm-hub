import { Request, Response } from 'express'
import { getPlayerRuns } from '../db/runs'
import { PlayerRunsResponse } from '../types'

export const playerRuns = async (req: Request, res: Response) => {
  const {
    body: { playerId, season },
  } = req
  if (!playerId)
    return res.status(400).json({
      status: 'error',
      message: 'Player ID is required',
    })
  try {
    const runs: PlayerRunsResponse = await getPlayerRuns(playerId, season)
    return res.status(200).json(runs)
  } catch (error) {
    return res.status(500).json('Error getting documents: ' + error)
  }
}
