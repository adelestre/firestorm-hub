import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onRequest } from 'firebase-functions/v2/https'
import { log } from 'firebase-functions/logger'
import { daily } from './daily/daily'
import { paginate } from './api/paginate'
import express from 'express'

const api = express()

api.post('/api/leaderboard/paginate', paginate)

exports.api = onRequest(api)

exports.dailyUpdate = onSchedule(
  { schedule: '0 0,6 * * *', memory: '512MiB' },
  async () => {
    await daily()
    log('All processes ended at :' + new Date().toISOString())
  }
)
