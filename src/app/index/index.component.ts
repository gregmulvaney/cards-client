import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(private router: Router) {}

  joinRoute(): void {
    this.router.navigateByUrl('/game/join');
  }

  createRoute(): void {
    this.router.navigateByUrl('/game/create');
  }

  ngOnInit(): void {}
}
