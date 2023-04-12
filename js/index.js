import {
   burgerMenu,
} from "./chunks/burgerMenu.js"
import {
   headerAnimation,
} from "./chunks/headerAnimation.js"
import {
   spoilers,
} from "./chunks/spoilers.js"
import {
   sliders,
} from "./chunks/sliders.js"
import {
   numberAnimation,
} from "./chunks/numberAnimation.js"


const preloader = document.querySelector('[data-preloader]')
setTimeout(() => {
   preloader.classList.add('_close')

   document.querySelector('body').style.paddingRight = `0px`
   document.querySelector('body').style.overflowY = `auto`


   burgerMenu()
   headerAnimation()
   spoilers()
   sliders()
   numberAnimation()

}, 1300)





