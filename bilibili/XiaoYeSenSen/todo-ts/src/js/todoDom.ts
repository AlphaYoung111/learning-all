import TodoTemplate from "./todoTemplate";
import {ITodoData} from "./types";
import {createItem, findParentNode} from "./util";

class TodoDom extends TodoTemplate{
    private todoWrapper:HTMLElement
    constructor(todoWrapper:HTMLElement) {
        super();
        this.todoWrapper = todoWrapper
    }

    protected initList(todoData: ITodoData[]) {
        if (todoData.length) {
            const fragment = document.createDocumentFragment()
            todoData.map((todo:ITodoData) => {
                const itemEl = createItem('todo-item',this.todoView(todo))
                fragment.appendChild(itemEl)
            })
            this.todoWrapper.appendChild(fragment)
        }
    }

    protected addItem(todo:ITodoData) {
        const itemEl = createItem('todo-item',this.todoView(todo))
        this.todoWrapper.appendChild(itemEl)
    }

    protected removeItem(target:HTMLElement):void {
        console.log(target);
        const parentNode:HTMLElement = findParentNode(target,'todo-item')
        parentNode.remove()
    }

    public changeComplete (target:HTMLElement,completed:boolean):void {
        const parentNode:HTMLElement = findParentNode(target, 'todo-item')
        const contentEl:HTMLElement = parentNode.getElementsByTagName('span')[0]
        contentEl.style.textDecoration = completed ?'line-through':'none'
    }
}

export default TodoDom
