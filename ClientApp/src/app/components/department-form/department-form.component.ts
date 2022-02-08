import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './../../services/department.service';

import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

    departmentID: any;
    departmentName: any;
    availableSeat: any;
    department = { departmentID: 0 };



    constructor(private route: ActivatedRoute, private router: Router, private departmentService: DepartmentService) {
        route.params.subscribe(p => {
            this.department.departmentID = p['id'];
        }, err => {
            if (err.status == 404)
                this.router.navigate(['/department']);
        });
    }

    ngOnInit() {
        if (this.department.departmentID !== undefined) {
            this.departmentService
                .getDepartment(this.department.departmentID)
                .subscribe(c => {
                    this.department = c;
                });
        }
        else {
            this.department.departmentID = 0;
            this.departmentName = '';
            this.availableSeat = '';
        }
    }

    submit() {
        if (this.department.departmentID != 0) {
            this.departmentService.update(this.department, this.department.departmentID)
                .subscribe(x => {
                    console.log(x),
                        this.router.navigate(['/department'])
                });
        }
        else {
            console.log(this.department);
            this.departmentService.create(this.department)
                .subscribe(x => {
                    console.log(x),
                        this.router.navigate(['/department'])
                });
        }
    }

}

