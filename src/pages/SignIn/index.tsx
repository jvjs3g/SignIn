import React, { useCallback} from "react";
import { Form } from "@unform/web";


import Input from "../../components/Input";
import {Container, Sign , Logo} from './style';
import { useAuth } from "../../hooks/auth"; 
import { useHistory } from "react-router-dom";

const logo = require("../../assets/dev.png");



interface ITypeLogin {
   email:string;
   password:string;
}

const SignIn:React.FC = () => {

const { signIn } = useAuth();

const history = useHistory();

const handleSubmit = useCallback(
   async (data: ITypeLogin) => {
     try {

     await signIn({
        email:data.email,
        password:data.password
     });

     history.push('/dashboard');
      
     } catch (err) {
       console.log(err);
     }
      
   },
   [signIn, history],
 );

 return(
  <Container>
    
      <Form onSubmit={handleSubmit}>
       <Sign className="signIn">
        <h1>Faça seu Sign In</h1>
        <Input type="email"  required name="email" placeholder=" Please, Type your email"/>
        <Input type="password" required name="password" placeholder=" Please, Type your password"/>
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