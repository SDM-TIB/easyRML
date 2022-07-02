import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {

  url='http://127.0.0.1:5000';

  constructor(private http:HttpClient) { }

  ReceivePrefixMethod(){
    return this.http.get(this.url+'/receivePrefix');
  }

  UploadOntologyMethod(data: any){
    return this.http.post(this.url+'/readOntology',data)
  }

  ReceiveClassesMethod(){
    return this.http.get(this.url+'/receiveClasses');
  }

  ReceivePropertiesMethod(){
    return this.http.get(this.url+'/receiveProperties');
  }


  UploadCsvMethod(data: any){
    return this.http.post(this.url+'/readDataSource_csv',data)
  }

  ReceiveDataFieldCsvMethod(): Observable<any>{
    return this.http.get(this.url+'/receiveDataFields_csv');
  }

  UploadRdbDataMethod(data: any){
    return this.http.post(this.url+'/readDataSource_rdb',data)
  }

  ReceiveDataFieldRdbMethod(): Observable<any>{
    return this.http.get(this.url+'/receiveDataFields_rdb');
  }

  
  UploadPreliminaryUserInput(data: any){
    return this.http.post(this.url+'/readUserInput_preliminary',data)
  }


}
