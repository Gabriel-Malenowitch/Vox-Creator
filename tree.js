import { Component } from "./component.js"
import { Utils } from "./utils.js"
import { listOfNonElements } from "./infos.js"
import { checkIncludes } from "./funcs.js"

export class Tree extends Utils{
    children = []

    constructor(componentString){
        super()
        
        const elements = this.getElements(componentString)
        
        elements.forEach( stringElement => {
            if(!checkIncludes(stringElement, listOfNonElements)){
                const element = new Component(stringElement)
                
                this.children.push(element.getElement())
            }

        })
        
    }

    getElementTree(){
        return this.children
    }

}