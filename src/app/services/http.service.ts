import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private baseUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) { }

  getRandomDog(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Função para extrair o nome da raça da URL
  getBreedNameFromUrl(url: string): string {
    const breed = url.split('/')[4]; // Pega o nome da raça
    return breed.replace('-', ' ').toUpperCase(); // Formata para exibição
  }
}
