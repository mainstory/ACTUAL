function numberAnimation() {

   function start(addNumber, end) {

      const elems = document.querySelectorAll('[data-animation]')

      elems.forEach((elem) => {
         let i = 0

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
            start(1, 26)
            document.querySelector('[data-experience]').classList.add('_stop-animation')


         }
      }


   })


}
export { numberAnimation }