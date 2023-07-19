import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Order } from 'src/app/entities/order';
import { QuickshopService } from 'src/app/services/quickshop.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit{

  orders: Order[] = [];
  orderCols: any[] = [];
  @ViewChild('orderDT')orderTable!: Table;
  constructor(private qsService: QuickshopService){}

  ngOnInit(): void {
    this.orderCols = [
      { field: "OrderId", label: "Order Id", type: "string"},
      { field: "PaymentMode", label: "Payment Mode", type: "string"},
      { field: "OrderDate", label: "Order Date", type: "date"},
      { field: "CustomerFk", label: "CustomerFk", type: "string"},
      { field: "ProductFk", label: "Product", type: "string"}
    ]
    this.loadOrders()
  }
  loadOrders(){
    this.qsService.getActiveOrders().subscribe({next: (response) => {
      let resp = Object.assign(response);
      if(resp){
        if(resp.length){
          resp.forEach((item:any) => {
            this.orders.push(item)
          })
      }
      if(this.orderTable)
        this.orderTable.reset()
      }
    }, error: (error) => {
      console.log('Request failed with error');
    }
    })
  }
}
