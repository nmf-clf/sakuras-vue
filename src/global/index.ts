/*
 * @Author: niumengfei
 * @Date: 2022-04-13 23:12:56
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-13 23:12:57
 */
import { App } from 'vue'
import registerElement from './register-element'

export function globalRegister(app: App): void {
  app.use(registerElement)
}
