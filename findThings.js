import { vox } from "./archive.js"
import { regEx } from "./regex.js"


export const finder = {
    tests(){
        // vox-box[
        //     Just a test
        // ]
        //     Oiiiiiiiii
        // ;

        //Componente encontrado
        const reg = /vox-box([\n \[]+[^\]])[^;]+;/gi
        const components = vox.match(reg)
        console.log(components)


        
        
        const regKeys = /\[[^\]]*/g
        const betweenKeys = components[0].match(regKeys)

        // const regExItem = /(\r\n|\n|\r) [^;]/g
        console.log(betweenKeys)


        // const regKey = /[^\-]*/g
        // const keys = betweenKeys.match(regKey)




        console.log(keys)
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