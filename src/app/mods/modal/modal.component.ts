import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter;

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (document.body.contains(this.el.nativeElement)) {
      document.body.removeChild(this.el.nativeElement);
    }
  }

  onCloseClick() {
    this.close.emit();
  }


}
