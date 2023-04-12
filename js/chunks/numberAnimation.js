function numberAnimation() {

   function start() {

      const elems = document.querySelectorAll('[data-animation]')

      elems.forEach((elem) => {

         const end = Number(elem.getAttribute('data-animation'))
         const addNumber = 1
         const startNumber = 1

         let i = startNumber

         const timer = setInterval(() => {

            if (i === end) {
               clearInterval(timer)
            }

            elem.innerText = i
            i = i + addNumber


         }, 50);

      })




   }



   const body = document.querySelector('body')



   document.addEventListener('scroll', (event) => {

      if (!document.querySelector('[data-experience]._stop-animation')) {
         const value = body.getBoundingClientRect().top

         if (value < 0) {
            start()
            document.querySelector('[data-experience]').classList.add('_stop-animation')

         }
      }


   })


}
export { numberAnimation }