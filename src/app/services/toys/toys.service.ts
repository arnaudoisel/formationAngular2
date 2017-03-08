import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';

@Injectable()
export class ToysService {
    constructor(private http: Http) {
    }

    public getToys = () => {
        return this.http.get('/api/toys.json')
        .map(res => res.json())
        .catch((err, caught) => Observable.throw(err.statusText));
    }
}
