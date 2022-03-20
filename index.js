import { finder } from "./findThings.js"
import { Tree } from "./tree.js"
import { vox } from "./archive.js"
import { regEx } from "./regex.js"


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


// for (let i = 0; i < 4; i++){

//     const componentInString = vox.match(regEx.reg)[i]
    
    
//     const component = new Component(componentInString)
//     const componentElement = component.getElement()
//     componentElement.innerHTML = component.getChildren()
//     rootDiv.appendChild(componentElement)
//  
// }

const componentInString = vox.match(regEx.reg)
    
    
// const component = new Tree(componentInString)
// componentInString?.reverse().map(e=>

function getElement(bigString){
    const regFindVox = /([^really-]?vox-)|([^really-]?end;)/g
    let elements = []
    let utilList = []
    let initialIndex = 0
    let finalIndex = 0
    let counter = 0

    //Encontrando os "vox-"
    utilList = bigString.matchAll(regFindVox)
    for(const match of utilList){
        elements.push({
            item: match[0],
            index: match.index
        })
    }
    
    elements.forEach((item, index) => {
        if(item.item.includes("vox")){
            if(counter === 0){
                initialIndex = item.index
            }
            counter +=1
        }
        if(item.item.includes(";")){
            counter -=1
            if(counter === 0){
                finalIndex = item.index + item.item.split("").length
                console.log(initialIndex, finalIndex)
                console.log(vox.substring(initialIndex, finalIndex))
            }
        }
    })

    console.log(elements)

    return elements
}





rootDiv.innerHTML =`
    <pre>
        ${JSON.stringify(getElement(vox), null, 2)}
    </pre>
`










// const componentElement = component.getElement()
// componentElement.innerHTML = component.getChildren()
// rootDiv.appendChild(componentElement)

// Adicionar elemento
// Elemento adicionado deve já conter um estilo

