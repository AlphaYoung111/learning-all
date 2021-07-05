export const findParentNode = (target:HTMLElement,className:string):HTMLElement => {
    while(target = target.parentNode as HTMLElement) {
        if (target.className === className) {
            return target
        }
    }
}


export const createItem = (className:string, content:string):HTMLElement => {
    const itemEl:HTMLElement = document.createElement("div");
    itemEl.className = className
    itemEl.innerHTML = content
    return itemEl
}
