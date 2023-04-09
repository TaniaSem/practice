import styled from "styled-components";
import { ErrorMessage, Field, Form } from "formik";


export const FormStyled = styled(Form)`
  width: 400px;
  padding: 40px 30px;
  background-color: rgb(255 255 255 / 64%);
  /* border: 1px solid rgb(91 86 245); */
  border-radius: 15px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* margin-bottom: 40px; */
`;

export const FieldStyled = styled(Field)`
  width: 355px;
  padding: 11px 20px 11px 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  background: #fdf7f2;
  border: 1px solid rgb(91 86 245);
  border-radius: 10px;
  :hover,
  :focus {
    outline: 2px solid rgb(91 86 245);
  }
`;

export const FormTitle = styled.h2`
margin-bottom: 20px;
`

export const ShowPassword = styled.div`
  position: absolute;
  bottom: 10px;
  right: 5%;
`;

export const InputBox = styled.div`
  position: relative;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;
  left: 16px;
  font-size: 16px;
  color: #9d3158;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 40px;
  padding: 10px 28px;
  background: rgb(73 96 184);
  border-radius: 10px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #ffffff;

  &.accent {
    background-color: rgb(73 184 150);
  }

  :hover {
    background: rgb(45 63 132);
    cursor: pointer;
    &.accent {
      background-color: rgb(59 149 137);
    }
  }
`;

export const TextStyled = styled.p`
  margin-top: 40px;
  text-align: center;
  letter-spacing: 0.04em;
`;

export const ErrorStyled = styled.p`
  position: absolute;
  bottom: -40px;
  left: 16px;
  font-size: 16px;
  color: #9d3158;
  text-align: center;
`;
