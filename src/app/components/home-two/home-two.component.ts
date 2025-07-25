import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectlistService } from '../projectlist.service';
import * as AOS from 'aos';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit {

  @ViewChild('animContainer') animContainer!: ElementRef;

  projects : any;

  constructor(private router : Router, private projectlist_ : ProjectlistService) { }

  ngOnInit(): void {
    AOS.init({
      duration: 400,
      //once: true
      });
    //AOS.init();
    this.projects= this.projectlist_.ProjectList
  }

  navigate(param : any){
    this.router.navigate(['/' + param])
  }

//   scroll(el: HTMLElement) {
//     el.scrollIntoView({behavior: 'smooth'});
// }

ngAfterViewInit(): void {
  const items = this.animContainer.nativeElement.querySelectorAll('.anim-item');

  items.forEach((el: HTMLElement, i: number) => {
    const animType = el.dataset['animation'];
    let fromVars: gsap.TweenVars = {};

    switch (animType) {
      case 'fade-left':
        fromVars = { x: -100, opacity: 0 };
        break;
      case 'fade-right':
        fromVars = { x: 100, opacity: 0 };
        break;
      case 'fade-up':
        fromVars = { y: 100, opacity: 0 };
        break;
      case 'zoom-in':
        fromVars = { scale: 0.5, opacity: 0 };
        break;
      case 'slide-left': // NEW CASE
      fromVars = { x: -100 }; // No opacity change if you want a pure slide
      break;
      default:
        fromVars = { opacity: 0 };
    }

    gsap.fromTo(
      el,
      fromVars,
      {
        ...fromVars,
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play reset play reset',
          markers: false
        }
      }
    );
  });
}

}
