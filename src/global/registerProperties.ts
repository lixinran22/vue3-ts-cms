import { App } from 'vue'
import utcString from '@/utils/data-format'
export default function regesterProperties(app: App) {
  app.config.globalProperties.$filters = {
    utcString
  }
}
