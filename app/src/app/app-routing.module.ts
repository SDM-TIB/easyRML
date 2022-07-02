import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FileManagementComponent } from './file-management/file-management.component';
import { GuidelineUrlComponent } from './guideline-url/guideline-url.component';

const routes: Routes = [
  { path: '', component: FileManagementComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'guideline', component: GuidelineUrlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
