import styled from "styled-components";
import FonImg from "../../images/fon-img.jpg";

export const HomeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 100px;
  padding: 40px;
  position: fixed;

  background-image: url(${FonImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

export const HomeTitle = styled.h1`
  width: 588px;

  font-size: 68px;
  line-height: 1.47;
`;

export const HomeText = styled.p`
  padding-top: 34px;
  width: 588px;

  font-size: 32px;
  line-height: 1.47;
`;
