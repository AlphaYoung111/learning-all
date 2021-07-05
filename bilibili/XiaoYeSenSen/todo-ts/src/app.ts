import {ITodoData} from "./js/types";
import TodoEvent from "./js/todoEvent";

((doc) => {
    const inputEl:HTMLInputElement = document.querySelector('input');
    const btnEl:HTMLButtonElement = document.querySelector('button');
    const todoListEl:HTMLDivElement = document.querySelector('.todo-list');

    const todoData:ITodoData[] = [];


    const todoEvent = new TodoEvent(todoData,todoListEl)
    const init = ():void => {
        bindEvent()
    }

    function bindEvent ():void {
        btnEl.addEventListener('click', handleAddBtnClick, false)
        todoListEl.addEventListener('click', handleListClick, false)
    }

    function handleAddBtnClick ():void {
        const val = inputEl.value.trim()

        if (val.length) {
            const ret = todoEvent.addTodo({
                id: new Date().getTime(),
                completed:false,
                content:val
            })

            if (ret && ret===1001) {
                alert('列表项已经存在' )
                return
            }
            inputEl.value = ''
        }
    }

    function handleListClick (e:MouseEvent):void {
        const tar = e.target as HTMLElement
        const tagName = tar.tagName.toLocaleLowerCase()

        if (tagName === 'input' || tagName === 'button') {
            const id = parseInt(tar.dataset.id)
            switch (tagName) {
                case "input":
                    todoEvent.toggleComplete(tar,id)
                    break
                case "button":
                    todoEvent.removeTodo(tar,id)
                    break
                default:
                    break
            }
        }
    }

    init()
}
)(document)
