function numberAnimation() {

   function start(section, addNumber, end) {

      const elem = document.querySelector(section)

      let i = 0

      const timer = setInterval(() => {

         if (i === end) {
            clearInterval(timer)
         }

         elem.innerText = i
         i = i + addNumber


      }, 50);



   }



   const body = document.querySelector('body')



   document.addEventListener('scroll', (event) => {

      if (!document.querySelector('[data-experience]._stop-animation')) {
         const value = body.getBoundingClientRect().top

         if (value < 0) {
            start('[data-animation-1]', 1, 26)
            start('[data-animation-2]', 1, 27)
            start('[data-animation-3]', 1, 28)
            start('[data-animation-4]', 1, 29)
            document.querySelector('[data-experience]').classList.add('_stop-animation')

         }
      }


   })


}
export { numberAnimation }