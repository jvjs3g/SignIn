import styled from "styled-components";

export  const Container = styled.div`
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   align-items:center;

   form{
     margin-left:190px;
   }
   
`;

export const Sign = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:0 auto;
  border:1px solid  rgb(77, 10, 140);

  h1{
   font-weight:bold;
   font-family:Arial, Helvetica, sans-serif;
   margin-bottom:60px;
   color:  rgb(199, 189, 207);

  }
  
  input {
    margin-bottom:15px;
    width:330px;
    border-radius:6px;
    height:30px;
  }

  input + input {
    margin-bottom:30px;
  }


  button{
    width:200px;
    border-radius:6px;
    height:30px;
    font-size:12pt;
    font-weight:bold;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  border-left:1px solid  rgb(77, 10, 140);
  img {
    height:100vh;
    width:100vh;
  }
`;