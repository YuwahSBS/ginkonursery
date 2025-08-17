import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })

export class ProductService{
    private baseUrl = 'http://localhost:3000/products';

    constructor(private http: HttpClient){
    }

    getProducts():Observable<any>{
        return this.http.get(this.baseUrl)
    }

    createProduct(product:any):Observable<any>{
        return this.http.post(this.baseUrl, product)
    }

    updateProduct (product:any, id:number):Observable<any>{
        return this.http.put(`${this.baseUrl}/${id}`, product)
    }

    deleteProduct (id:number):Observable<any>{
        return this.http.delete(`${this.baseUrl}/${id}`);
    }




}