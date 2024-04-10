import { Component } from '@angular/core';
import { RickapiconService } from '../../services/rickapicon.service';
import { ChApiResponse } from '../../interfaces/CharacterApi/ChApiResponse';

@Component({
  selector: 'app-character',
  standalone: true,
  templateUrl: './character.component.html',
})

export class CharacterComponent {
  data: ChApiResponse | null = null;

  constructor(private apiSer: RickapiconService) { }

  objectKeys(obj: ChApiResponse) { return Object.keys(obj) }

  apiConsum() {
    this.apiSer.GetCharacters().subscribe((res) => {
      this.data = res;
    })
  }
}
