import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { map } from 'rxjs/operators';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

//@Injectable({
//  providedIn: 'root'
//})
@Injectable()
export class DoctorService {

    constructor(private http: Http) { }

    create(doctor: any) {
        return this.http.post('/api/doctors', doctor).pipe(map(res => console.log(res.json())));
    }
    getDoctor(id: any) {
        return this.http.get('/api/doctors/' + id).pipe(map(res => res.json()));
    }

    update(doctor: any, id: any) {
        return this.http.put('/api/doctors/' + id, doctor).pipe(map(res => res.json()));
    }

    delete(id: any) {
        return this.http.delete('/api/doctors/' + id).pipe(map(res => res.json()));
    }

    getDoctors() {
        return this.http.get('/api/doctors/').pipe(map(res => res.json()));
    }

    getDepartmentList() {
        return this.http.get('/api/doctors/GetDepartmentList/')
            .pipe(map(res => res.json()));
    }

}


