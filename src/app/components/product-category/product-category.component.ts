import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ProductCategory } from 'src/app/entities/product-category';
import { QuickshopService } from 'src/app/services/quickshop.service';

/**
 * summary of all product categories
 * @export
 * @class ProductCategoryComponent
 * @typedef {ProductCategoryComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})

export class ProductCategoryComponent implements OnInit{

  categories: ProductCategory[] = [];
  categoryCols: any[] = [];
  @ViewChild('categoryDT')categoryTable!: Table;

  
  /**
   * Creates an instance of ProductCategoryComponent.
   * @constructor
   * @param {QuickshopService} qsService
   */
  constructor(private qsService: QuickshopService){}

  ngOnInit(): void {
    this.categoryCols = [
      { field: "Category", label: "Category", type: "string"}
    ]
    this.loadCategories()
  }
  
  /**
   * load all active product categories
   */
  loadCategories(){
    this.qsService.getActiveProductCategories().subscribe({next: (response) => {
      let resp = Object.assign(response);
      if(resp){
        if(resp.length){
          resp.forEach((item:any) => {
            this.categories.push(item)
          })
      }
      if(this.categoryTable)
        this.categoryTable.reset()
      }
    }, error: (error) => {
      console.log('Request failed with error');
    }
    })
  }
}
