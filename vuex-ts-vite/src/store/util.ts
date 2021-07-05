import { modules } from './modules';


// 单个getters
// infer的功能可以，看作能定义一个你想要得到位置的类型的声明
// 比如我想得到getters这个key的值对应是什么类型我就可以先通过infer声明一个G
type GetGetter<Module> = Module extends { getters: infer G } ? G : unknown

// 获取所有的modules的getters M => Modules
// modules: {
//   user: {
//     getters:{},
//       ....
//   },
//   admin: {
//     getters:{},
//       ...
//   }
// }
// 下面的K代表着上面的每一个模块的 如 user，admin
// 所以M[K]代表着每一个单独的模块
type GetGetters<M> = {
  [K in keyof M]: GetGetter<M[K]>
}

type ModuleGetters = GetGetters<typeof modules>

type AddPrefix<P, K> = `${P & string}/${K & string}`

type GetSpliceKey<Module, Key> = AddPrefix<Key, keyof Module>

type GetSpliceKeys<Modules> = {
  // k =》 user  Modules[K] => 包含isLogin等方法的对象 
  [K in keyof Modules]: GetSpliceKey<Modules[K], K>
}[keyof Modules]
type xx = GetSpliceKeys<ModuleGetters>

type GetSpliceObj<M>{
  [K in GetSpliceKeys<M>]:
}

type Getters = GetSpliceObj<ModuleGetters>