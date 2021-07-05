import type { App } from "vue";

import axiosPugin from "./axios";
const pluginArr = [
  axiosPugin
]

export const initPlugin = (app: App) => {
  pluginArr.forEach(plugin => {
    app.use(plugin)
  })
}