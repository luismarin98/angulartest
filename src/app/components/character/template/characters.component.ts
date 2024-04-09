import { Component } from '@angular/core';
import { ChApiResponse } from '../../../interfaces/CharacterApi/ChApiResponse';

@Component({
    selector: 'chs-show',
    template: `
    <div *ngIf="data">
      <div *ngFor="let item of objectKeys(data!.info)">
        {{item}}: {{data!.info.count}}
      </div>
      <div *ngFor="let result of data!.results">
        <div *ngFor="let key of objectKeys(result)">
          {{key}}: {{result[key]}}
        </div>
      </div>
    </div>
  `,
})
export class CharactersComponent {
    data: ChApiResponse | null = {
        info: {
            count: 0,
            next: '',
            pages: 0,
            prev: 0
        },
        results: []
    };

    objectKeys(obj: ChApiResponse) {
        return Object.keys(obj);
    }
}
