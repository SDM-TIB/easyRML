import { Component, Input, OnInit } from '@angular/core';
import { BackendConnectionService } from 'src/app/backend-connection.service';
import { tap,take, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-triplesmap',
  templateUrl: './triplesmap.component.html',
  styleUrls: ['./triplesmap.component.scss']
})
export class TriplesmapComponent implements OnInit {

  @Input () classOptions: any [] = [];
  @Input () propertyOptions: any [] = [];
  
  dataFieldOptions: any[] = [];

  predicateMapComponentArray = [1];

  selectedDataType: string = '0';
  selectedSubjectType: string = '0';

  dropdownList: any[] = [];
  dropdownSettings = {};

  RDBConnection = { databasename: '',
  databaseurl:'',
  databasedriver:'',
    databaseusername: '',
    databasepassword: '',
    databasetable: '',
    databasequery:'',
    sqlqueryversion: '',
    RDB_host: '',
    RDB_port: ''}

  constructor(private backendConnection: BackendConnectionService) { }

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

  onCsvUpload(event: any) {
    const fileList: FileList = event.target.files;
    const file = fileList[0];

    const formData = new FormData();
    formData.append('file', file, file.name);

    this.backendConnection.UploadCsvMethod(formData).pipe(take(1), switchMap(() => this.backendConnection.ReceiveDataFieldCsvMethod()), take(1)).subscribe((data:any[])=>{this.dataFieldOptions=data;
      this.dropdownList=data.map((ele)=>{return {item_id:ele,item_text:ele}})
    });

  }

  sendRDBData(){
    const dbProp: {RDBdata:any[]}= {RDBdata:[]}
    let prop :any={}
    Object.keys(this.RDBConnection).forEach((key)=>{ 
      if(key === "databasename" || key === "databaseusername" || key === "databasepassword" || key === "databasetable" || key === "sqlqueryversion" || key === "RDB_host"){
        prop[key]=this.RDBConnection[key];
      }
      if(key === 'RDB_port'){
        prop[key]=parseInt(this.RDBConnection[key]);
      }
    })
    dbProp.RDBdata.push(prop);

    this.backendConnection.UploadRdbDataMethod(dbProp).pipe(take(1), switchMap(() => this.backendConnection.ReceiveDataFieldRdbMethod()), take(1)).subscribe((data:any[])=>{this.dataFieldOptions=data;
      this.dropdownList=data.map((ele)=>{return {item_id:ele,item_text:ele}})
    });


  }


}
