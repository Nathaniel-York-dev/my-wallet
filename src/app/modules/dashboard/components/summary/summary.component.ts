import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CardComponent} from "../../../core/components/card/card.component";
import {NavigationBarService} from "../../../../services/navigation-bar.service";
import {DataTransferService} from "../../../../services/data-transfer.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit, AfterViewInit {

  @ViewChildren(CardComponent) cards!: QueryList<CardComponent>;

  constructor(
    public navigationBarService: NavigationBarService,
    public dataTransferService: DataTransferService
  ) { }

  ngOnInit(): void {
    this.navigationBarService.show();
  }

  ngAfterViewInit() {
    this.organizeCards();
  }

  organizeCards() {
    let offset = 80;
    let zIndex = 3;
    let reduceRatio = 0;
    this.cards.forEach(card => {
      const cardElement = card.elementRef.nativeElement.querySelector('.card');
      cardElement.style.top = `${offset}px`;
      offset -= 40;
      cardElement.style.zIndex = `${zIndex}`;
      zIndex--;
      cardElement.style.width = `calc(${cardElement.offsetWidth}px - ${reduceRatio}px)`;
      reduceRatio += 10;
    })
  }

}
