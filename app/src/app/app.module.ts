import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileManagementComponent } from './file-management/file-management.component';
import { TriplesmapComponent } from './file-management/triplesmap/triplesmap.component';
import { PredicateobjectmapComponent } from './file-management/triplesmap/predicateobjectmap/predicateobjectmap.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GuidelineUrlComponent } from './guideline-url/guideline-url.component';
import { HttpClientModule } from '@angular/common/http';
import { BackendConnectionService } from './backend-connection.service';


@NgModule({
  declarations: [
    AppComponent,
    FileManagementComponent,
    TriplesmapComponent,
    PredicateobjectmapComponent,
    AboutUsComponent,
    GuidelineUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [BackendConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
