import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {title: 'Why is the sky blue?', content: 'Because of the way light scatters in the atmosphere.'},
    {title: 'What does an orange taste like?', content: 'An orange tastes like an orange.'},
    {title: 'What time is it?', content: 'It is now.'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }


}
