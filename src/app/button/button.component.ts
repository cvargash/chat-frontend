import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() buttonText: string = ""
  @Output() externalbuttonAction: EventEmitter<any> = new EventEmitter() 

  buttonAction(){
    this.externalbuttonAction.emit()
  }

}
