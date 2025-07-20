import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { transition, style, trigger, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule, HeaderComponent],
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
  showHeader: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const currentRoute = this.activatedRoute.root.children[0].snapshot.data;
      this.showHeader = currentRoute['showHeader'] !== false; 
    });
  }

  getAnimationState(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

