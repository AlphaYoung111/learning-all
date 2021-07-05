function reactive(obj) {
  const handler = {
    get(target, key) {
      // 依赖收集
      track(target, key)
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      // app.update()
      // 依赖更新
      trigger(target, key)
    },
  }
  return new Proxy(obj, handler)
}

const effectStack = []
// 副作用函数
function effect(fn) {
  const eff = function () {
    try {
      effectStack.push(eff)
      fn()
    } finally {
      effectStack.pop()
    }
  }

  eff()
  return eff
}

const targetMap = {}
// {target:{key:[]}}
// 依赖搜集
function track(target, key) {
  const effect = effectStack[effectStack.length - 1]
  if (effect) {
    let map = targetMap[target]
    if (!map) {
      map = targetMap[target] = {}
    }

    let deps = map[key]
    if (!deps) {
      deps = map[key] = []
    }

    // 存入副作用函数
    if (deps.indexOf(effect) === -1) {
      deps.push(effect)
    }
  }
}

// 依赖更新
function trigger(target, key) {
  const map = targetMap[target]
  if (map) {
    const deps = map[key]
    if (deps) {
      deps.forEach((effect) => effect())
    }
  }
}

// 渲染函数h
function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  }
}

const Vue = {
  createApp(options) {
    // 根据渲染终端的不同,传入不同的选择器方法，和添加元素方法
    const render = Vue.createRenderer({
      querySelector(selector) {
        return document.querySelector(selector)
      },
      insert(child, parent, anchor) {
        // anchor为参考节点
        parent.insertBefore(child, anchor || null)
      },
      createElement(tag) {
        return document.createElement(tag)
      },
    })
    return render.createApp(options)
  },
  createRenderer({ querySelector, insert, createElement }) {
    return {
      createApp(options) {
        return {
          mount(selector) {
            // 为了兼容不同的平台这里不应该使用doucment
            // 应该是哟个买卖你传入的配置项
            const parent = querySelector(selector)
            if (!options.render) {
              options.render = this.complie(parent.innerHTML)
            }

            // 处理兼容
            if (options.setup) {
              this.setupState = options.setup()
            }
            if (options.data) {
              this.data = options.data()
            }

            this.proxyData = new Proxy(this, {
              get(target, key) {
                if (key in target.setupState) {
                  return target.setupState[key]
                } else {
                  return target.data[key]
                }
              },
              set(target, key, value) {
                if (key in target.setupState) {
                  target.setupState[key] = value
                } else {
                  target.data[key] = value
                }
              },
            })

            // 更新函数
            this.update = effect(() => {
              // const el = options.render.call(this.proxyData)

              // parent.innerHTML = ''
              // // parent.appendChild(el)
              // insert(el, parent)

              // 这里进行虚拟dom的挂载和更新

              const vnode = options.render.call(this.proxyData)
              if (!this.isMounted) {
                // mounted
                // 转换虚拟dom为真实Dom
                const el = this.createElm(vnode)
                parent.innerHTML = ''
                insert(el, parent)

                this.isMounted = true
              } else {
                // update
                // diff
                this.patch(this._vnode, vnode)
              }

              // 保存当前vnode，为下次diff提供比较对象
              this._vnode = vnode
            })

            // 初始化
            this.update()
          },
          createElm(vnode) {
            // 创建根节点
            const el = createElement(vnode.tag)
            // 处理props

            // 子元素
            if (typeof vnode.children === 'string') {
              // 文本节点
              el.textContent = vnode.children
            } else {
              // 标签节点 => 递归
              vnode.children.forEach((child) => {
                insert(this.createElm(child), el)
              })
            }

            vnode.el = el
            return el
          },
          /**
           *
           * @param {*} n1 旧节点
           * @param {*} n2 新节点
           */
          patch(n1, n2) {
            // 在进行比较时，两个节点进行比较，说明两个节点的el在比较时，应当进行赋值
            // 将旧节点的el赋值给新节点的el
            const el = (n2.el = n1.el)

            // 判断节点是否相同 (应当还有key值的对比，或者类似input标签的类型对比)
            if (n1.tag === n2.tag) {
              // props判断

              // children
              const oldCh = n1.children
              const newCh = n2.children

              if (typeof oldCh === 'string') {
                // 旧为文本节点
                if (typeof newCh === 'string') {
                  // 新为文本
                  if (oldCh !== newCh) {
                    el.textContent = newCh
                  }
                } else {
                  // 新为标签
                  el.textContent = ''
                  newCh.forEach((child) => insert(this.createElm(child), el))
                }
              } else {
                // 旧为元素节点
                if (typeof newCh === 'string') {
                  // 新为文本
                  el.textContent = newCh
                } else {
                  // 新为标签
                  this.patch(oldCh, newCh)
                }
              }
            }
          },
          complie(template) {
            return function render() {
              // const h3 = document.createElement('h3')
              // h3.textContent = this.title
              // return h3

              return h('h3', null, this.title)
            }
          },
        }
      },
    }
  },
}
