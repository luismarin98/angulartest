import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

}
