export class persona
{
    id?:number;
    nombre: String;
    apellido: string;
    img: string;


    constructor(nombre:String, apellido: string, img:string )
    {
        this.nombre = nombre;
        this.apellido= apellido;
        this.img = img;

    }
}