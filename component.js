import { vox } from "./archive.js"
import { regEx } from "./regex.js"
import { baseStyles } from "./texts.js"
import { setStyleInItem, Utils } from "./utils.js"
import { Tree } from "./tree.js"



export class Component extends Utils{
    constructor(component){
        super()
        const componentName = this.getComponentName(component)
        let styleItems = undefined

        
        if(component.includes("[") && component.includes("]")){
            styleItems = this.getStyleItems(component)
        }

        const HtmlComponentWithStyle = this.createHtmlComponentWithStyle(componentName, styleItems)

        this.children = this.takeChildren(component)

        this.componentElement = HtmlComponentWithStyle
        
        if(this.children && this.children.includes("vox")){
            const componentsTree = new Tree(this.children).getElementTree()
            componentsTree.forEach( element => {
                this.componentElement.appendChild(element)
            })
        }else{
            if(this.children){
                HtmlComponentWithStyle.innerText += this.children
            }
        }

    }

    takeChildren(component){
        let result = ""
        const reg = regEx.findChildrenComponent
        const matched = component.match(regEx.findInitComponent)
        if(matched){
            component = component.substring(
                component.match(regEx.findInitComponent)[0].split("").length+1,
                component.split("").length-4
            )
        }
        
        result = component
        result = result.replace(regEx.findTrashCaracter.test, "")
        result = result === "" ? null : result

        return result
    }

    getChildren(){
        return this.children
    }

    getElement(){
        return this.componentElement
    }

    getComponentName(component){
        let componentName
        if(component.includes("vox-")){
            componentName = component.match(regEx.findComponentName)[0]        
            componentName.replace(regEx.findTrashCaracter, "")
            componentName = componentName.replace(regEx.findComponentNameWithoutVox, "$1")
            componentName = componentName.trim()
        }else{
            componentName = component
        }

        return componentName
    }

    getStyleItems(component){
        //Separando o array do componente
        component = this.findStyleArrayInString(component)

        //Pegando os styles de dentro do array de estilo
        const styles = this.findStylesInArrayString(component)
        
        // Limpando caracteres lixo da string
        const styleItems = this.sanitizeStyleItemsInString(styles)

        return styleItems
    }

    findStyleArrayInString(component){
        const reg = regEx.findStyleArrayInComponent
        component = component.match(reg)[0]
        return component
    }

    findStylesInArrayString(component){
        const reg = regEx.findItemsInsideStyleArrayInComponent
        const styles = component.match(reg)
        return styles
    }

    sanitizeStyleItemsInString(styles){
        const reg = regEx.findTrashCaracter
        let thisResult = undefined
        let styleItems = undefined

        if(styles){

            styleItems = styles.map( styleItemString => {

                styles = styles.filter(item => item)
            
                //Limpando \n, espaços, ou qualquer lixo no caminho
                thisResult = styleItemString.replace(reg, "")

                //Tirando os espaços em volta
                thisResult = thisResult.trim()

                //Separando em dois itens
                thisResult = thisResult.split(/ +/)
            })

            return thisResult
        }

        return styleItems
    }

    createHtmlComponentWithStyle(componentName, styleItems){
        const tag = this.getElementByNameInTagFormat(componentName)
        let root = document.createElement(tag)

        root = setStyleInItem(root, baseStyles[componentName])

        return root
    }

    getElementByNameInTagFormat(name){
        let tag = "div"

        switch(name){
            case "box":
                tag = "div"
        }

        return tag
    }
}

//new Component(vox.match(regEx.reg)[0])
//const n = new Component(vox.match(regEx.reg)[1])
// console.log(n.getElement())