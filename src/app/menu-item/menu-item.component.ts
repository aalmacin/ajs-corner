import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() product!: string;
  @Input() price!: string;
  @Input() details!: string;
  @Input() imgSrc!: string;
  @Input() right? = false;

  constructor() {}

  ngOnInit(): void {}
}
