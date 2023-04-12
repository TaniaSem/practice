import styled from "styled-components";

export const List = styled.ul`
position: relative;
left: 305px;
width: 600px;
padding: 20px;
border: 1px solid red;

display: flex;
flex-basis: auto;
flex-direction: column;
gap: 20px;`

export const Item = styled.li`
display: flex;
justify-content: flex-start;
gap: 8px;
`

export const Image = styled.div`
width: 48px;
height: 48px;
border-radius: 50%;
background-color: #fff;
`

export const TextBox = styled.div`
max-width: 530px;
`

export const AdditionalBox = styled.div`
display: flex;
gap: 20px
`

