import { Component, OnInit } from '@angular/core';
import { setTableSize } from 'src/app/shared/helper/functions';
import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const swiper = new Swiper('.swiper', {
//   modules: [Navigation, Pagination],
//   ...
// })
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navMenu: any
  hamburger: any
  constructor() { }

  ngOnInit(): void {
    setTableSize()
    this.swiper()
    window.addEventListener('scroll', this.activeLink)
  }

  swiper() {

  }

  hamburgerClick() {
    this.hamburger = document.getElementById('hamburger');
    this.navMenu = document.getElementById('nav-menu');
    this.hamburger?.addEventListener("click", () => {
      this.navMenu?.classList.remove('hidden')
    })
  }
  closebtnClick() {
    const navClose = document.getElementById('nav-close');
    navClose?.addEventListener("click", () => {
      this.navMenu?.classList.add('hidden')
    })
  }

  activeLink() {
    const sections = document.querySelectorAll('section');
    const navLink = document.querySelectorAll(".nav_link");
    let current: any = 'home';
    sections.forEach(section => {
      const sectiontop = section.offsetTop;
      if (scrollY >= sectiontop - 60) {
        current = section.getAttribute('id')
      }
    })

    navLink.forEach((link:any) => {
      link?.classList.remove("text-secondaryColor");
      if (link?.href.includes(current)) {
        link?.classList.add("text-secondaryColor");
      }
    })
  }

  nav_link_click() {
    const navLink = document.querySelectorAll('.nav_link');
    navLink.forEach((link: any) => {
      link?.addEventListener("click", () => {
        this.navMenu?.classList.add('hidden')
      })
    });
  }

  menu_click() {
    const tabs = document.querySelectorAll('.tabs_wrap ul li');
    const all = document.querySelectorAll('.item_wrap');
    const foods = document.querySelectorAll('.food');
    const snacks = document.querySelectorAll('.snack');
    const beverages = document.querySelectorAll('.beverage');

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(tab1 => {
          tab1.classList.remove('active')
        })
        tab.classList.add('active')
        const tabvalue = tab.getAttribute('data-tabs');

        all.forEach(item => {

        })

        if (tabvalue === 'food') {
          foods.forEach(item => {
            // item.style.display = 'block'
          })
        }
      })
    })
  }

  click_scroll_up() {
    const scrollUpBtn = document.getElementById('scroll-up');
    if (scrollY >= 250) {
      scrollUpBtn?.classList.remove('-bottom-1/2');
      scrollUpBtn?.classList.add('bottom-4')
    } else {
      scrollUpBtn?.classList.add('-bottom-1/2');
      scrollUpBtn?.classList.remove('bottom-4')
    }

  }

}


