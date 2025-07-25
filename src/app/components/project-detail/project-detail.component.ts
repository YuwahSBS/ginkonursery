import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectlistService } from '../projectlist.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  main;
  name;
  mcategory;
  scategory;
  project;
  image;
  category;
  popupShow : boolean = false
  paramID : string
  scroller: any;
  router: any;

  constructor(
    private activatedRoute : ActivatedRoute,
    private projectlist_ : ProjectlistService
  ) { }

  ngOnInit(): void {
    //this.category = this.activatedRoute.parent.snapshot.url[1].path;

    this.mcategory = this.activatedRoute.snapshot.paramMap.get('mcat')
    this.scategory = this.activatedRoute.snapshot.paramMap.get('scat')
    this.name = this.activatedRoute.snapshot.paramMap.get('pname')
    //this.category = this.activatedRoute.snapshot.paramMap.get('category')
    this.project = this.projectlist_.ProjectList.find(x => x.title == this.name && x.mcategory == this.mcategory && x.scategory == this.scategory)
    //alert(this.category)
    this.image = this.project.img
    this.scroller.scrollToAnchor("landscape");
  }

  showPopup(id : string){
    this.popupShow  = true
    this.paramID = id
  }

  navigate(param : any){
    this.router.navigate(['/' + param])
  }

}