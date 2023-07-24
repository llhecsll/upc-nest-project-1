import { Injectable } from '@nestjs/common';
import { UserModel } from './models/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
 
  constructor(
    @InjectRepository(UserModel)
    private user : Repository<UserModel>
  ){}

  public index(){
    return this.user.find();
  }

  findAll(): Promise<UserModel[]> {
    return this.user.find();
  }

  findOne(id: number): Promise<UserModel | null> {
    return this.user.findOneBy({ id });
  }

  create(): Promise<UserModel> {
    const example = this.user.create({nombre: 'usuario'});
    return this.user.save(example);

  }

  async remove(id: number): Promise<void> {
    await this.user.delete(id);
  }

  
  
  
  //Base de Datos
//  private listProduct= [
//    {
//      "name": "nombre",
//      "price": 100,
//      "brand": "generic"
//    }
//  ];
//  private listPersona =[
//    {
//      "nombre": "Hermes",
//      "apellido": "Cayalo",
//      "edad":"30",
//      "correo":"hcayalo@gmail.com",
//      "celular": "78130097"
//    }
//  ];
  
//  public index(){
//    return this.listProduct;
//  }

//  public create(json){
//    return this.listProduct.push(json);
//  }

//  public show(id){
//    return this.listProduct[id -1];
//  }

//  public edit(id, json){
//    this.listProduct[id -1].name=json.name;
//    this.listProduct[id -1].brand=json.brand;
//    this.listProduct[id -1].price=json.price;
//    return this.listProduct[id -1];
//  }

//  public delete(id) {
//    this.listProduct = this.listProduct.filter((product, index) => index !== id - 1);
//  }


//Examen mostrar datos personales
//  public mostrar(id){
//    return this.listPersona[id -1];
//  }

//Examen editar datos
//public editar(id, json){
//  this.listPersona[id -1].nombre=json.nombre;
//  this.listPersona[id -1].apellido=json.apellido;
//  this.listPersona[id -1].edad=json.edad;
//  this.listPersona[id -1].correo=json.correo;
//  this.listPersona[id -1].celular=json.celular;
//  return this.listPersona[id -1];
//}


}
