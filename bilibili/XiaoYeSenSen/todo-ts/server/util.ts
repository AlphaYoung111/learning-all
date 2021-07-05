import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { ITodoData } from '../src/js/types'
export const readFile = (file: string): string => {
  return readFileSync(resolve(__dirname, file), 'utf8')
}

export const writeFile = <T>(file: string, data: T): void => {
  writeFileSync(resolve(__dirname, file), JSON.stringify(data))
}

export const fileOperation = (path: string, fn?: any): string | void => {
  let todoList: ITodoData[] = JSON.parse(readFile('todo.json') || '[]')

  if (!fn) {
    return JSON.stringify(todoList)
  }

  todoList = fn(todoList)
  writeFile<ITodoData[]>(path, todoList)
}