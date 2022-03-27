import { finder } from "./findThings.js"
import { Tree } from "./tree.js"
import { vox } from "./archive.js"
import { regEx } from "./regex.js"
import { Utils } from "./utils.js"
import { Component } from "./component.js"
import { checkIncludes } from "./funcs.js"


finder.tests()

//==================================
// Seta o titulo da página
document.title = finder.getTitle()
//==================================


//==================================
// Seta a linguagem da página
const lang = finder.getLang() ? finder.getLang() : "en"
document.documentElement.lang = lang
//==================================



// Definindo a div main
const rootDiv = document.getElementById("root")
const tree = new Tree(vox)
const elementsList = tree.getElementTree()
console.log(elementsList)
elementsList.forEach( element => {
    rootDiv.appendChild(element)
})



// rootDiv.appendChild(tree.getElementTree())




// const component = new Tree(componentInString)


// for (let i = 0; i < 4; i++){

//     const componentInString = vox.match(regEx.reg)[i]
    
    
//     const component = new Component(componentInString)
//     const componentElement = component.getElement()
//     componentElement.innerHTML = component.getChildren()
//     rootDiv.appendChild(componentElement)
//  
// }

    









// const componentElement = component.getElement()
// componentElement.innerHTML = component.getChildren()
// rootDiv.appendChild(componentElement)

// Adicionar elemento
// Elemento adicionado deve já conter um estilo

