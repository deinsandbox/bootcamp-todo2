import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() name: string;
  @Output() changeTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChangeTitle(title: string) {
    if (title) {
      this.changeTitle.emit(title);
    }
  }

}
