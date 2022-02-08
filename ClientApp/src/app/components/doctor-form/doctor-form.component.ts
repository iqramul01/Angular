import { Component, OnInit } from '@angular/core';
import { DoctorService } from './../../services/doctor.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {
    doctorID: any;
    name: any;
    address: any;
    cellPhone: any;
    birthDate: any;
    status: any;


    departmentID: number;
    departmentList: Array<number> = [];

    doctor = { doctorID: 0 };

    constructor(private route: ActivatedRoute, private router: Router, private doctorService: DoctorService) {
        route.params.subscribe(t => {
            this.doctor.doctorID = t["id"];
        }, err => {
            if (err.status == 404)
                this.router.navigate(['/doctor']);
        });
    }

    ngOnInit() {

        this.doctorService.getDepartmentList().subscribe(
            data => this.departmentList = data
        )

        if (this.doctor.doctorID !== undefined) {
            this.doctorService
                .getDoctor(this.doctor.doctorID)
                .subscribe(t => {
                    this.doctor = t;
                });
        }
        else {
            
            this.doctor.doctorID = 0;
            this.name = '';
            this.address = '';
            this.cellPhone = '';
            this.birthDate = '';
            this.status = '';
            this.departmentID = 0;
        }
    }

    submit() {
        if (this.doctor.doctorID != 0) {
            this.doctorService.update(this.doctor, this.doctor.doctorID)
                .subscribe(x => {
                    console.log(x),
                        this.router.navigate(['/doctor'])
                });
        }
        else {
            console.log(this.doctor);
            this.doctorService.create(this.doctor)
                .subscribe(x => {
                    console.log(x),
                        this.router.navigate(['/doctor'])
                });
        }
    }

}
