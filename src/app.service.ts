import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //Base de Datos
  private listProduct= [
    {
      "name": "nombre",
      "price": 100,
      "brand": "generic"
    }
  ];
  private listPersona =[
    {
      "nombre": "Hermes",
      "apellido": "Cayalo",
      "edad":"30",
      "correo":"hcayalo@gmail.com",
      "celular": "78130097"
    }
  ];
  
  public index(){
    return this.listProduct;
  }

  public create(json){
    return this.listProduct.push(json);
  }

  public show(id){
    return this.listProduct[id -1];
  }

  public edit(id, json){
    this.listProduct[id -1].name=json.name;
    this.listProduct[id -1].brand=json.brand;
    this.listProduct[id -1].price=json.price;
    return this.listProduct[id -1];

  }
//Examen mostrar datos personales
  public mostrar(id){
    return this.listPersona[id -1];
  }

//Examen editar datos
public editar(id, json){
  this.listPersona[id -1].nombre=json.nombre;
  this.listPersona[id -1].apellido=json.apellido;
  this.listPersona[id -1].edad=json.edad;
  this.listPersona[id -1].correo=json.correo;
  this.listPersona[id -1].celular=json.celular;
  return this.listPersona[id -1];

}


}
