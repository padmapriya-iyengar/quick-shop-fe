import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer } from 'src/app/entities/customer';
import { QuickshopService } from 'src/app/services/quickshop.service';

@Component({
  selector: 'app-customer-summary',
  templateUrl: './customer-summary.component.html',
  styleUrls: ['./customer-summary.component.scss']
})
export class CustomerSummaryComponent implements OnInit{
  customers: Customer[] = [];
  customerCols: any[] = [];
  @ViewChild('customerDT')customerTable!: Table;

  constructor(private qsService: QuickshopService){}

  ngOnInit(): void {
    this.customerCols = [
      { field: "Title", label: "Title", type: "string"},
      { field: "FirstName", label: "First Name", type: "string"},
      { field: "MiddleName", label: "Middle Name", type: "string"},
      { field: "LastName", label: "Last Name", type: "string"},
      { field: "DisplayName", label: "Display Name", type: "string"},
      { field: "Email", label: "Email", type: "string"},
      { field: "Contact", label: "Contact", type: "string"}
    ]
    this.loadCustomers()
  }
  loadCustomers(){
    this.qsService.getActiveCustomers().subscribe({next: (response) => {
      let resp = Object.assign(response);
      if(resp){
        if(resp.length){
          resp.forEach((item:any) => {
            this.customers.push(item)
          })
      }
      if(this.customerTable)
        this.customerTable.reset()
      }
    }, error: (error) => {
      console.log('Request failed with error');
    }
    })
  }
}
