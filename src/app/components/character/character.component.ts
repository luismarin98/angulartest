import { Component, OnInit } from '@angular/core';
import { RickapiconService } from '../../services/rickapicon.service';
import { ChApiResponse } from '../../interfaces/CharacterApi/ChApiResponse';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
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

  constructor(private apiSer: RickapiconService) { }

  apiConsum() {
    this.apiSer.GetCharacters().subscribe((res) => {
      this.data = res;
    })
  }
}
