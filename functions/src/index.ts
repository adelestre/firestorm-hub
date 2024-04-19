import { onSchedule } from 'firebase-functions/v2/scheduler'
import { daily } from './daily/daily'
import { logInfo } from './utils'
import express from 'express'
import { onRequest } from 'firebase-functions/v2/https'
import { paginate } from './api/paginate'

const api = express()

api.post('/api/leaderboard/paginate', paginate)

exports.api = onRequest(api)

exports.dailyUpdate = onSchedule(
  { schedule: '0 0,6 * * *', memory: '512MiB' },
  async () => {
    await daily()
    logInfo('All processes ended at :' + new Date().toISOString())
  }
)
