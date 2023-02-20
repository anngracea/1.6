import '../scss/style.scss'

const init = false
function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true
      swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    }
  } else if (init) {
    swiper.destroy()
    init = false
  }
}
swiperCard()
window.addEventListener('resize', swiperCard)

// Код для первого свайпера //
const button = document.getElementById('block')
button.addEventListener('click', function myFunction() {
  if (window.innerWidth < '966') {
    if (document.getElementById('main').style.height != '355px') {
      document.getElementById('main').style.height = '355px'
      document.getElementById('text').innerHTML = 'Скрыть'
      document.getElementById('svg-2').style.transform = 'rotate(180deg)'
    } else {
      document.getElementById('text').innerHTML = 'Показать все'
      document.getElementById('main').style.height = '165px'
      document.getElementById('svg-2').style.transform = 'rotate(360deg)'
    }
  } else {
    if (document.getElementById('main').style.height != '255px') {
      document.getElementById('main').style.height = '255px'
      document.getElementById('text').innerHTML = 'Скрыть'
      document.getElementById('svg-2').style.transform = 'rotate(180deg)'
    } else {
      document.getElementById('text').innerHTML = 'Показать все'
      document.getElementById('main').style.height = '165px'
      document.getElementById('svg-2').style.transform = 'rotate(360deg)'
    }
  }
})

// Код для кнопок показать / скрыть в первом экране + раскрывающийся текстовый блок //
const button__main = document.getElementById('button__main')
button__main.addEventListener('click', function functionMain() {
  if (window.innerWidth < '768') {
    if (document.getElementById('span').innerHTML == 'Читать далее') {
      document.getElementById('content').style.maxHeight = '200px'
      document.getElementById('content__text').style.display = 'block'
      document.getElementById('span').innerHTML = 'Скрыть'
      document.getElementById('svg').style.transform = 'rotate(180deg)'
    } else {
      document.getElementById('content').style.maxHeight = '60px'
      document.getElementById('content__text').style.display = 'none'
      document.getElementById('span').innerHTML = 'Читать далее'
      document.getElementById('svg').style.transform = 'rotate(360deg)'
    }
  } else if (window.innerWidth < '1440') {
    if (document.getElementById('span').innerHTML == 'Читать далее') {
      document.getElementById('content').style.maxHeight = '230px'
      document.getElementById('span').innerHTML = 'Скрыть'
      document.getElementById('svg').style.transform = 'rotate(180deg)'
    } else {
      document.getElementById('content').style.maxHeight = '160px'
      document.getElementById('span').innerHTML = 'Читать далее'
      document.getElementById('svg').style.transform = 'rotate(360deg)'
    }
  } else {
    if (document.getElementById('span').innerHTML == 'Читать далее') {
      document.getElementById('span').innerHTML = 'Скрыть'
      document.getElementById('svg').style.transform = 'rotate(180deg)'
    } else {
      document.getElementById('span').innerHTML = 'Читать далее'
      document.getElementById('svg').style.transform = 'rotate(360deg)'
    }
  }
})

// Код для второго свайпера (виды техники) //

const buttonSwipe = document.getElementById('block-2')
buttonSwipe.addEventListener('click', function myFunctionBottom() {
  if (window.innerWidth < '966') {
    if (document.getElementById('main-2').style.height != '750px') {
      document.getElementById('main-2').style.height = '750px'
      document.getElementById('text-2').innerHTML = 'Скрыть'
      document.getElementById('svg-3').style.transform = 'rotate(180deg)'
    } else {
      document.getElementById('text-2').innerHTML = 'Показать все'
      document.getElementById('main-2').style.height = '165px'
      document.getElementById('svg-3').style.transform = 'rotate(360deg)'
    }
  } else {
    if (document.getElementById('main-2').style.height != '550px') {
      document.getElementById('main-2').style.height = '550px'
      document.getElementById('text-2').innerHTML = 'Скрыть'
      document.getElementById('svg-3').style.transform = 'rotate(180deg)'
    } else {
      document.getElementById('text-2').innerHTML = 'Показать все'
      document.getElementById('main-2').style.height = '165px'
      document.getElementById('svg-3').style.transform = 'rotate(360deg)'
    }
  }
})

// Всё что выше не менялось

// Создаем перемернные для кнопок в главном меню слева //
const burger = document.getElementById('burger')
const close = document.querySelector('.icon-button--close')
const menu = document.querySelector('.menu')
const modal = document.querySelector('.icon-button--message')

// Создаем обработичк и функцию, которая раскрывает меню при нажатии на бургер и показывает подложку в нужном промежутке //
burger.addEventListener('click', function myBurgerOpen() {
  menu.classList.toggle('menu--active')
  if (window.innerWidth < '1440' && window.innerWidth > '768') {
    document.getElementById('back-1').style.display = 'block'
  }
})

// Создаем обработичк и функцию, которая ЗАКРЫВАЕТ меню при нажатии и убирает подложку //
close.addEventListener('click', function myBurgerClose() {
  menu.classList.toggle('menu--active')
  document.getElementById('back-1').style.display = 'none'
})

// Функция скрывает меню и подложку при клике на подложку //
document
  .getElementById('back-1')
  .addEventListener('click', function myBurgerClose2() {
    menu.classList.toggle('menu--active')
    document.getElementById('back-1').style.display = 'none'
  })

// При клике в главном меню на иконку сообщения делаем всплывающее окно //
modal.addEventListener('click', function myModalFeedback() {
  if (window.innerWidth < '1440') {
    document.querySelector('.feedback').classList.toggle('form__active')
  } else {
    document.querySelector('.feedback').classList.toggle('form__active--big')
    document.getElementById('back-2').style.display = 'block'
  }
})

// При клике в шапке планшета на иконку сообщения делаем всплывающее окно //
document
  .querySelector('.icon-button--chat')
  .addEventListener('click', function myModalFeedback() {
    document.querySelector('.feedback').classList.toggle('form__active')
  })

// При клике на крестик у модалки закрываем всплывающее окно и убираем подложку//
const closeFeedback = document.querySelector('.icon-button--modal')
closeFeedback.addEventListener('click', function myFeedbackClose() {
  if (window.innerWidth < '1440') {
    document.querySelector('.feedback').classList.toggle('form__active')
  } else {
    document.querySelector('.feedback').classList.toggle('form__active--big')
    document.getElementById('back-2').style.display = 'none'
  }
})

// Создаем функцию для клика по иконке телефон в главном меню и добавляем подложку для десктопа //
const modalCall = document.querySelector('.icon-button--phone')
modalCall.addEventListener('click', function modalCallOpen() {
  if (window.innerWidth < '1440') {
    document.querySelector('.call').classList.toggle('form__active')
  } else {
    document.querySelector('.call').classList.toggle('form__active--big')
    document.getElementById('back-3').style.display = 'block'
  }
})

// При клике на крестик у модалки звонок закрываем окно и убираем подложку, если есть //
const closeCall = document.getElementById('modal-close')
closeCall.addEventListener('click', function myCallClose() {
  if (window.innerWidth < '1440') {
    document.querySelector('.call').classList.toggle('form__active')
  } else {
    document.querySelector('.call').classList.toggle('form__active--big')
    document.getElementById('back-3').style.display = 'none'
  }
})

// При клике на иконку звонок в шапке планшета открываем модалку //
document
  .querySelector('.icon-button--call')
  .addEventListener('click', function myModalCall() {
    document.querySelector('.call').classList.toggle('form__active')
  })

// При клике на подложку убираем модалку фидбэк и саму подложку //
document
  .getElementById('back-2')
  .addEventListener('click', function myBurgerClose2() {
    document.querySelector('.feedback').classList.toggle('form__active--big')
    document.getElementById('back-2').style.display = 'none'
  })

// При клике на подложку убираем модалку звонок и саму подложку //
document
  .getElementById('back-3')
  .addEventListener('click', function myBurgerClose2() {
    document.querySelector('.call').classList.toggle('form__active--big')
    document.getElementById('back-3').style.display = 'none'
  })
