import { AboutSection } from "./jsParts/About"
import { newDisplay as home,newMenu as menu} from "./jsParts/Display"
import "./style.css"

document.addEventListener('DOMContentLoaded',()=> {
 home()
})

    document.getElementById('home').addEventListener('click',home)
    document.getElementById('menu').addEventListener('click',menu)
    document.getElementById('about').addEventListener('click',AboutSection)
