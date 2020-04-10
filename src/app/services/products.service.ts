import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../classes/product';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';

// Get product from Localstorage
const products = JSON.parse(localStorage.getItem('compareItem')) || [];

@Injectable()
export class ProductsService {

    public currency = 'USD';
    public catalogMode = false;

    public compareProducts: BehaviorSubject<Product[]> = new BehaviorSubject([]);
    public observer: Subscriber<{}>;

    // Initialize
    constructor(private http: HttpClient) {
        this.compareProducts.subscribe(products => products = products);
    }

    // Observable Product Array
    private products(): Observable<Product[]> {
        return this.http.get('assets/data/products.json').pipe(map((res: any) => res.json()));
    }

    // Get Products
    public getProducts(): Observable<Product[]> {
        return this.products();
    }

    // Get Products By Id
    public getProduct(id: number): Observable<Product> {
        return this.products().pipe(map(items => items.find((item: Product) => item.id === id)));
    }

    // Get Products By category
    public getProductByCategory(category: string): Observable<Product[]> {
        return this.products().pipe(map(items =>
            items.filter((item: Product) => {
                if (category === 'all') {
                    return item;
                } else {
                    return item.category === category;
                }
            })
        ));
    }

    /*
       ---------------------------------------------
       ----------  Compare Product  ----------------
       ---------------------------------------------
    */

    // Get Compare Products
    public getComapreProducts(): Observable<Product[]> {
        const itemsStream = new Observable(observer => {
            observer.next(products);
            observer.complete();
        });
        return itemsStream as Observable<Product[]>;
    }

    // If item is aleready added In compare
    public hasProduct(product: Product): boolean {
        const item = products.find((item: { id: number; }) => item.id === product.id);
        return item !== undefined;
    }

    // Add to compare
    public addToCompare(product: Product): Product | boolean {
        let item: Product | boolean = false;
        if (this.hasProduct(product)) {
            item = products.filter((item: { id: number; }) => item.id === product.id)[0];
        } else {
            if (products.length < 4) {
                products.push(product);
            }
        }
        localStorage.setItem('compareItem', JSON.stringify(products));
        return item;
    }

    // Removed Product
    public removeFromCompare(product: Product) {
        if (product === undefined) { return; }
        const index = products.indexOf(product);
        products.splice(index, 1);
        localStorage.setItem('compareItem', JSON.stringify(products));
    }

}
