

function burgerMenu() {



   const isMobile = {
      Android: function () {
         return navigator.userAgent.match(/Android/i)
      },
      BlackBerry: function () {
         return navigator.userAgent.match(/BlackBerry/i)
      },
      iOS: function () {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i)
      },
      Opera: function () {
         return navigator.userAgent.match(/Opera Mini/i)
      },
      Windows: function () {
         return navigator.userAgent.match(/IEMobile/i)
      },
      any: function () {
         return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
         )
      }
   }


   // блок для убирания сдвига при скрытии скролла
   function blockScrollHidden(elem, action) {

      if (action === '_hidden') {

         if (elem.hasAttribute('data-header-animation')) {

            // скрыть скролл 
            elem.style.width = `${widthHeader}px`
            elem.style.overflowY = `hidden`
            elem.classList.add('_hidden')
         } else {

            // скрыть скролл 
            elem.style.paddingRight = `${scrollBarWidth}px`
            elem.style.overflowY = `hidden`
            elem.classList.add('_hidden')
         }
      }

      if (action === '_visible') {

         if (elem.hasAttribute('data-header-animation')) {

            // показать скролл 
            elem.style.overflowY = `auto`
            elem.style.width = `100%`
            elem.classList.remove('_hidden')
         } else {

            // показать скролл 
            elem.style.paddingRight = `0px`
            elem.style.overflowY = `auto`
            elem.classList.remove('_hidden')
         }

      }

   }

   // ширина браузера без скролла
   const innerWidth = window.innerWidth

   // данные для скролла
   const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
   const widthHeader = innerWidth - scrollBarWidth

   // основные
   const open = document.querySelector('[data-menu-open]')
   const close = document.querySelector('[data-menu-close]')

   const shadow = document.querySelector('[data-menu-shadow]')
   const body = document.querySelector('body')

   const menu = document.querySelector('[data-menu]')

   const header = document.querySelector('.header')
   const experience = document.querySelector('.experience')

   body.style.paddingRight = `0px`
   body.style.overflowY = `auto`

   // открывается\закрывается
   // взаимодействуется тень

   open.addEventListener('click', (event) => {
      menu.classList.add('_active')
      shadow.classList.add('_active')

      if (!isMobile.any()) {
         // только на пк взаимодействуется скролл

         blockScrollHidden(header, '_hidden')
         blockScrollHidden(body, '_hidden')
         blockScrollHidden(experience, '_hidden')
      }
   })

   close.addEventListener('click', (event) => {
      menu.classList.remove('_active')
      shadow.classList.remove('_active')

      if (!isMobile.any()) {
         // только на пк взаимодействуется скролл

         blockScrollHidden(header, '_visible')
         blockScrollHidden(body, '_visible')
         blockScrollHidden(experience, '_visible')
      }
   })

   // закрывается по тени

   shadow.addEventListener('click', (event) => {
      menu.classList.remove('_active')
      shadow.classList.remove('_active')

      if (!isMobile.any()) {
         // только на пк взаимодействуется скролл

         blockScrollHidden(header, '_visible')
         blockScrollHidden(body, '_visible')
         blockScrollHidden(experience, '_visible')
      }
   })



}






export { burgerMenu }




