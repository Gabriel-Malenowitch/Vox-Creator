import { baseStyles } from "./texts.js"
import { regEx } from "./regex.js"

export const setStyleInItem = (root, styleList) => {
    styleList?.map( (styleItem) => {
        root.style[styleItem[0]] = styleItem[1]
    })
    return root
}

export class Utils {

    getElements(bigString){
        const regFindVox = regEx.regFindVox
        const regContent = /(([^end;][^vox-])*)vox-/g
        let elements = []
        let utilList = []
        let result = []
        let initialIndex = 0
        let finalIndex = 0
        let counter = 0
        let lastInitialIndex = 0
        let lastFinalIndex = 0
        
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
                    lastInitialIndex = initialIndex
                    initialIndex = item.index
                }
                counter +=1
            }
            if(item.item.includes(";")){
                counter -=1
                if(counter === 0){
                    lastFinalIndex = finalIndex
                    finalIndex = item.index + item.item.split("").length

                    const momentumString = bigString.substring(lastFinalIndex, initialIndex).trim()
                    result.push(momentumString)

                    result.push(bigString.substring(initialIndex, finalIndex))
                }
            }
        })

        const momentumString = bigString.substring(finalIndex, bigString.split("").length).trim()
        result.push(momentumString)
        

    
        return result
    }
}