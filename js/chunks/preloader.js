function preloader() {

   const preloader = document.querySelector('[data-preloader]')
   const body = document.querySelector('body')

   setTimeout(() => {
      preloader.classList.add('_close')

      document.querySelector('body').style.paddingRight = `0px`
      document.querySelector('body').style.overflowY = `auto`

   }, 1300)

}
export { preloader }



