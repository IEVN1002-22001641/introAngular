import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Requerido para usar pipes como uppercase o date si es standalone

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  titulo: string = "Arturo Landeros";

  // Método corregido con CamelCase
  duplicaNumero(num: number): number {
    return num * 2;
  }

  pelicula = {
    titulo: "GoodFellas",
    anio: 1972,
    genero: "Drama", // Agregada la coma al final
    fechaLanzamiento: new Date(),
    precio: 345
  };
}