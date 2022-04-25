import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
const DATE_TIME = 'YYYY-MM-DD HH:mm:ss'
export default function utcString(utcString: string, format: string = DATE_TIME) {
  return dayjs.utc(utcString).format(format)
}
