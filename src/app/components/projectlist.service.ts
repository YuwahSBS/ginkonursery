import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectlistService {

  ProjectList = [
    {
      "title": "Clinque de skin",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      "location": "Kan Road",
      "img": [
        "../assets/img/projects/clinique/1.jpg",
        "../assets/img/projects/clinique/2.jpg",
        "../assets/img/projects/clinique/3.jpg"
      ],

    },
    {
      "title": "Panhtwa shopping mall",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      "location": "Taundwingyi city",
      "img": [
        "../assets/img/projects/panhtwar/1.jpg",
        "../assets/img/projects/panhtwar/2.jpg",
        "../assets/img/projects/panhtwar/3.jpg",
        "../assets/img/projects/panhtwar/4.jpg",
        "../assets/img/projects/panhtwar/5.jpg",
        "../assets/img/projects/panhtwar/6.jpg"
      ]
    },
    {
      "title": "Royal Taunggyi Hotel",
      "mcategory": "designandbuild",
      "scategory": 'residential',
      "location": "Taunggyi",
      "img": [
        "../assets/img/projects/royal-taunggyi/2.jpg",
        "../assets/img/projects/royal-taunggyi/1.jpg"
      ]
    },
    {
      "title": "Cafe Amazon",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      "location": "Sule Center",
      "img": [
        "../assets/img/projects/cafeamazon/1.jpg",
        "../assets/img/projects/cafeamazon/2.jpg",
        "../assets/img/projects/cafeamazon/3.jpg",
        "../assets/img/projects/cafeamazon/4.jpg",
        "../assets/img/projects/cafeamazon/5.jpg",
      ]
    },
    {
      "title": "Thai 47",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      //"category": "artificial-landscaping",
      "location": "47 Street",
      "img": [
        "../assets/img/projects/thai47/cover.jpg",
        "../assets/img/projects/thai47/3.jpg",
        
        "../assets/img/projects/thai47/2.jpg",
        "../assets/img/projects/thai47/4.jpg",
        "../assets/img/projects/thai47/5.jpg",
        "../assets/img/projects/thai47/6.jpg",
        "../assets/img/projects/thai47/7.jpg"
      ]
    },
    {
      "title": "Burma 47",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      //"category": "artificial-landscaping",
      "location": "Shwe Gon Daing",
      "img": [
        "../assets/img/projects/burma47/1.jpg",
        "../assets/img/projects/burma47/2.jpg",
        "../assets/img/projects/burma47/3.jpg"

      ]
    },
    {
      "title": "Kan Thar Office",
      //"category": "artificial-landscaping",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      "location": "Yangon",
      "img": [
        "../assets/img/projects/kanthar/1.jpg",
        "../assets/img/projects/kanthar/2.jpg"
      ]
    },
    {
      "title": "Junction Square",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      //"category": "artificial-landscaping",
      "location": "Kamayut",
      "img": [
        "../assets/img/projects/junctionsquare/1.jpg",
        "../assets/img/projects/junctionsquare/2.jpg",
        "../assets/img/projects/junctionsquare/3.jpg",

      ]
    },
    {
      "title": "City Mart Food Court",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      //"category": "artificial-landscaping",
      "location": "Shwe Pyi Thar",
      "img": [
        "../assets/img/projects/citymartfoodcourt/1.jpg",
        "../assets/img/projects/citymartfoodcourt/2.jpg",
        "../assets/img/projects/citymartfoodcourt/3.jpg",
        "../assets/img/projects/citymartfoodcourt/4.jpg",
        "../assets/img/projects/citymartfoodcourt/5.jpg",

      ]
    },
    {
      "title": "JFE meratin",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      //"category": "artificial-landscaping",
      "location": "Thilawa",
      "img": [
        "../assets/img/projects/jfe-meratin/1.jpg",
      ]
    },
    {
      "title": "LFIR Football pitch",
      "mcategory": "designandbuild",
      "scategory": 'education',
      //"category": "artificial-landscaping",
      "location": "Yangon",
      "img": [
        "../assets/img/projects/lfir-football-pitch/1.jpg",
        "../assets/img/projects/lfir-football-pitch/2.jpg",
        "../assets/img/projects/lfir-football-pitch/3.jpg",

      ]
    },
    {
      "title": "TYKHE burger house",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      //"category": "artificial-landscaping",
      "location": "Yangon",
      "img": [
        "../assets/img/projects/tyhke-burger-house/1.jpg",
        "../assets/img/projects/tyhke-burger-house/2.jpg",
        "../assets/img/projects/tyhke-burger-house/3.jpg",

      ]
    },
    {
      "title": "Olive and Twist",
      //"category": "artificial-landscaping",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      "location": "Shwe Gone Daing",
      "img": [
        "../assets/img/projects/olive-and-twist/cover.jpg",
        "../assets/img/projects/olive-and-twist/2.jpg",
        "../assets/img/projects/olive-and-twist/3.jpg",
        "../assets/img/projects/olive-and-twist/4.jpg",
        "../assets/img/projects/olive-and-twist/5.jpg",

      ]
    },
    {
      "title": "Woodside Energy company",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      //"category": "artificial-landscaping",
      "location": "",
      "img": [
        "../assets/img/projects/woodside-energy/1.jpg",
        "../assets/img/projects/woodside-energy/2.jpg",
        "../assets/img/projects/woodside-energy/3.jpg",
        "../assets/img/projects/woodside-energy/4.jpg",
        "../assets/img/projects/woodside-energy/5.jpg",

      ]
    },
    {
      "title": "Cafe Amazon   ",
      //"category": "artificial-landscaping",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      "location": "Myanmar Plaza",
      "img": [
        "../assets/img/projects/cafe-amazon-myanmarplaza/1.jpg",
        "../assets/img/projects/cafe-amazon-myanmarplaza/2.jpg"

      ]
    },
    {
      "title": "Cafe Amazon ",
      //"category": "artificial-landscaping",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      "location": "Vantage Tower",
      "img": [
        "../assets/img/projects/cafe-amazon-vantagetower/1.jpg",
        "../assets/img/projects/cafe-amazon-vantagetower/2.jpg",
        "../assets/img/projects/cafe-amazon-vantagetower/3.jpg",
        "../assets/img/projects/cafe-amazon-vantagetower/4.jpg"
      ]
    },
    {
      "title": "Htauk Kyan Plant Nursery",
      "category": "plant-nursery",
      "location": "",
      "img": [
        "../assets/img/projects/plant-nursery/Htauk Kyan/1.jpg",
        "../assets/img/projects/plant-nursery/Htauk Kyan/2.jpg",
        "../assets/img/projects/plant-nursery/Htauk Kyan/3.jpg",
        "../assets/img/projects/plant-nursery/Htauk Kyan/4.jpg",
        "../assets/img/projects/plant-nursery/Htauk Kyan/5.jpg",
        "../assets/img/projects/plant-nursery/Htauk Kyan/6.jpg",
        "../assets/img/projects/plant-nursery/Htauk Kyan/7.jpg",
        "../assets/img/projects/plant-nursery/Htauk Kyan/8.jpg",
        "../assets/img/projects/plant-nursery/Htauk Kyan/9.jpg",


      ]
    },
    {
      "title": "Hmaw bi Plant Nursery",
      "category": "plant-nursery",
      "location": "",
      "img": [
        "../assets/img/projects/plant-nursery/Hmawbi/1.jpg",
        "../assets/img/projects/plant-nursery/Hmawbi/2.jpg",
        "../assets/img/projects/plant-nursery/Hmawbi/3.jpg",
        "../assets/img/projects/plant-nursery/Hmawbi/4.jpg",
        "../assets/img/projects/plant-nursery/Hmawbi/5.jpg",
        "../assets/img/projects/plant-nursery/Hmawbi/6.jpg",
        "../assets/img/projects/plant-nursery/Hmawbi/7.jpg",
        "../assets/img/projects/plant-nursery/Hmawbi/8.jpg"
      ]
    },
    {
      "title": "Mingaladon Plant Nursery",
      "category": "plant-nursery",
      "location": "",
      "img": [
        "../assets/img/projects/plant-nursery/Mingaladon/1.jpg",
        "../assets/img/projects/plant-nursery/Mingaladon/2.jpg",
        "../assets/img/projects/plant-nursery/Mingaladon/3.jpg",
        "../assets/img/projects/plant-nursery/Mingaladon/4.jpg",
        "../assets/img/projects/plant-nursery/Mingaladon/5.jpg",
        "../assets/img/projects/plant-nursery/Mingaladon/6.jpg",
        "../assets/img/projects/plant-nursery/Mingaladon/7.jpg",
        "../assets/img/projects/plant-nursery/Mingaladon/8.jpg"
      ]
    },
    {
      "title": "Green Wall",
      //"category": "landscape-supply-install",
      "mcategory": "designandbuild",
      "scategory": 'residential_condo',
      "location": "Galaxy Tower Star City",
      "img": [
        "../assets/img/projects/landscape_supply_install/green-wall/1.jpg",
        "../assets/img/projects/landscape_supply_install/green-wall/2.jpg",
        "../assets/img/projects/landscape_supply_install/green-wall/3.jpg",
        "../assets/img/projects/landscape_supply_install/green-wall/4.jpg",
        "../assets/img/projects/landscape_supply_install/green-wall/5.jpg",
        "../assets/img/projects/landscape_supply_install/green-wall/6.jpg",
        "../assets/img/projects/landscape_supply_install/green-wall/7.jpg",
        "../assets/img/projects/landscape_supply_install/green-wall/8.jpg",
        "../assets/img/projects/landscape_supply_install/green-wall/9.jpg",


      ]
    },
    {
      "title": "Seikkotokyu factory",
      //"category": "landscape-supply-install",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      "location": "Thilawa",
      "img": [
        "../assets/img/projects/landscape_supply_install/seikkotokyu-factory/1.jpg",
        "../assets/img/projects/landscape_supply_install/seikkotokyu-factory/2.jpg",
        "../assets/img/projects/landscape_supply_install/seikkotokyu-factory/3.jpg"
      ]
    },
    {
      "title": "Kalbe factory",
      //"category": "landscape-supply-install",
      "mcategory": "designandbuild",
      "scategory": 'commercial',
      "location": "Thilawa",
      "img": [
        "../assets/img/projects/landscape_supply_install/kalbe-factory/1.jpg",
        "../assets/img/projects/landscape_supply_install/kalbe-factory/2.jpg",
        "../assets/img/projects/landscape_supply_install/kalbe-factory/3.jpg",
        "../assets/img/projects/landscape_supply_install/kalbe-factory/4.jpg",
      ]
    },
    {
      "title": "Lycee Francais International de Rangoun",
      "category": "landscape-supply-install",
      "mcategory": "designandbuild",
      "scategory": 'education',
      "location": "Yangon",
      "img": [
        "../assets/img/projects/landscape_supply_install/lycee-francais-international/1.jpg",
        "../assets/img/projects/landscape_supply_install/lycee-francais-international/2.jpg",
        "../assets/img/projects/landscape_supply_install/lycee-francais-international/3.jpg",
        "../assets/img/projects/landscape_supply_install/lycee-francais-international/4.jpg",
        "../assets/img/projects/landscape_supply_install/lycee-francais-international/5.jpg",
        "../assets/img/projects/landscape_supply_install/lycee-francais-international/6.jpg",
        "../assets/img/projects/landscape_supply_install/lycee-francais-international/7.jpg",
        "../assets/img/projects/landscape_supply_install/lycee-francais-international/8.jpg",
        "../assets/img/projects/landscape_supply_install/lycee-francais-international/9.jpg",
        "../assets/img/projects/landscape_supply_install/lycee-francais-international/10.jpg",
        "../assets/img/projects/landscape_supply_install/lycee-francais-international/11.jpg",
        "../assets/img/projects/landscape_supply_install/lycee-francais-international/12.jpg",
      ]
    },
    {
      "title": "Maharsi Plot",
      "mcategory": "designandbuild",
      "scategory": 'private_residential',
      //"category": "landscape-supply-install",
      "location": "Yangon",
      "img": [
        "../assets/img/projects/landscape_supply_install/maharsi-plot/1.jpg",
        "../assets/img/projects/landscape_supply_install/maharsi-plot/2.jpg",
        "../assets/img/projects/landscape_supply_install/maharsi-plot/3.jpg"
      ]
    }
  ]
}