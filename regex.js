export const regEx = {
    findPageTitle: /vox-title (.*)end;/g,
    findPageLang: /vox-language (.*)end;/gi,
    findTrashCaracter: /\r\n|\n|\r|^\[|\]|;/g,
    findItemsInsideStyleArrayInComponent: /([^;]+;)/g,
    findStyleArrayInComponent: /\[[^\]]*]/g,
    // reg: /(vox-box([^\[]*\[[^\]]*\])?[^;]*;)/g,
    findInitComponent: /vox-box([^\[]*\[[^\]]*\])?/g,
    findComponentName: /vox-[^ |\[| \n]+/g,
    findComponentNameWithoutVox: /vox-([a-z]*)/,
    regFindVox: /([^really-]?vox-)|([^really-]?end;)/g,
}

