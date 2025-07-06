import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { transition, style, trigger, animate} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeFadeAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class AppComponent {
  title = 'SkillXchange';

  getAnimationState(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

