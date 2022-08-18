import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
 
const routes: Routes = [
 { path: '', redirectTo: 'employees', pathMatch: 'full' },
 { path: 'employees', component: EmployeesListComponent },
 { path: 'employees/new', component: AddEmployeeComponent }, // <-- add this line
 { path: 'employees/edit/:id', component: EditEmployeeComponent } // <-- add this line
];
 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }