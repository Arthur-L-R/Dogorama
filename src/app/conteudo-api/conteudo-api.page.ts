import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-conteudo-api',
  templateUrl: './conteudo-api.page.html',
  styleUrls: ['./conteudo-api.page.scss'],
  standalone: false,
})
export class ConteudoApiPage implements OnInit {

  imageUrl: string | null = null;
  breedName: string | null = null;

  constructor(private randomDogService: HttpService) { }

  ngOnInit() {
    this.loadDog();
  }

  loadDog() {
    this.randomDogService.getRandomDog().subscribe({
      next: (res) => {
        this.imageUrl = res.message;
        this.breedName = this.randomDogService.getBreedNameFromUrl(res.message);
      },
      error: (err) => {
        console.error('Erro ao buscar cachorro aleatório', err);
      }
    });
  }

}
