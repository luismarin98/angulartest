import { Component } from '@angular/core';
import { RickapiconService } from '../../services/rickapicon.service';
import { ChApiResponse } from '../../interfaces/CharacterApi/ChApiResponse';
import { CharacterResponse } from '../../interfaces/CharacterApi/CharacterResponse';

@Component({
  selector: 'app-character',
  standalone: true,
  templateUrl: './character.component.html',
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

  results: CharacterResponse[] = this.data!.results;

  constructor(private apiSer: RickapiconService) { }

  objectKeys(obj: ChApiResponse) { return Object.keys(obj) }

  apiConsum() {
    this.apiSer.GetCharacters().subscribe((res) => {
      this.data = res;
    })
  }
}
