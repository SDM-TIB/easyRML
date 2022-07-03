import { Component, Input, OnInit } from '@angular/core';
import { BackendConnectionService } from 'src/app/backend-connection.service';
import { tap,take, switchMap } from 'rxjs/operators';
import { Triplesmaptype } from 'src/app/types';
import { FormServiceService } from 'src/app/form-service.service';

@Component({
  selector: 'app-triplesmap',
  templateUrl: './triplesmap.component.html',
  styleUrls: ['./triplesmap.component.scss']
})
export class TriplesmapComponent implements OnInit {

  @Input () classOptions: any [] = [];
  @Input () propertyOptions: any [] = [];
  @Input () triplesMap: Triplesmaptype={} as any;
  
  dataFieldOptions: any[] = [];

  selectedDataType: string = '0';
  selectedSubjectType: string = '0';

  dropdownList: any[] = [];
  dropdownSettings = {};

  selectSubject: string = '';
  selectSubjectClass: string = '';
  selectTermType: string='';


  constructor(private backendConnection: BackendConnectionService, private formService: FormServiceService) { }

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
    this.triplesMap.subjectMap[0].subject.push({data:event.item_text});
  }

  onItemDeSelect(event: any) {
    const index = this.triplesMap.subjectMap[0].subject.findIndex((ele:any) => ele.data===event.item_text);
    this.triplesMap.subjectMap[0].subject.splice(index,1);
  }

  onCsvUpload(event: any) {
    const fileList: FileList = event.target.files;
    const file = fileList[0];

    const formData = new FormData();
    formData.append('file', file, file.name);

    this.backendConnection.UploadCsvMethod(formData).pipe(take(1), switchMap(() => this.backendConnection.ReceiveDataFieldCsvMethod()), take(1)).subscribe((data:any[])=>{this.dataFieldOptions=data;
      this.dropdownList=data.map((ele)=>{return {item_id:ele,item_text:ele}})
    });

  }

  addPredicateObjectMap(){
    this.triplesMap.predicateObjectMap.push(this.formService.getNewpredicateObjectMapType());
  }

  sendRDBData(){
    const dbProp: {RDBdata:any[]}= {RDBdata:[]}
    let prop :any={}
    Object.keys(this.triplesMap.logicalSource[0]).forEach((key)=>{ 
      if(key === "databasename" || key === "databaseusername" || key === "databasepassword" || key === "databasetable" || key === "sqlqueryversion" || key === "RDB_host"){
        prop[key]=this.triplesMap.logicalSource[0][key];
      }
      if(key === 'RDB_port'){
        prop[key]=parseInt(this.triplesMap.logicalSource[0][key]);
      }
    })
    dbProp.RDBdata.push(prop);

    this.backendConnection.UploadRdbDataMethod(dbProp).pipe(take(1), switchMap(() => this.backendConnection.ReceiveDataFieldRdbMethod()), take(1)).subscribe((data:any[])=>{this.dataFieldOptions=data;
      this.dropdownList=data.map((ele)=>{return {item_id:ele,item_text:ele}})
    });


  }

  setSubjectMap(){
    if(this.triplesMap.subjectMap.length === 1)
    {
      if(this.selectedSubjectType === '1'){
        this.triplesMap.subjectMap[0].subjectType='class';
        this.triplesMap.subjectMap[0].subject = '';
        if(this.triplesMap.subjectMap[0].subjectClass || this.triplesMap.subjectMap[0].subjectClass  === ''){
          delete this.triplesMap.subjectMap[0].subjectClass;
        }
      }
      else{
        this.triplesMap.subjectMap[0].subjectType='Ref_to_data_as_uri';
        this.triplesMap.subjectMap[0].subject = [];
        this.triplesMap.subjectMap[0].subjectClass = '';
      }
     }
     else{
      if(this.selectedSubjectType === '1'){
        this.triplesMap.subjectMap.push({subjectType:"class",subject:"",termType:""})
      }
      else{
        this.triplesMap.subjectMap.push({subjectType:"Ref_to_data_as_uri",subject:[],subjectClass:"",termType:""})
      }
     }
  }

  setselectSubject(){
    this.triplesMap.subjectMap[0].subject = this.selectSubject;
  }

  setSelectSubjectClass(){

    this.triplesMap.subjectMap[0].subjectClass = this.selectSubjectClass;
  }

  setSelectTermType(){

    this.triplesMap.subjectMap[0].termType = this.selectTermType === '1' ? 'rr:IRI': 'rr:BlankNode';
  }

  setLogicalSource(){
    if(this.triplesMap.logicalSource.length === 1)
    {
      if(this.selectedDataType === '1'){
        this.triplesMap.logicalSource[0]={sourceType:'CSV',logicalSource_path:''};
      }
      else{
        this.triplesMap.logicalSource[0]={sourceType:'RDB',
        databasename:'',
        databaseurl:'',
        databasedriver:'',
        databaseusername:'',
        databasepassword:'',
        databasetable:'',
        databasequery:'',
        sqlqueryversion:'',
        RDB_host:'',
        RDB_port:''}
      }
     }
     else{
      if(this.selectedDataType === '1'){
        this.triplesMap.logicalSource.push({sourceType:"CSV",logicalSource_path:""})
      }
      else{
        this.triplesMap.logicalSource.push({sourceType:"RDB",
        databasename:'',
        databaseurl:'',
        databasedriver:'',
        databaseusername:'',
        databasepassword:'',
        databasetable:'',
        databasequery:'',
        sqlqueryversion:'',
        RDB_host:'',
        RDB_port:''})
      }
     }
  }


}
