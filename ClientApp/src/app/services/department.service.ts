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
export class DepartmentService {

    constructor(private http: Http) { }
    create(department: any) {
        return this.http.post('/api/departments', department).pipe(map(res => console.log(res.json())));
    }
    getDepartment(id: any) {
        return this.http.get('/api/departments/' + id).pipe(map(res => res.json()));
    }

    update(department: any, id: any) {
        return this.http.put('/api/departments/' + id, department).pipe(map(res => res.json()));
    }

    delete(id: any) {
        return this.http.delete('/api/departments/' + id).pipe(map(res => res.json()));
    }

    getDepartments() {
        return this.http.get('/api/departments/').pipe(map(res => res.json()));
    }

}

