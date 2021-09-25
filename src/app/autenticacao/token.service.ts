import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  retornaToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string) {
    return localStorage.setItem(KEY, token);
  }

  removeToken() {
    return localStorage.removeItem(KEY);
  }

  possuiToken() {
    return !!this.retornaToken;
  }
}
