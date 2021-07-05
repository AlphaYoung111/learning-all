
<template>
  <div>
    <form>
      <input type="text" name v-model="state1.std.id" />
      <input type="text" name v-model="state1.std.name" />
      <input type="text" name v-model="state1.std.age" />
      <input type="submit" @click="addStd" />
    </form>
    <ul>
      <li v-for="(item,index) in status" :key="item.id" @click="remSta(index)">{{item.id}}--{{item.name}}--{{item.age}}</li>
    </ul>

    <p>{{origin.time}}</p>
    <button @click="change">qq</button>
  </div>
</template>

<script>

import { customRef, reactive, shallowReactive, shallowRef, triggerRef } from 'vue'
function myRef (value) {
  return customRef((track, trigger) => {
    return {
      get () {
        // 告诉vue这个数据是需要追踪变化的
        track()
        return value
      },
      set (newValue) {
        value = newValue
        // 告诉vue触发页面更新
        trigger()
      }
    }
  })
}
export default {
  name: 'HelloWorld',
  setup () {
    let { state, remSta } = useStatusRemove()
    let { state1, addStd } = useStatusAdd(state)
    let origin = reactive({
      time: new Date()
    })
    const change = () => {
      origin.time = origin.time.getTime()
    }
    return {
      ...state,
      remSta,
      state1,
      addStd,
      origin,
      change
    }
  }
}
function useStatusRemove () {
  let state = reactive({
    status: [
      { id: 1, name: 'a', age: 5 },
      { id: 2, name: 'b', age: 6 },
      { id: 3, name: 'c', age: 7 },
    ]
  })

  const remSta = (i) => {
    state.status.splice(i, 1)
  }

  return {
    state,
    remSta
  }
}

function useStatusAdd (state) {
  let state1 = reactive({
    std: {
      id: '',
      age: '',
      name: ''
    }
  })

  const addStd = (e) => {
    e.preventDefault()
    let std = Object.assign({}, state1.std)
    state.status.push(std)
    state1.std.id = ''
    state1.std.age = ''
    state1.std.name = ''
  }

  return {
    state1,
    addStd
  }
}
</script>
