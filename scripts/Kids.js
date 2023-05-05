import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    // Is this `for..of` loop needed? Can you refactor it?
    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child,name}</li>`
    }

    html += "</ol>"
    return html
}

