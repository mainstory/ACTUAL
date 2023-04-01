

function burgerMenu() {

   const open = document.querySelector('[data-menu-open]')
   const close = document.querySelector('[data-menu-close]')

   const shadow = document.querySelector('[data-menu-shadow]')
   const body = document.querySelector('body')

   const menu = document.querySelector('[data-menu]')

   // открывается\закрывается
   // взаимодействуется тень
   // взаимодействуется скролл
   
   open.addEventListener('click', (event) => {
      menu.classList.add('_active')
      shadow.classList.add('_active')
      body.classList.add('_scroll-hidden')
   })

   close.addEventListener('click', (event) => {
      menu.classList.remove('_active')
      shadow.classList.remove('_active')
      body.classList.remove('_scroll-hidden')
   })

   // закрывается по тени

   shadow.addEventListener('click', (event) => {
      menu.classList.remove('_active')
      shadow.classList.remove('_active')
      body.classList.remove('_scroll-hidden')
   })
        
      

}



export { burgerMenu }




