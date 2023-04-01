

function burgerMenu() {


   const open = document.querySelector('[data-menu-open]')
   const close = document.querySelector('[data-menu-close]')

   const shadow = document.querySelector('[data-menu-shadow]')

   const menu = document.querySelector('[data-menu]')

   // открывается\закрывается
   // взаимодействуется тень
   
   open.addEventListener('click', (event) => {
      menu.classList.add('_active')
      shadow.classList.add('_active')
   })

   close.addEventListener('click', (event) => {
      menu.classList.remove('_active')
      shadow.classList.remove('_active')
   })

   // закрывается по тени

   shadow.addEventListener('click', (event) => {
      menu.classList.remove('_active')
      shadow.classList.remove('_active')
   })
        
      

}



export { burgerMenu }




