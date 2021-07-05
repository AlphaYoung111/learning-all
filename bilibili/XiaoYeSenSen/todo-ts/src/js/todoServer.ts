import $ from 'jquery'
import { ITodo } from '../../server/types'
import { ITodoData } from './types'

const BASE_URL = 'http://localhost:8080'

const request = (methodName: string, url: string, options?: JQuery.AjaxSettings): JQuery.jqXHR<any> => {
  return $.ajax({
    method: methodName,
    url: BASE_URL + url,
    ...options
  })
}

export const getTodoList = (
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void => {
  // 原方法
  const _orginalFn = descriptor.value

  // 重写
  descriptor.value = function (todoData: ITodoData[]) {
    request('GET', '/todoList').then((res: string) => {
      if (!res) {
        return
      }

      todoData = JSON.parse(res)
    }).then(() => {
      _orginalFn.call(this, todoData)
    })
  }
}

export const removeTodo = (
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void => {
  const _orginalFn = descriptor.value

  descriptor.value = function (target: HTMLElement, id: number) {
    $.post('http://localhost:8080/remove', { id }).then(() => {
      _orginalFn.call(this, target, id)
    })
  }
}


export const toggleTodo = (
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void => {
  const _orginalFn = descriptor.value
  descriptor.value = function (target: HTMLElement, id: number) {
    $.post('http://localhost:8080/toggle', { id }).then(() => {
      _orginalFn.call(this, target, id)
    })
  }
}

export const addTodo = (
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void => {
  const _orginalFn = descriptor.value
  descriptor.value = function (target: HTMLElement, todo: ITodoData) {
    $.post('http://localhost:8080/add', { todo: JSON.stringify(todo) }).then(() => {
      _orginalFn.call(this, todo)
    })
  }
}