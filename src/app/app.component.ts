import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'whatclient';

  constructor(
    private http: HttpClient
  ) {}

  sendMessage() {
    const data = {
      "codigo": "13074332",
      "nombre": "Arcata Maquera Gumercindo",
      "supervisor": "José Luis Rubin",
      "bdr": "PEX124",
      "riesgo": "alto",
      "rechazo": "alto",
      "rmd": "alto",
      "cajas": "20.00",
      "ruta": "BK7701",
      "motivo": "no hay",
      "localidad": "ILAVI",
      "number": "51951291999"
    }
    this.http.post('http://localhost:3000/send', data).subscribe(resp => {
      console.log(resp)
    });
  }
}
