

function burgerMenu() {

   const checkMenu = document.querySelector('[data-menu]')

   if (checkMenu) {


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
      function blockScrollHidden(elem, action, scrollBarWidth, widthHeader) {

         if (action === '_hidden') {

            if (elem.hasAttribute('data-header-animation') || elem.hasAttribute('data-experience')) {

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

            if (elem.hasAttribute('data-header-animation') || elem.hasAttribute('data-experience')) {

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



      // document.querySelector('body').style.paddingRight = `0px`
      // document.querySelector('body').style.overflowY = `auto`

      // открывается\закрывается
      // взаимодействуется тень

      document.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-menu-open]')) {

            // test
            // ширина браузера без скролла
            const innerWidth = window.innerWidth

            // данные для скролла
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            const widthHeader = innerWidth - scrollBarWidth

            const shadow = document.querySelector('[data-menu-shadow]')
            const body = document.querySelector('body')

            const menu = document.querySelector('[data-menu]')

            const header = document.querySelector('.header')
            const experience = document.querySelector('.experience')

            menu.classList.add('_active')
            shadow.classList.add('_active')

            if (!isMobile.any()) {
               // только на пк взаимодействуется скролл

               blockScrollHidden(header, '_hidden', scrollBarWidth, widthHeader)
               blockScrollHidden(body, '_hidden', scrollBarWidth, widthHeader)
               blockScrollHidden(experience, '_hidden', scrollBarWidth, widthHeader)
            } else {
               body.style.overflowY = 'hidden'
            }
         }

      })
      document.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-menu-close]')) {

            // test
            // ширина браузера без скролла
            const innerWidth = window.innerWidth

            // данные для скролла
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            const widthHeader = innerWidth - scrollBarWidth

            const shadow = document.querySelector('[data-menu-shadow]')
            const body = document.querySelector('body')

            const menu = document.querySelector('[data-menu]')

            const header = document.querySelector('.header')
            const experience = document.querySelector('.experience')

            menu.classList.remove('_active')
            shadow.classList.remove('_active')

            if (!isMobile.any()) {
               // только на пк взаимодействуется скролл

               blockScrollHidden(header, '_visible', scrollBarWidth, widthHeader)
               blockScrollHidden(body, '_visible', scrollBarWidth, widthHeader)
               blockScrollHidden(experience, '_visible', scrollBarWidth, widthHeader)
            } else {
               body.style.overflowY = 'auto'
            }
         }

      })
      document.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-menu-shadow]')) {

            // ширина браузера без скролла
            const innerWidth = window.innerWidth

            // данные для скролла
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            const widthHeader = innerWidth - scrollBarWidth

            const shadow = document.querySelector('[data-menu-shadow]')
            const body = document.querySelector('body')

            const menu = document.querySelector('[data-menu]')

            const header = document.querySelector('.header')
            const experience = document.querySelector('.experience')

            menu.classList.remove('_active')
            shadow.classList.remove('_active')

            if (!isMobile.any()) {
               // только на пк взаимодействуется скролл

               blockScrollHidden(header, '_visible', scrollBarWidth, widthHeader)
               blockScrollHidden(body, '_visible', scrollBarWidth, widthHeader)
               blockScrollHidden(experience, '_visible', scrollBarWidth, widthHeader)
            } else {
               body.style.overflowY = 'auto'
            }
         }

      })


   }


}






export { burgerMenu }




