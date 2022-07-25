import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(private router: ActivatedRoute) { }
  id:string | null | undefined;

  ngOnInit(): void { // pegando parametros
    this.router.paramMap.subscribe(paramMap =>{
      this.id = paramMap.get('id');
    })
  }

}
