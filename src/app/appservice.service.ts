import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()

export class AppserviceService {
  public res1;
  public res2;
  public baseUrl:string = "https://restcountries.eu/rest/v2/"
  constructor(private http:HttpClient) { 
    this.getAllRegions()
  }
    
  getAllRegions(){
    let data = this.http.get(`${this.baseUrl}all`).do(data=>console.log('data recieved')).catch(this.httpErrorHandler);
    return data;
  }
  
  getAllCountries(){
    
    let data = this.http.get(`${this.baseUrl}all`).do(data=>console.log(data,'data recieved')).catch(this.httpErrorHandler);
    return data;
}

 getFilteredDataByCurrency(currency) {
  
   let data = this.http.get(`${this.baseUrl}currency/${currency}` )
    return data;
 }
 async getFilteredDataByLanguages(lang1?,lang2?) {
   console.log(lang1,lang2,'check')
  const data1 = await this.http.get(`${this.baseUrl}lang/${lang1}` ).toPromise();
  const data2 = await this.http.get(`${this.baseUrl}lang/${lang2}` ).toPromise();
  return  { data1 , data2 };
   //   data1 : this.res2,
  }

private httpErrorHandler (err:HttpErrorResponse){
  let errorMessage = ''
  if (err.error instanceof Error){
    errorMessage = `An error occured:${err.error.message}`
  }else{
    errorMessage = `An error occured: ${err.status},error message is:${err.message}`
  }
  return Observable.throw(errorMessage);
}
}