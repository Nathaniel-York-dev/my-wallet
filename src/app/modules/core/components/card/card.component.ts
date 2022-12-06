import {Component, ElementRef, Input, OnInit} from '@angular/core';
import ColorsHelper from "../../lib/helpers/colors.helper";
import {ICard} from "../../../../lib/interfaces/card.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input('card') card!: ICard;

  constructor(
    public elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    const card = this.elementRef.nativeElement.querySelector('.card');
    card.style.backgroundColor = `var(${ColorsHelper.randomColor()})`;
  }

}
