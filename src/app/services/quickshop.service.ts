import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'src/config/api-url';
import { environment } from 'src/environments/environment';

/**
 * quick shop api integration service
 * @export
 * @class QuickshopService
 * @typedef {QuickshopService}
 */
@Injectable()

export class QuickshopService {
  
  /**
   * Creates an instance of QuickshopService.
   * @constructor
   * @param {HttpClient} http
   */
  constructor(private http:HttpClient) { }
  apiURL:any = api;
  apiEndpoint: any = environment.api_endpoint;
  
  /**
   * get order data by id
   * @param {string} orderId
   * @returns {*}
   */
  getOrderById(orderId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_order_data+'?orderId='+orderId)
  }
  
  /**
   * get order data by order id
   * @param {string} orderId
   * @returns {*}
   */
  getOrderByOrderId(orderId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_order_id_data+'?orderId='+orderId)
  }
  
  /**
   * get all orders
   * @returns {*}
   */
  getAllOrders(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_all_orders)
  }
  
  /**
   * get all active orders
   * @returns {*}
   */
  getActiveOrders(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_active_orders)
  }
  
  /**
   * get all orders for the given product
   * @param {string} productId
   * @returns {*}
   */
  getAllOrdersForProduct(productId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_orders_for_product+'?productId='+productId)
  }
  
  /**
   * get active orders for the given product
   * @param {string} productId
   * @returns {*}
   */
  getActiveOrdersForProduct(productId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_active_orders_for_product+'?productId='+productId)
  }
  
  /**
   * get all orders for the given customer
   * @param {string} customerId
   * @returns {*}
   */
  getAllOrdersForCustomer(customerId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_orders_for_customer+'?customerId='+customerId)
  }
  
  /**
   * get active orders for the given customer
   * @param {string} customerId
   * @returns {*}
   */
  getActiveOrdersForCustomer(customerId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_active_orders_for_customer+'?customerId='+customerId)
  }
  
  /**
   * create order data
   * @param {*} reqData
   * @returns {*}
   */
  createOrder(reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_order+'?action=CREATE', {data: reqData});
  }
  
  /**
   * update order data
   * @param {string} orderId
   * @param {*} reqData
   * @returns {*}
   */
  updateOrder(orderId:string, reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_order+'?action=UPDATE&orderId='+orderId, {data: reqData});
  }
  
  /**
   * delete order data
   * @param {string} orderId
   * @returns {*}
   */
  deleteOrder(orderId:string){
    return this.http.post(this.apiEndpoint + this.apiURL.post_order+'?action=DELETE&orderId='+orderId,{});
  }
  
  /**
   * get customer data by id
   * @param {string} customerId
   * @returns {*}
   */
  getCustomerById(customerId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_customer_data+'?customerId='+customerId)
  }
  
  /**
   * get all customers
   * @returns {*}
   */
  getAllCustomers(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_all_customers)
  }
  
  /**
   * get active customers
   * @returns {*}
   */
  getActiveCustomers(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_active_customers)
  }
  
  /**
   * create customer data
   * @param {*} reqData
   * @returns {*}
   */
  createCustomer(reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_customer+'?action=CREATE', {data: reqData});
  }
  
  /**
   * update customer data
   * @param {string} customerId
   * @param {*} reqData
   * @returns {*}
   */
  updateCustomer(customerId:string, reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_customer+'?action=UPDATE&customerId='+customerId, {data: reqData});
  }
  
  /**
   * delete customer data
   * @param {string} customerId
   * @returns {*}
   */
  deleteCustomer(customerId:string){
    return this.http.post(this.apiEndpoint + this.apiURL.post_customer+'?action=DELETE&customerId='+customerId,{});
  }
  
  /**
   * get product category by id
   * @param {string} categoryId
   * @returns {*}
   */
  getProductCategoryById(categoryId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_product_category_data+'?categoryId='+categoryId)
  }
  
  /**
   * get all product categories
   * @returns {*}
   */
  getAllProductCategories(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_all_product_categories)
  }
  
  /**
   * get active product categories
   * @returns {*}
   */
  getActiveProductCategories(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_active_product_categories)
  }
  
  /**
   * create product category data
   * @param {*} reqData
   * @returns {*}
   */
  createProductCategory(reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_product_category+'?action=CREATE', {data: reqData});
  }
  
  /**
   * update product category data
   * @param {string} categoryId
   * @param {*} reqData
   * @returns {*}
   */
  updateProductCategory(categoryId:string, reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_product_category+'?action=UPDATE&categoryId='+categoryId, {data: reqData});
  }
  
  /**
   * delete product category data
   * @param {string} categoryId
   * @returns {*}
   */
  deleteProductCategory(categoryId:string){
    return this.http.post(this.apiEndpoint + this.apiURL.post_product_category+'?action=DELETE&categoryId='+categoryId,{});
  }
  
  /**
   * get product data by id
   * @param {string} productId
   * @returns {*}
   */
  getProductById(productId:string){
    return this.http.get(this.apiEndpoint + this.apiURL.get_product_data+'?productId='+productId)
  }
  
  /**
   * get all products
   * @returns {*}
   */
  getAllProducts(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_all_products)
  }
  
  /**
   * get active products
   * @returns {*}
   */
  getActiveProducts(){
    return this.http.get(this.apiEndpoint + this.apiURL.get_active_products)
  }
  
  /**
   * create product data
   * @param {*} reqData
   * @returns {*}
   */
  createProduct(reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_product+'?action=CREATE', {data: reqData});
  }
  
  /**
   * update product data
   * @param {string} productId
   * @param {*} reqData
   * @returns {*}
   */
  updateProduct(productId:string, reqData:any){
    return this.http.post(this.apiEndpoint + this.apiURL.post_product+'?action=UPDATE&productId='+productId, {data: reqData});
  }
  
  /**
   * delete product data
   * @param {string} productId
   * @returns {*}
   */
  deleteProduct(productId:string){
    return this.http.post(this.apiEndpoint + this.apiURL.post_product+'?action=DELETE&productId='+productId,{});
  }
  
  /**
   * load order chart
   * @param {string} xAxisAttr
   * @param {string} yAxisAttr
   * @returns {*}
   */
  loadOrderReport(xAxisAttr:string, yAxisAttr: string){
    return this.http.get(this.apiEndpoint + this.apiURL.load_order_report+'?xAxis='+xAxisAttr+'&yAxis='+yAxisAttr);
  }
  
  /**
   * load customer chart
   * @param {string} xAxisAttr
   * @param {string} yAxisAttr
   * @returns {*}
   */
  loadCustomerReport(xAxisAttr:string, yAxisAttr: string){
    return this.http.get(this.apiEndpoint + this.apiURL.load_customer_report+'?xAxis='+xAxisAttr+'&yAxis='+yAxisAttr);
  }
  
  /**
   * load product chart
   * @param {string} xAxisAttr
   * @param {string} yAxisAttr
   * @returns {*}
   */
  loadProductReport(xAxisAttr:string, yAxisAttr: string){
    return this.http.get(this.apiEndpoint + this.apiURL.load_product_report+'?xAxis='+xAxisAttr+'&yAxis='+yAxisAttr);
  }
}
