import { Coche } from "./coche";
import { Persona } from "./persona";

export class Alquiler{
    numeroAlquiler !: number;
    coche!: Coche;
    persona!: Persona;
    estadoAlq!: string;
    fechaInicio!: Date;
    fechaFinal!: Date;
    costoTotal!:number;


}