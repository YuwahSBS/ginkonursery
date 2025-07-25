import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, ViewportScroller } from '@angular/common'
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routeLink : string = ''

  constructor(
    private router : Router,
    private location : Location,
    private scroller : ViewportScroller,
    private activatedRoute : ActivatedRoute
  ) { }

  ngAfterContentChecked() {
    this.routeLink = this.location.path()
      if(this.routeLink == ''){
        var link = document.getElementById('aboutus')
        link.classList.add('active')
      }
      
  }

  ngOnInit(): void {
    $('body.hero-anime').removeClass('hero-anime');

    $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
      if ($(window).width() > 750) {
        const _d = $(e.target).closest('.nav-item');
        _d.addClass('show');
        setTimeout(() => {
          _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
        }, 1);
      }
    });

    $('#switch').on('click', function () {
      $('body').toggleClass('dark');
      $('#switch').toggleClass('switched');
    });
  }

  navigate(param : any){
    this.router.navigate(['/' + param])
  }
  
  gotestimonial() {
    this.scroller.scrollToAnchor("testimonial");
    // this.routeLink = this.location.path()
    //   if(this.routeLink !== ''){
    //     document.getElementById("testimonial").scrollIntoView({
    //       behavior: "smooth",
    //       block: "start",
    //       inline: "nearest"
    //     });
    //   }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll = window.pageYOffset;
    const header = $('.start-header');
    if (scroll >= 10) {
      header.removeClass('start-style').addClass('scroll-on');
    } else {
      header.removeClass('scroll-on').addClass('start-style');
    }
  }

  
}