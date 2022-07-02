import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-predicateobjectmap',
  templateUrl: './predicateobjectmap.component.html',
  styleUrls: ['./predicateobjectmap.component.scss']
})
export class PredicateobjectmapComponent implements OnInit {

  
  @Input () classOptions: any [] = [];
  @Input () propertyOptions: any [] = [];
  @Input () dataFieldOptions: any [] = [];
  @Input () dataFieldDropDown:  any [] = [];

  selectedPredicateType:string='0';

  
  dropdownSettings = {};
  jsonPrimilaryData = {};

  constructor() { }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  
  onItemSelect(event: any) {
    console.log(event)
  }

  onSelectAll(event: any) {
    console.log(event);
  }


}
