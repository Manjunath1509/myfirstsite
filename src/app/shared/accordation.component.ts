import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-accordation',
  templateUrl: './accordation.component.html',
  styleUrls: ['./accordation.component.css']
})
export class AccordationComponent implements OnInit {
  @Input() expanded: boolean;
  @Input() title: string;
  @Input() isHidden = false;
  constructor() { }

  ngOnInit() {
  }

}
