const button = document.querySelectorAll('[data-button]')

button.forEach(btn => {
    btn.addEventListener('click', () => {
        const clickTarget = btn.dataset.button

        const menu = document.querySelectorAll(`[data-menu="${clickTarget}"]`)
        const button = document.querySelector(`[data-button="${clickTarget}"]`)

        menu.forEach(menu => menu.classList.toggle('active'))
        button.classList.toggle('active')
    })
})
document.addEventListener('click', (e) => {
  const activeMenus = document.querySelectorAll('[data-menu].active')

  activeMenus.forEach(menu => {
    const target = menu.dataset.menu
    const button = document.querySelector(`[data-button="${target}"]`)

    if (!menu.contains(e.target) &&
        !button.contains(e.target)) 
        {
      menu.classList.remove('active')
      button.classList.remove('active')
    }
  })
})

const swiper = new Swiper('.Courses__swiper', {
  slidesPerView: 2,
  centeredSlides: true,
  initialSlide: 1,

  pagination: {
    el: '.Courses-pagination',
  },
});
const swiper2 = new Swiper('.Customers__swiper', {
  pagination: {
    el: '.Customers-pagination'
  }
})