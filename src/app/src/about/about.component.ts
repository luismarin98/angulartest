import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './about.component.html'
})
export class AboutComponent {

}
