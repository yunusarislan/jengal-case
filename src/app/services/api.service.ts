import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private apiUrl = 'https://rickandmortyapi.com/api/character';

    constructor(
        private http: HttpClient,
    ) { }

    getCharacters(page:number) {
        const url = `${this.apiUrl}?page=${page}`
        return this.http.get<any>(url);
    }

    getCharacter(id:number) {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<any>(url);
    }
}