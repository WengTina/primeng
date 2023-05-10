import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PuchaseService {

    private BaseUrl: string = 'http://localhost:8080/authority/v1.0';
    constructor(private http: HttpClient) { }
    //get
    // getAllRequest(): Observable<any> {
    //   //https://jsonplaceholder.typicode.com/posts
    //   const url = `${this.BaseUrl}/posts`;
    //   return this.http.get(url);
    // }

    //加上回傳值page並設定limit為10
    // getAll


    getAllPuchaseRequest(page: number): Observable<any> {
        const url = this.BaseUrl + '/requisitions?page=' + page + '&limit=20';
        return this.http.get<any>(url);
    }

    // getOne
    getOnePuchaseRequest(id: any): Observable<any> {
        const url = `${this.BaseUrl}/requisitions/${id}`;
        return this.http.get(url);
    }

    //post
    postPuchaseRequest(body: any): Observable<any> {
        const url = `${this.BaseUrl}/requisitions`;
        return this.http.post(url, body);
    }

    // patch
    patchPuchaseRequest(id: any, body: any): Observable<any> {
        const url = `${this.BaseUrl}/requisitions/${id}`;
        return this.http.patch(url, body);
    }

    // delete
    deletePuchaseRequest(id: any): Observable<any> {
        const url = `${this.BaseUrl}/requisitions/${id}`;
        return this.http.delete(url);
    }
}
