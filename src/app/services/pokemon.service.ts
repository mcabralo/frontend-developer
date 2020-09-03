
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemons(index) {
    console.log(this.baseUrl);
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
