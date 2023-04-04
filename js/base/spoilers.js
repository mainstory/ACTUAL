function spoilers() {

   // data-spoilers-body
   // data-spoiler
   // data-spoiler-button
   // data-spoiler-content

   const body = document.querySelector('[data-spoilers-body]')

   if (body) {

      const firstElem = document.querySelector('[data-spoiler-content]')
      firstElem.classList.add('_active')
      firstElem.style.maxHeight = firstElem.scrollHeight + 'px'
      firstElem.closest('[data-spoiler]').classList.add('_active')


      body.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-spoiler-button]')) {

            const wrapper = eventTarget.closest('[data-spoiler]')
            const targetContent = wrapper.querySelector('[data-spoiler-content]')

            if (targetContent.classList.contains('_active')) {
               // если нажали на активный то свернуть его
               targetContent.classList.remove('_active')
               targetContent.style.maxHeight = '0'
               targetContent.closest('[data-spoiler]').classList.remove('_active')
            } else {
               // если нажали на не активный то свернуть активные
               const contents = body.querySelectorAll('[data-spoiler-content]')
               contents.forEach((content) => {
                  if (content === targetContent) {
                     // а таргет открыть
                     content.classList.add('_active')
                     content.style.maxHeight = content.scrollHeight + 'px'
                     content.closest('[data-spoiler]').classList.add('_active')

                  } else {
                     // то свернуть активные
                     content.classList.remove('_active')
                     content.style.maxHeight = '0'
                     content.closest('[data-spoiler]').classList.remove('_active')

                  }
               })
            }

         }

      })

      // корекция высоты при девтулзе
      window.addEventListener('resize', (event) => {
         const activeSpoiler = document.querySelector('.spoiler-content._active')
         if (activeSpoiler) {
            activeSpoiler.style.maxHeight = activeSpoiler.scrollHeight + 'px'
         }
      })

   }

}

export { spoilers }