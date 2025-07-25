import { ProjectlistService } from './../projectlist.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-project-sub-lists',
  templateUrl: './project-sub-lists.component.html',
  styleUrls: ['./project-sub-lists.component.scss']
})
export class ProjectSubListsComponent implements OnInit {

  pageTitle: string = ''
  projects: any = []
  designArr: any
  design: boolean = false
  implementation: boolean = false
  careandmaintenance: boolean = false
  commercial: any = []
  residential_condo: any = []
  private_residential:any = []
  education: any = []
  conservation: any = []

  Object = Object;

  constructor(
    public activeRoute: ActivatedRoute,
    private projectList: ProjectlistService
  ) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      if (window.location.href.includes('designandbuild')) {
        this.pageTitle = "Design and Build"
        this.design = true
        this.getallprojectsDesign()
      }
      else if (window.location.href.includes('implementation')) {
        this.pageTitle = "Implementation"
        this.implementation = true
        this.getallprojectImplement()
      }
      else if (window.location.href.includes('care&maintenence')) {
        this.pageTitle = "Care and Maintenance"
        this.careandmaintenance = true
        this.getallprojectCare()
      }
    })

    //this.getallprojects()
  }

  getallprojectsDesign() {
    this.projects = this.projectList.ProjectList

    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].mcategory == 'designandbuild') {
        this.designArr = this.projects[i]
        if (this.designArr.scategory == 'commercial') {
          this.commercial.push(this.designArr);
          console.log(this.commercial, 'commercial')
        }
        else if (this.designArr.scategory == 'residential_condo') {
          this.residential_condo.push(this.designArr);
          console.log(this.residential_condo, 'residential')
        }
        else if (this.designArr.scategory == 'private_residential') {
          this.private_residential.push(this.designArr);
          console.log(this.private_residential, 'residentialprivate')
        }
        else if (this.designArr.scategory == 'education') {
          this.education.push(this.designArr);
          console.log(this.education, 'education')
        }
        else if (this.designArr.scategory == 'conservation') {
          this.conservation.push(this.designArr);
          console.log(this.conservation, 'conservation')
        }

      }
    }
  }

  getallprojectImplement() {
    this.projects = this.projectList.ProjectList

    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].mcategory == 'designandbuild') {
        this.designArr = this.projects[i]
        if (this.designArr.scategory == 'commercial') {
          this.commercial.push(this.designArr);
          console.log(this.commercial, 'commercial')
        }
        else if (this.designArr.scategory == 'residential_condo') {
          this.residential_condo.push(this.designArr);
          console.log(this.residential_condo, 'residential')
        }
        else if (this.designArr.scategory == 'private_residential') {
          this.private_residential.push(this.designArr);
          console.log(this.private_residential, 'residentialprivate')
        }
        else if (this.designArr.scategory == 'education') {
          this.education.push(this.designArr);
          console.log(this.education, 'education')
        }
        else if (this.designArr.scategory == 'conservation') {
          this.conservation.push(this.designArr);
          console.log(this.conservation, 'conservation')
        }

      }
    }
  }

  getallprojectCare() {
    this.projects = this.projectList.ProjectList

    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].mcategory == 'designandbuild') {
        this.designArr = this.projects[i]
        if (this.designArr.scategory == 'commercial') {
          this.commercial.push(this.designArr);
          console.log(this.commercial, 'commercial')
        }
        else if (this.designArr.scategory == 'residential_condo') {
          this.residential_condo.push(this.designArr);
          console.log(this.residential_condo, 'residential')
        }
        else if (this.designArr.scategory == 'private_residential') {
          this.private_residential.push(this.designArr);
          console.log(this.private_residential, 'residentialprivate')
        }
        else if (this.designArr.scategory == 'education') {
          this.education.push(this.designArr);
          console.log(this.education, 'education')
        }
        else if (this.designArr.scategory == 'conservation') {
          this.conservation.push(this.designArr);
          console.log(this.conservation, 'conservation')
        }

      }
    }
  }

}
