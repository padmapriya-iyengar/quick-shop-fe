import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Product } from 'src/app/entities/product';
import { QuickshopService } from 'src/app/services/quickshop.service';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit{
  products: Product[] = [];
  productCols: any[] = [];
  @ViewChild('productDT')productTable!: Table;

  constructor(private qsService: QuickshopService){}

  ngOnInit(): void {
    this.productCols = [
      { field: "Name", label: "Name", type: "string"},
      { field: "Price", label: "Price", type: "string"},
      { field: "CategoryFk", label: "Category", type: "string"}
    ]
    this.loadProducts()
  }
  loadProducts(){
    this.qsService.getActiveProducts().subscribe({next: (response) => {
      let resp = Object.assign(response);
      if(resp){
        if(resp.length){
          resp.forEach((item:any) => {
            this.products.push(item)
          })
      }
      if(this.productTable)
        this.productTable.reset()
      }
    }, error: (error) => {
      console.log('Request failed with error');
    }
    })
  }
}
