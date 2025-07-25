import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import gsap from 'gsap';
declare var $: any;

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})

 export class HeroSliderComponent implements AfterViewInit {
  slides = [
    {
      title: "Let's make your office stylish",
      subtitle: "ginkonursery.com",
      background: 'https://leaflife-html.vercel.app/assets/img/hero_bg.jpg'
      // background: 'assets/img/banner1_.jpg'
    },
    {
      title: "Let's make your office stylish",
      subtitle: "ginkonursery.com",
      background: 'assets/img/banner2_.jpg'
    },
    {
      title: "Let's make your office stylish",
      subtitle: "ginkonursery.com",
      background: 'assets/img/banner3_.jpg'
    },
  ];

  @ViewChildren('contentBox') contentBoxes!: QueryList<ElementRef>;

 ngAfterViewInit(): void {
  const owl = $('.two-banner-slider');
  owl.owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  animateOut: 'slideOutLeft',
  animateIn: 'slideInRight',
  dots: true,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    768: {
      items: 1
    },
    1200: {
      items: 1
    }
  },
  onChanged: (event: any) => {
    const currentIndex = event.item.index % this.slides.length;
    setTimeout(() => this.animateBanner(currentIndex), 100);
  },
});

  $('.nav-next').click(() => owl.trigger('next.owl.carousel'));
  $('.nav-prev').click(() => owl.trigger('prev.owl.carousel'));

  this.animateBanner(0);
}

  animateBanner(index: number) {
    const el = this.contentBoxes.get(index)?.nativeElement;
    if (!el) return;

    gsap.fromTo(
      el.querySelector('h1'),
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    gsap.fromTo(
      el.querySelector('span'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
    );

    gsap.fromTo(
      el.querySelector('.banner-btn'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.4 }
    );
  }

  navigate(path: string) {
    console.log('Navigate to', path);
  }
}