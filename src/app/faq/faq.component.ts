import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FAQComponent implements OnInit {
  
  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
  }

  


}
