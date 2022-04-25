let BASE_RUL = ''
const TIMEOUT = 1000
if (process.env.NODE_ENV === 'development') {
  BASE_RUL = '/api'
} else if (process.env.NODE_ENV === 'productor') {
  BASE_RUL = 'http://152.136.185.210:5000'
} else {
  BASE_RUL = 'http://152.136.185.210:5000'
}

export { BASE_RUL, TIMEOUT }
