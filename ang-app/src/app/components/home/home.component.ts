import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService} from "../../services/user.service"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: Array<User> = [] //binding para mostrar el listado


  //contacto a insertar 
  contact: User = {
    name: "",
    surname: "",
    phone: "",
    age: "",
    dni: "",
    bday: "",
    favcolor: "",
    gender: "",
    _id:""
  }

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      res => {
        this.contacts = res;
      },
      err => { console.error(err) }
    )
  }

  onSubmit() {

    this.userService.createUser(this.contact).subscribe(
      res => {
        this.getUsers();
      },
      err => { }
    );
    

    // reiniciamos el objeto contact una vez lo hemos guardado
    this.contact = {
      name: "",
      surname: "",
      phone: "",
      age: "",
      dni: "",
      bday: "",
      favcolor: "",
      gender: "",
      _id: ""

    }
      
  }

    

  


  delete(id: string): void {

    this.userService.deleteUser(id).subscribe(
      res => { this.getUsers() },
      err => { }
    )
  
  }
  update(id: string): void {
    // modificas el formulario.
    //los datos que pongas van a reemplazar los datos del contacto cuyo boton selecciones.

     // this.contacts[i] = this.contact;
    console.log(this.contact);
    this.userService.updateUser(id, this.contact).subscribe(
      res => { this.getUsers() },
      err => { }
    )
    
    this.contact = {
      name: "",
      surname: "",
      phone: "",
      age: "",
      dni: "",
      bday: "",
      favcolor: "",
      gender: "",
      _id: ""

    }
  }

    formatearFecha() {
      //ya hemos modificado el contact
      let birthDate = new Date(this.contact.bday);
      let day = birthDate.getDate();
      let month = birthDate.getMonth() + 1;//getMonth va de 0 a 11, para que sea mas intuitivo le sumo uno y queda del 1 al 12
      let year = birthDate.getFullYear();
      //let ageNum = parseInt(this.contact.age)
      this.contact.bday = `${day}/${month}/${year}`;


    }
}

