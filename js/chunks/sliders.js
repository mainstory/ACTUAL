
function sliders() {


   // ================================== // механизм // ================================== //


   function sliderMaxWidth(section, width, settings) {

      // настройки (false бозначает что еще не инициализирован)




      // если ширина меньше\ниже указаной ширины
      if (window.innerWidth < width) {
         // если меньше

         // показать (мобила)



         // одноразово добавляет слайдер
         if (!document.querySelector(`${section} .swiper._active`)) {

            if (document.querySelector(`${section} .swiper-wrapper`)) {
               document.querySelector(`${section} .swiper-wrapper`).classList.remove('_grid')
            }

            // основное
            function init() {

               new Swiper(`${section} .swiper`, settings)
            }
            init()

            document.querySelector(`${section} .swiper`).classList.add('_active')
            console.log('показать (мобила)');

            // дополнительное
            if (document.querySelector(`${section} .swiper-button-prev`)) {
               document.querySelector(`${section} .swiper-button-prev`).classList.add('_active')
               document.querySelector(`${section} .swiper-button-next`).classList.add('_active')
            }
            if (document.querySelector(`${section} .swiper-pagination`)) {
               document.querySelector(`${section} .swiper-pagination`).classList.add('_active')
            }


         }
      } else {
         // если больше

         // скрыть (пк)

         document.querySelector(`${section} .swiper-wrapper`).classList.add('_grid')

         // одноразово убираем слайдер если есть
         if (document.querySelector(`${section} .swiper._active`)) {

            // основное
            document.querySelector(`${section} .swiper`).swiper.destroy()
            document.querySelector(`${section} .swiper`).classList.remove('_active')
            console.log('скрыть (пк)');

            // дополнительное
            if (document.querySelector(`${section} .swiper-button-prev`)) {
               document.querySelector(`${section} .swiper-button-prev`).classList.remove('_active')
               document.querySelector(`${section} .swiper-button-next`).classList.remove('_active')
            }
            if (document.querySelector(`${section} .swiper-pagination`)) {
               document.querySelector(`${section} .swiper-pagination`).classList.remove('_active')
            }

         }


      }

   }
   // запуск (тут фильтры на 3 аргумент)
   function start(section, width, length, settings) {

      if (document.querySelector(section)) {


         // добавить слайдер если карточек больше чем указаный length
         if (length !== false) {

            if (document.querySelectorAll(`${section} .swiper-slide`).length > length) {

               // основное
               new Swiper(`${section} .swiper`, settings)

               // дополнительное
               if (document.querySelector(`${section} .swiper-button-prev`)) {
                  document.querySelector(`${section} .swiper-button-prev`).classList.add('_active')
                  document.querySelector(`${section} .swiper-button-next`).classList.add('_active')
               }
               if (document.querySelector(`${section} .swiper-pagination`)) {
                  document.querySelector(`${section} .swiper-pagination`).classList.add('_active')
               }


            } else {
               sliderMaxWidth(section, width, settings)
               window.addEventListener('resize', (event) => {

                  sliderMaxWidth(section, width, settings)

               })
            }

         } else {
            // вызов
            sliderMaxWidth(section, width, settings)
            window.addEventListener(`resize`, (event) => {

               sliderMaxWidth(section, width, settings)

            })
         }

      }
   }






   // ================================== // partners // ================================== //





   start('.partners', 1024, false, {

      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      speed: 1200,
      autoHeight: true,
      autoplay: {
         delay: 3500,
      },

      navigation: {
         nextEl: '.partners .swiper-button-next',
         prevEl: '.partners .swiper-button-prev'
      },
      pagination: {
         el: '.partners .swiper-pagination',
         clickable: true,
      },

      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         425: {
            slidesPerView: 2,
         },
         552: {
            slidesPerView: 3,
         },
         768: {
            slidesPerView: 4,
         },
         1024: {
            slidesPerView: 5,
         },
      }

   })

   start('.gallery', 1024, false, {

      autoHeight: true,


      grabCursor: true,
      loop: true,
      speed: 1200,
      autoplay: {
         delay: 3500,
      },

      navigation: {
         nextEl: '.gallery .swiper-button-next',
         prevEl: '.gallery .swiper-button-prev'
      },
      pagination: {
         el: '.gallery .swiper-pagination',
         clickable: true,
      },

      breakpoints: {
         // 320: {
         //    slidesPerView: 1,
         // },
         // 425: {
         //    slidesPerView: 1,
         // },
         552: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         1024: {
            slidesPerView: 5,
         },
      }

   })

   start('.reviews', 768, false, {

      autoHeight: true,

      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      speed: 1200,
      autoplay: {
         delay: 3500,
      },

      navigation: {
         nextEl: '.reviews .swiper-button-next',
         prevEl: '.reviews .swiper-button-prev'
      },
      pagination: {
         el: '.reviews .swiper-pagination',
         clickable: true,
      },

      breakpoints: {
         // 320: {
         //    slidesPerView: 1,
         // },
         425: {
            slidesPerView: 1,
         },
         552: {
            slidesPerView: 2,
         },
         768: {
            slidesPerView: 3,
         },
         1024: {
            slidesPerView: 3,
         },
      }

   })









}

export { sliders }







