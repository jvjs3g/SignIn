import React, { ChangeEvent, useState } from "react";
import { Form } from "@unform/web";

import api from "../../service/api";
import Input from "../../components/Input";
import {Container, Sign , Logo} from './style';
const logo = require("../../assets/dev.png");




interface ITypeLogin {
   email:string;
   password:string;
}

const SignIn:React.FC = () => {

 async function handlerSubmit(data:ITypeLogin){
   try {
        await api.post("users/auth",{
         email:data.email,
         password:data.password
      });
  
      alert("ok");
   } catch (error) {
      alert("deu ruim");
   }
 }

 return(
  <Container>
    
      <Form onSubmit={handlerSubmit}>
       <Sign className="signIn">
        <h1>Faça seu Sign In</h1>
        <Input type="email"   name="email" placeholder=" Please, Type your email"/>
        <Input type="password" name="password" placeholder=" Please, Type your password"/>
        <button type="submit">SignIn</button>
        </Sign>
       </Form>
    
     <Logo className='logo'>
        <img src={logo} alt="html ,css,  javascript" />
      </Logo>
   </Container>
 );
}

export default SignIn;