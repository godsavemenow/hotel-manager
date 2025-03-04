import { Component, OnInit } from '@angular/core';
import { CheckService } from './check.service';
import { Form } from './form';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  constructor (private checkService: CheckService) {}
    
  form: Form = new Form();
  cadastro: Boolean = true;
  clicado: Boolean = false;

  checkInFunc (a: Form): void {
      this.checkService.checkIn(a)
      .then(ab => {
          if (ab != null) {
              this.form = ab;
          } else {
              this.cadastro = false;
          }
          this.clicado = !this.clicado;
      })
      .catch(erro => alert(erro));
  }

  checkInFunc2(a: Form): void {
      this.checkService.checkIn2(a)
      .then(ab => {
          if (this.cadastro == false) {
              alert("Cadastro feito");
              this.cadastro = true;
          }
          if (ab != null) {
              alert("Check-in feito");
              this.form = new Form();
          }
      })
      .catch(erro => alert(erro));
  }

  ngOnInit() {
      
  }
}
