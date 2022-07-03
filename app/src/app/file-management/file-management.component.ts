import {
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { interval } from 'rxjs';
import { BackendConnectionService } from '../backend-connection.service';
import { tap, take, switchMap } from 'rxjs/operators';
import { FormServiceService } from '../form-service.service';
import { Triplesmaptype } from '../types';


@Component({
  selector: 'app-file-management',
  templateUrl: './file-management.component.html',
  styleUrls: ['./file-management.component.scss']
})
export class FileManagementComponent implements OnInit {
  formData: any;
  dropdownList: any[] = [];
  dropdownSettings = {};
  jsonPrimilaryData = {};
  response: any;
  PrefixValue: string = '';
  classOptions: any[] = [];
  propertyOptions: any[] = [];

  manualPrefixArray: any[] = [];


  manualPrefix = '';
  manualUrl = '';

  triplesMapData:Triplesmaptype[] = [];


  prefixObject: { output: [{ output_file_path: string, output_file_name: string }], defaultPrefixes: any[], newPrefixs: any[] } = {
    output: [{ output_file_path: '', output_file_name: '' }],
    defaultPrefixes: [],
    newPrefixs: []
  };

  // triplsMapComponentArray = [1];

  constructor(private backendConnection: BackendConnectionService, private formService: FormServiceService) { }

  ngOnInit(): void {
    this.formData = {
      outputFileName: '',
      outputFilePath: '',
      manualPrefix: '',
      manualUrl: '',
    };

    this.triplesMapData = this.formService.getFormdata();

    this.formService.resetData.subscribe((data:Triplesmaptype[])=>{this.triplesMapData = data});


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'prefix',
      textField: 'url',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true,
    };

    this.backendConnection.ReceivePrefixMethod().subscribe((data) => {
      this.response = data;

      this.response.forEach((prefixUrl: any) => {
        if (prefixUrl == "http://www.w3.org/ns/r2rml#") {
          this.PrefixValue = "rr";
        } else if (prefixUrl == "http://semweb.mmlab.be/ns/rml#") {
          this.PrefixValue = "rml";
        } else if (prefixUrl == "http://semweb.mmlab.be/ns/ql#") {
          this.PrefixValue = "ql";
        } else if (prefixUrl == "http://www.w3.org/2000/01/rdf-schema#") {
          this.PrefixValue = "rdfs";
        } else if (prefixUrl == "http://www.w3.org/1999/02/22-rdf-syntax-ns#") {
          this.PrefixValue = "rdf";
        } else if (prefixUrl == "http://purl.org/stuff/rev#") {
          this.PrefixValue = "rev";
        } else if (prefixUrl == "http://schema.org/") {
          this.PrefixValue = "schema";
        } else if (prefixUrl == "http://www.w3.org/2001/XMLSchema#") {
          this.PrefixValue = "xsd";
        } else if (prefixUrl == "http://www.wiwiss.fu-berlin.de/suhl/bizer/D2RQ/0.1#") {
          console.log(this);
          this.PrefixValue = "d2rq";
        } else {
          this.PrefixValue = "";
        }
        this.dropdownList = this.dropdownList.concat({
          prefix: this.PrefixValue,
          url: prefixUrl,
        });

      });
    })
  }

  onSave() {


    this.prefixObject.output[0].output_file_name = this.formData.outputFileName;
    this.prefixObject.output[0].output_file_path = this.formData.outputFilePath;

    this.backendConnection.UploadPreliminaryUserInput([{ output: this.prefixObject.output }, { defaultPrefixes: this.prefixObject.defaultPrefixes }, { newPrefixes: this.prefixObject.newPrefixs }]).subscribe(() => alert("successfull"), () => alert('unsuccessfull'));

  }

  onItemSelect(event: any) {
    const element = this.manualPrefixArray.some((ele) => {
      if (ele.prefix === event.prefix) {
        this.prefixObject.newPrefixs.push(event);
      }
      return ele.prefix === event.prefix;
    });

    if (!element) {
      this.prefixObject.defaultPrefixes.push(event);
    }


  }

  onItemDeSelect(event: any) {
    const element = this.manualPrefixArray.some((ele) => ele.prefix === event.prefix);

    if (!element) {
      this.prefixObject.defaultPrefixes = this.prefixObject.defaultPrefixes.filter((ele) => ele.prefix !== event.prefix);
    }
    else {
      this.prefixObject.newPrefixs = this.prefixObject.newPrefixs.filter((ele) => ele.prefix !== event.prefix);
    }


  }

  addPrefixdata() {
    this.manualPrefixArray.push({
      prefix: this.formData.manualPrefix,
      url: this.formData.manualUrl,
    });

    this.dropdownList = [...this.dropdownList, ...this.manualPrefixArray];


    this.formData.manualPrefix = '';
    this.formData.manualUrl = '';
  }

  onOntologyUpload(event: any) {
    const fileList: FileList = event.target.files;
    const file = fileList[0];

    const formData = new FormData();
    formData.append('file', file, file.name);

    this.backendConnection.UploadOntologyMethod(formData).pipe(take(1), switchMap(() => this.backendConnection.ReceiveClassesMethod()), take(1), tap((data) => { this.classOptions = data as any[] }), switchMap(() => this.backendConnection.ReceivePropertiesMethod()), take(1)).subscribe((data) => { this.propertyOptions = data as any[] });

  }


  addNewTriplesMap(){
    this.triplesMapData.push(this.formService.getNewTriplesMapType());
  }


  onCreateMappingFile(){
    // console.log(this.formService.getFormdata())

    this.backendConnection.UploadTriplesMapUserInput([{triplesMap:this.formService.getFormdata()}]).subscribe(() => {alert("successfull");this.formService.resetFormData();}, () => alert('unsuccessfull'));
  }

}
