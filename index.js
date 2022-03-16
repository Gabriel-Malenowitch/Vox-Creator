import { vox } from "./archive.js"
import { finder } from "./findThings.js"



finder.tests()

//Seta o titulo da página
document.title = finder.getTitle()

//Seta a linguagem da página
const lang = finder.getLang() ? finder.getLang() : "en"
document.documentElement.lang = lang






// Adicionar elemento
// Elemento adicionado deve já conter um estilo

//document.getElementById("root").innerHTML
