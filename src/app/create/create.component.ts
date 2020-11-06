import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  protected name: string;
  constructor() {}

  handleNameChange(event): void {
    this.name = event.target.value;
  }

  handleSubmit(event): void {
    event.preventDefault();
    console.log(`Name: ${this.name}`);
  }

  ngOnInit(): void {}
}
