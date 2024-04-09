import { Component, OnInit } from '@angular/core';
import { RickapiconService } from '../../services/rickapicon.service';
import { ChApiResponse } from '../../interfaces/CharacterApi/ChApiResponse';
import { CharactersComponent } from './template/characters.component';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CharactersComponent],
  templateUrl: './character.component.html'
})

export class CharacterComponent {
  data: ChApiResponse | null = {
    info: {
      count: 0,
      next: '',
      pages: 0,
      prev: 0
    },
    results: []
  }

  results = Object.values(this.data!.results)

  constructor(private apiSer: RickapiconService) { }

  objectKeys(obj: ChApiResponse) {
    return Object.keys(obj);
  }

  apiConsum() {
    this.apiSer.GetCharacters().subscribe((res) => {
      this.data = res;
    })
  }
}
