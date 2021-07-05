import { ITodoData } from "./types";
import TodoDom from "./todoDom";
import { addTodo, getTodoList, removeTodo, toggleTodo } from "./todoServer";

class TodoEvent extends TodoDom {
  private todoData: ITodoData[]

  constructor(todoData: ITodoData[], todoWrapper: HTMLElement) {
    super(todoWrapper)
    this.todoData = todoData
    this.init(todoData)
  }
  @getTodoList
  protected init(todoData: ITodoData[]) {
    console.log(this)
    this.todoData = todoData
    this.initList(this.todoData)
  }
  @addTodo
  public addTodo(todo: ITodoData): undefined | number {
    const _todo: ITodoData | null = this.todoData.find((item: ITodoData) => item.content === todo.content)
    if (!_todo) {
      this.todoData.push(todo)
      this.addItem(todo)
      return
    }
    return 1001
  }
  @removeTodo
  public removeTodo(target: HTMLElement, id: number): void {
    this.todoData = this.todoData.filter((item: ITodoData) => item.id !== id)
    this.removeItem(target)
  }
  @toggleTodo
  public toggleComplete(target: HTMLElement, id: number): void {
    this.todoData = this.todoData.map((item: ITodoData) => {
      if (item.id === id) {
        item.completed = !item.completed
        this.changeComplete(target, item.completed)
      }
      return item
    })
  }
}

export default TodoEvent
