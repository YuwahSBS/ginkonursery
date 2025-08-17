import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.scss']
})
export class ProductTestComponent implements OnInit {
   product: any[] = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   // this.loadProducts()
  }

  // loadProducts(){
  //   this.productService.getProducts().subscribe((data)=>{
  //     this.product = data
  //     console.log(this.product, 'product update')
  //   })
  // }

}
