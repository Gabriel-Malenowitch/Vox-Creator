import { vox } from "./archive.js"
import { regEx } from "./regex.js"


//Componentes encontrados!!
const reg = /(vox-box([^\[]*\[[^\]]*\])?[^;]*;)/g
const components = vox.match(reg)
// console.log(components)



export const finder = {
    tests(){

        



        //console.log(keys)
    },

    
    

    getTitle(){
        let result = ""
        const reg = regEx.findPageTitle
        
        if(reg.test(vox)){   
            const listOfItems = vox.match(reg)
            const firstItem = listOfItems[0]
            result = firstItem.replace(reg, "$1")
        }

        return result
    },

    getLang(){

        let result = "en"
        const reg = regEx.findPageLang

        if(reg.test(vox)){
            
            const listOfItems = vox.match(reg)
            const firstItem = listOfItems[0]
            result = firstItem.replace(reg, "$1")
        }

        return result
    }
}