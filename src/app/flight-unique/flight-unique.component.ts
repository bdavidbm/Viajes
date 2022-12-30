import { Component, OnInit } from '@angular/core';
import { Flight } from '../core/models/Flight.model';
import { FlightService } from '../core/services/flight.service';

@Component({
  selector: 'app-flight-unique',
  templateUrl: './flight-unique.component.html',
  styleUrls: ['./flight-unique.component.css']
})
export class FlightUniqueComponent implements OnInit {

  flights: Flight[];
  origenes: String[]=[];
  destinos: String[]=[];
  rutas: Flight[];
  salida:String;
  llegada:String;

  constructor(
    private flightService: FlightService
  ) { }

  ngOnInit(): void {
    console.log('hola')
    this.flightService.getFlight().subscribe(flight=>{
      console.log('v1:',flight)
      this.flights=flight;
      console.log('v2:',this.flights)
      this.origen();
    })
  }

  origen(){
    this.flights.forEach(element => {
      var c=0;
      this.origenes.forEach(item =>{
        if (item == element.departureStation){
          c=c+1;
        }
      });
      if (c==0){
        this.origenes.push(element.departureStation);
      }
    });
    console.log(this.origenes,'54632')
  }

  destino(){
    this.destinos=[];
    this.flights.forEach(element => {
      var c=0;
      this.destinos.forEach(item =>{
        if (item == element.arrivalStation || element.arrivalStation == this.salida){
          c=c+1;
        }
      });
      if (c==0){
        this.destinos.push(element.arrivalStation);
      }
    });
  }

  agregarOrigen(origen:String){
    this.salida=origen;
    this.comprobarDestino();
    this.destino();
  }

  agregarDestino(destino:String){
    this.llegada=destino;
    this.comprobarDestino();
  }

  comprobarDestino(){
    if (this.salida==this.llegada){
      this.llegada='destino debe ser diferente a origen'
    }else{
      this.ruta();
    }
  }

  ruta(){
    if (this.salida && this.llegada){
      this.rutas=[];
      this.flights.forEach(element => {
        console.log(element)
        if (element.departureStation==this.salida && element.arrivalStation==this.llegada){
          this.rutas.push(element);
          console.log(this.rutas)
        }
      });
    }
  }
}
