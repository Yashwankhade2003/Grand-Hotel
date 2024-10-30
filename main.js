
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';






//Header Scroll
let nav = document.querySelector(".navbar");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

//nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show")
    })
})




// swiper slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        e1: ".swiper-pagination",
        clickable: true,

    },
    autoplay: {
        delay: 3500,
    },
});

// Counter design

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    // Initializing counters
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5896, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7111, 3000);
});



// document.addEventListener("DOMContentLoaded", ()=>{
//     function counter(id, start, end, duration){
//         let obj= document.getElementById(id),
//         current = start,
//         range = end - start;
//         increment = end > start ? 1 : -1,
//         step = Math.abs(Math.floor(duration/range)),
//         timer = setInterval(()=>{
//             current += increment;
//             obj.textContent = current;
//             if(current == end){
//                 clearInterval(timer);
//             }
//         }, step);
//     }
//     counter("count1", 0, 1287, 3000);
//     counter("count2", 100, 5896, 2500);
//     counter("count3", 0, 1440, 3000);
//     counter("count4", 0, 7111, 3000);
// })



// Our Partners
var swiper = new Swiper(".our-partner", {

    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 2000,
    },

    breakpoints: {

        '991px': {
            slidesPerView: 5,
            spaceBetween: 10,
        },

        '767px': {
            slidesPerView: 3,
            spaceBetween: 10,
        },

        '320px': {
            slidesPerView: 2,
            spaceBetween: 8,
        },
    },

});