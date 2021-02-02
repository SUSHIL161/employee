import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../service/data.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: any = [];
  headers: any = [];
  i18text: any;
  employee: any = {};
  showView: any = {};
  isupdate: boolean = false;
  employeeBeingEdited: any = {};
  textPattern: RegExp;
  isSearch: boolean = false;
  searchText: string;
  @ViewChild('searchTxt') searchField: ElementRef;

  errorMap: any = {};
  constructor(private dataService: DataService, private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    this.translateService.get('employee').subscribe((res: any) => {
      this.i18text = {'employee': res};
    }, (error) => {
    });

   }

  ngOnInit() {
    this.dataService.getAllEmployees().subscribe(
      (response) => {this.employees = response },
      error => { },
    );
    this.headers = ['First Name', 'Last Name', 'Gender', 'Date of Birth', 'Department'];
    this.showView = {
      'registration': true,
      'viewAll': false
    }
    this.textPattern = new RegExp(/^[a-zA-Z][a-zA-Z]*$/g);
    this.isupdate = false;
  }

  onUpdate = (employee) => {
    this.employee = JSON.parse(JSON.stringify(employee));
    this.employeeBeingEdited = JSON.parse(JSON.stringify(employee));
    this.showView['registration'] = true;
    this.showView['viewAll'] = false;
    this.isupdate = true;
  }

  sortEmployee = () => {
    this.employees.sort((first,second) => first.firstName.toLowerCase() > second.firstName.toLowerCase() ? 1:  first.firstName.toLowerCase() < second.firstName.toLowerCase() ? -1 : 0);
    this.employee = {};
    this.showView.registration = false;
    this.showView.viewAll = true;
  }
  

  validateEmployee = () => {
    if(!this.employee.firstName) {
      this.errorMap.firstName = true;
      // alert(this.i18text.employee.validator.firstName.empty);
      return false;
    } else {
      delete this.errorMap.firstName;
    }
    if(!this.employee.lastName) {
      this.errorMap.lastName = true;
      return false;
    } else {
      delete this.errorMap.lastName;
    }
    if(!this.employee.gender) {
      this.errorMap.gender = true;
      return false;
    } else {
       delete this.errorMap.gender;
    }
    if(!this.employee.dateOfBirth) {
      this.errorMap.dateOfBirth = true;
      return false;
    } else {
      delete this.errorMap.dateOfBirth;
    }
    if(!this.employee.department) {
      this.errorMap.department = true;
      return false;
    } else {
      delete this.errorMap.department;
    }
 
    return true;
  }


  submit = () => {

    if(this.validateEmployee()) {
      if(this.isupdate) {
        this.dataService.updateEmployee(this.employee.empID, this.employee).subscribe((response) => {
          if(response.body.success && response.body.employee) {
            let index = this.employees.findIndex(employee=> employee.empID === this.employeeBeingEdited.empID);
            this.employee = response.body.employee;
            if(index >=0 ) {
              this.employees[index] = this.employee;
              alert(this.i18text.employee.operation.updateSuccess);
              this.sortEmployee();
            } else {
              alert(this.i18text.updateFail);
            }
          } else {
            alert(this.i18text.updateFail);
          }
        }, (error) => {
          alert(this.i18text.updateFail);
        });
      } else {
        this.dataService.addEmployee(this.employee).subscribe((response) => {
          if(response.body.success && response.body.employee) {
            this.employee = response.body.employee;
            this.employees.push(this.employee);
            this.sortEmployee();
            alert(this.i18text.employee.operation.saveSuccess);
          } else {
            alert(this.i18text.employee.operation.saveFail);
          }
        }), error => {
          alert(this.i18text.employee.operation.saveFail);
        }
      }
    }
  

  }

  selectView = (option1, option2, isupdate) => {
    this.showView[option1] = true;
    this.showView[option2] = false;
    this.employee = {};
    this.isupdate = isupdate;
    this.errorMap = {};
    this.searchText = '';
  }

  parseText = (key:string) => {
    if(this.employee[key] && this.employee[key].trim().length > 0) {
      delete this.errorMap[key];
    }
  }
  
  isError = () =>  Object.keys(this.errorMap).length > 0;

  searchEmplolyee = () => {
    this.isSearch = !this.isSearch;
    setTimeout(() => {
      if(this.searchField) {
        this.searchField.nativeElement.focus();
      }
    },0);
  }

  searchEmployeeByText = (event) => {

    let searchTerm = this.searchText;
    this.dataService.getAllEmployees().subscribe(
      (response) => {
        this.employees = response;
        if(this.searchText && this.searchText.trim().length > 0) {
          this.employees = this.employees.filter(
            employee => employee.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
                      || employee.lastName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                      || employee.dateOfBirth.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase())
                      || employee.gender.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase())
                      || employee.department.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase())
            
          );
        }    
      },
      error => { },
    );
       
  }
  deleteEmplolyee = (empID:string) => {
    this.dataService.deleteEmployee(empID).subscribe(response => {
      if(response.success) {
        this.employees = this.employees.filter(employee => employee.empID != empID);
        alert("Employee deleted");
      } else {
        alert("not deleted");
      }
    }, (error) => {
      console.log("error");
    })
  }

  selectGender = () => {
    delete this.errorMap.gender;
  }
}
