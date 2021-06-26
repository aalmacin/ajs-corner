import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu-item',
  templateUrl: './home-menu-item.component.html',
  styleUrls: ['./home-menu-item.component.scss'],
})
export class HomeMenuItemComponent implements OnInit {
  @Input() flavorText!: string;
  @Input() heading!: string;
  @Input() details!: string;
  @Input() imgSrc!: string;
  @Input() right? = false;

  constructor() {}

  ngOnInit(): void {}
}
