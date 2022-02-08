import { Component, OnInit } from '@angular/core';

import { DepartmentService } from './../../services/department.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
    departments: any[];
    constructor(private router: Router, private departmentService: DepartmentService) { }

  ngOnInit() {
        this.refreshData();
    }

    refreshData() {
        this.departmentService.getDepartments().subscribe(departments => this.departments = departments);
    }

    delete(id: any) {
        if (confirm("Are You Sure??")) {
            console.log(id);
            this.departmentService.delete(id).subscribe(x => {
                console.log(x), this.refreshData();
            });
        }
    }


}
