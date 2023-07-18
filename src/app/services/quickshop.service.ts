import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/config/api-url';
import { environment } from 'src/environments/environment';

@Injectable()

export class QuickshopService {

  constructor(private http:HttpClient) { }
  apiURL:any = api;
  apiEndpoint: any = environment.api_endpoint;

  getOrderById(orderId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_order_data+'?orderId='+orderId)
  }
  getOrderByOrderId(orderId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_order_id_data+'?orderId='+orderId)
  }
  getAllOrders(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_all_orders)
  }
  getActiveOrders(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_active_orders)
  }
  getAllOrdersForProduct(productId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_orders_for_product+'?productId='+productId)
  }
  getActiveOrdersForProduct(productId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_active_orders_for_product+'?productId='+productId)
  }
  getAllOrdersForCustomer(customerId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_orders_for_customer+'?customerId='+customerId)
  }
  getActiveOrdersForCustomer(customerId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_active_orders_for_customer+'?customerId='+customerId)
  }
  createOrder(reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_order+'?action=CREATE', {data: reqData});
  }
  updateOrder(orderId:string, reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_order+'?action=UPDATE&orderId='+orderId, {data: reqData});
  }
  deleteOrder(orderId:string){
    return this.http.post(this.apiEndpoint + this.apiURL.post_order+'?action=DELETE&orderId='+orderId,{});
  }
  getCustomerById(customerId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_customer_data+'?customerId='+customerId)
  }
  getAllCustomers(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_all_customers)
  }
  getActiveCustomers(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_active_customers)
  }
  createCustomer(reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_customer+'?action=CREATE', {data: reqData});
  }
  updateCustomer(customerId:string, reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_customer+'?action=UPDATE&customerId='+customerId, {data: reqData});
  }
  deleteCustomer(customerId:string){
    return this.http.post(this.apiEndpoint + this.apiURL.post_customer+'?action=DELETE&customerId='+customerId,{});
  }
  getProductCategoryById(categoryId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_product_category_data+'?categoryId='+categoryId)
  }
  getAllProductCategories(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_all_product_categories)
  }
  getActiveProductCategories(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_active_product_categories)
  }
  createProductCategory(reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_product_category+'?action=CREATE', {data: reqData});
  }
  updateProductCategory(categoryId:string, reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_product_category+'?action=UPDATE&categoryId='+categoryId, {data: reqData});
  }
  deleteProductCategory(categoryId:string){
    return this.http.post(this.apiEndpoint + this.apiURL.post_product_category+'?action=DELETE&categoryId='+categoryId,{});
  }
  getProductById(productId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_product_data+'?productId='+productId)
  }
  getAllProducts(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_all_products)
  }
  getActiveProducts(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_active_products)
  }
  createProduct(reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_product+'?action=CREATE', {data: reqData});
  }
  updateProduct(productId:string, reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_product+'?action=UPDATE&productId='+productId, {data: reqData});
  }
  deleteProduct(productId:string){
    return this.http.post(this.apiEndpoint + this.apiURL.post_product+'?action=DELETE&productId='+productId,{});
  }
}
