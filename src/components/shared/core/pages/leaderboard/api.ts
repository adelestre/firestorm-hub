export const apiBaseUrl = (import.meta as any).env.PROD
  ? window.location.origin + '/api/leaderboard'
  : 'http://127.0.0.1:5001/firestorm-hub/us-central1/api/api/leaderboard'
