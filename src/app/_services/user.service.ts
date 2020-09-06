import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user'
import {environment} from '../environments/environment'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }
    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
    getUser(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }
    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
    getFreinds() {
        return this.http.get<User[]>(`${environment.apiUrl}/‘friends`);
    }
}