import React from "react";
import { useAuth } from "../../hooks/auth";
import { Container, Content, ContainerIcon  } from "./style";

import {FiLogOut} from 'react-icons/fi';

const logo = require("../../assets/logo.png");

const Dashboard:React.FC = () => {

  const { user, signOut } = useAuth();


  return(
    <Container>
      <Content>
      <div>{user.name} está aprendendo React</div>
       <img src={logo} alt="icon react" />
      </Content>
      <ContainerIcon>
         <FiLogOut onClick={signOut}/>
      </ContainerIcon>
    </Container>
  );
}


export default Dashboard;