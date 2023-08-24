// show menu 
const navMenu = document.getElementById('nav-menu')
 const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

 if(navToggle){
   navToggle.addEventListener('click',()=>{
      navMenu.classList.add('show-menu')
   })
 }

 if(navClose){
  navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
  })
 }



// ......   image gallery ..............////

function imgGallery(){

    let mainTag=  document.querySelector('.details__img')
    let smallTag= document.querySelectorAll('.details__small-img')
    
    smallTag.forEach((img)=>{
             img.addEventListener('click',()=>{
                 mainTag.src=img.src
             })
    })
}

imgGallery()












// var swiperCategories = new Swiper(".categories__container", {
//     spaceBetween:24,
//     loop:true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         640: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 4,
//           spaceBetween: 40,
//         },
//         1400: {
//           slidesPerView: 6,
//           spaceBetween: 24,
//         },
//       },
//   });

//   var swiperProducts = new Swiper(".new__container", {
//     spaceBetween:24,
//     loop:true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         640: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 4,
//           spaceBetween: 40,
//         },
//         1400: {
//           slidesPerView: 4,
//           spaceBetween: 24,
//         },
//       },
//   });





var swiperCategories = new Swiper(".categories__container", {
  spaceBetween:24,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },

    992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
});

var swiperProducts = new Swiper(".new__container", {
  spaceBetween:24,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
});









  const tabs=document.querySelectorAll('[data-target]'),
  tabContents=document.querySelectorAll('[content]');

  tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
      const target=document.querySelector(tab.dataset.target)
      tabContents.forEach((tabContent)=>{
        tabContent.classList.remove('active-tab')
    })
    target.classList.add('active-tab')
      
      tabs.forEach((tab)=>{
        tab.classList.remove('active-tab')
        
    })
    tab.classList.add('active-tab')
      
    })
  })