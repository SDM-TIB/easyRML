import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Predicateobjectmaptype, Triplesmaptype } from './types';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  formData:Triplesmaptype[]=[{name: '',
    logicalSource: [],
    subjectMap: [],
    predicateObjectMap: [{predicate: '',
      objectType: '',
      object: '',
      termType: ''}]}]

  resetData=new Subject<Triplesmaptype[]>();

  constructor() { }

  getFormdata(){
    return this.formData;
  }

  getNewTriplesMapType(): Triplesmaptype{
    return {name: '',
    logicalSource: [],
    subjectMap: [],
    predicateObjectMap: [{predicate: '',
      objectType: '',
      object: '',
      termType: ''}]};
  }
  getNewpredicateObjectMapType(): Predicateobjectmaptype{
    return {predicate: '',
    objectType: '',
    object: '',
    termType: ''};
  }

  resetFormData(){
    
  this.resetData.next([{name: '',
  logicalSource: [],
  subjectMap: [],
  predicateObjectMap: [{predicate: '',
    objectType: '',
    object: '',
    termType: ''}]}]);
  }

}
