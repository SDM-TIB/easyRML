import { Component, Input, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/form-service.service';
import { Predicateobjectmaptype } from 'src/app/types';

@Component({
  selector: 'app-predicateobjectmap',
  templateUrl: './predicateobjectmap.component.html',
  styleUrls: ['./predicateobjectmap.component.scss'],
})
export class PredicateobjectmapComponent implements OnInit {
  @Input() classOptions: any[] = [];
  @Input() propertyOptions: any[] = [];
  @Input() dataFieldOptions: any[] = [];
  @Input() dataFieldDropDown: any[] = [];
  @Input() predicateObjectMap: Predicateobjectmaptype = {} as any;
  @Input() tripleMapName='';
  

  selectedPredicateType: string = '0';

  dropdownSettings = {};
  jsonPrimilaryData = {};

  predicatePropertyValue: string = '';
  selectClassSuggestion: string = '';
  dataFieldSuggestion: string = '';
  predicateSelectClass: string = '';
  predicateSelectSame: string = '';
  predicateSelectDifferent: string = '';
  childData: string = '';
  parentData: string = '';
  predicateTermType: string = '';

  showPredicate=true;

  triplesMapNameOption:string[]=[];

  constructor(private formService:FormServiceService) { }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  onItemSelect(event: any) {
    this.predicateObjectMap.object.push({ data: event.item_text });
  }

  onItemDeSelect(event: any) {
    const index = this.predicateObjectMap.object.findIndex((ele: any) => ele.data === event.item_text);
    this.predicateObjectMap.object.splice(index, 1);
  }

  setPredciateObjectMap() {
    if (this.selectedPredicateType === '1') {
      this.predicateObjectMap.objectType='class';
      this.predicateObjectMap.object='';
      if(this.predicateObjectMap.objectClass || this.predicateObjectMap.objectClass === ''){
        delete this.predicateObjectMap.objectClass
      }
      if(this.predicateObjectMap.child || this.predicateObjectMap.child === ''){
        delete this.predicateObjectMap.child
      }
      if(this.predicateObjectMap.parent || this.predicateObjectMap.parent === ''){
        delete this.predicateObjectMap.parent
      }
    }
    else if (this.selectedPredicateType === '2') {
      this.predicateObjectMap.objectType= 'Ref_to_data';
      this.predicateObjectMap.object='';
      if(this.predicateObjectMap.objectClass || this.predicateObjectMap.objectClass === ''){
        delete this.predicateObjectMap.objectClass
      }
      if(this.predicateObjectMap.child || this.predicateObjectMap.child === ''){
        delete this.predicateObjectMap.child
      }
      if(this.predicateObjectMap.parent || this.predicateObjectMap.parent === ''){
        delete this.predicateObjectMap.parent
      }
    }
    else if (this.selectedPredicateType === '3') {
      this.predicateObjectMap.objectType= 'Ref_to_data_as_uri';
      this.predicateObjectMap.object=[];
      this.predicateObjectMap.objectClass='';
      if(this.predicateObjectMap.child || this.predicateObjectMap.child === ''){
        delete this.predicateObjectMap.child
      }
      if(this.predicateObjectMap.parent || this.predicateObjectMap.parent === ''){
        delete this.predicateObjectMap.parent
      }
    }
    else if (this.selectedPredicateType === '4') {

      this.triplesMapNameOption=this.formService.getFormdata().filter((ele)=>ele.name!==this.tripleMapName).map((ele)=>ele.name);

      this.predicateObjectMap.objectType= 'Ref_to_TM_same_source';
      this.predicateObjectMap.object='';
      if(this.predicateObjectMap.objectClass || this.predicateObjectMap.objectClass === ''){
        delete this.predicateObjectMap.objectClass
      }
      if(this.predicateObjectMap.child || this.predicateObjectMap.child === ''){
        delete this.predicateObjectMap.child
      }
      if(this.predicateObjectMap.parent || this.predicateObjectMap.parent === ''){
        delete this.predicateObjectMap.parent
      }
    }
    else if (this.selectedPredicateType === '5') {
      
      this.triplesMapNameOption=this.formService.getFormdata().filter((ele)=>ele.name!==this.tripleMapName).map((ele)=>ele.name);
      
      this.predicateObjectMap.objectType = 'Ref_to_TM_different_source';
      this.predicateObjectMap.object='';
      this.predicateObjectMap.child='';
      this.predicateObjectMap.parent=this.parentData;
      if(this.predicateObjectMap.objectClass || this.predicateObjectMap.objectClass === ''){
        delete this.predicateObjectMap.objectClass
      }
    }
  }


  setPredicatePropertyValue() {
    this.predicateObjectMap.predicate = this.predicatePropertyValue;
  }

  setSelectClassSuggestion() {
    this.predicateObjectMap.object = this.selectClassSuggestion;
  }

  setDataFieldSuggestion() {
    this.predicateObjectMap.object = this.dataFieldSuggestion;
  }

  setPredicateSelectClass() {
    this.predicateObjectMap.objectClass = this.predicateSelectClass;
  }

  setPredicateSelectSame() {
    this.predicateObjectMap.object = this.predicateSelectSame;
  }

  setPredicateSelectDifferent() {
    this.predicateObjectMap.object = this.predicateSelectDifferent;
  }

  setChildData() {
    this.predicateObjectMap.child = this.childData;
  }

  setPredicateTermType() {
    if (this.predicateTermType === '1') {
      this.predicateObjectMap.termType = 'rr:IRI';
    }
    else if (this.predicateTermType === '2') {
      this.predicateObjectMap.termType = 'rr:BlankNode';
    }
    else if (this.predicateTermType === '3') {
      this.predicateObjectMap.termType = 'rr:Literal';
    }
  }


}
