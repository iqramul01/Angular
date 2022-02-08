import { Component, OnInit } from '@angular/core';

import { DoctorService } from './../../services/doctor.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
    doctors: any[];
    constructor(private router: Router, private doctorService: DoctorService) { }

  ngOnInit() {
        this.refreshData();
    }

    refreshData() {
        this.doctorService.getDoctors().subscribe(doctors => this.doctors = doctors);
    }

    delete(id) {
        if (confirm("Do you want to delete Doctor with ID : " + id)) {
            console.log(id);
            this.doctorService.delete(id).subscribe(x => {
                console.log(x), this.refreshData();
            });
        }
    }


}