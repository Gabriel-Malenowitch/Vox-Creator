export const regEx = {
    findPageTitle: /vox-title (.*);/g,
    findPageLang: /vox-language (.*);/gi,
    findTrashCaracter: /\r\n|\n|\r|^\[|\]|;/g,
    findItemsInsideStyleArrayInComponent: /([^;]+;)/g,
    findStyleArrayInComponent: /\[[^\]]*]/g,
    // reg: /(vox-box([^\[]*\[[^\]]*\])?[^;]*;)/g,
    findComponentName: /vox-[^ |\[| \n]+/g,
    findComponentNameWithoutVox: /vox-([a-z]*)/,
    
    reg: /(vox-box([^\[]*\[[^\]]*\]))?([^vox-]*vox-[^;]*;)([^;]*;)/g,
    // reg: /(vox-box([^\[]*\[[^\]]*\])?(([^vox-]*vox-([^\[]*\[[^\]]*\])?([^vox-]*)*))[^;];)/g,
}

