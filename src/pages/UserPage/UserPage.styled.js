import styled from "styled-components";
import FonImg from "../../images/fon-img.jpg";

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${FonImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

export const Container = styled.div`
    width: 1280px;
    height: 100vh;
    padding: 0 30px;
    
    /* border: 1px solid red; */
`

