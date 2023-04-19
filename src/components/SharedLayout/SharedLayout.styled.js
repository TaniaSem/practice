import styled from "styled-components";


export const MainContainer = styled.div`
  margin: 0 auto;
  border: 1px solid blue;
  width: 1280px;
`

export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`
export const HeaderBox = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  width: 275px;
  padding: 10px 8px;
`

export const NavBox = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`

export const NavLink = styled.li`
  font-size: 20px;
  padding: 10px 28px;
  :hover {
    border-radius: 10px;
    background: rgb(116 118 124 / 34%);
    cursor: pointer;
  }
`

export const HeaderBtn = styled.button`
  width: 80%;
  padding: 10px 28px;
  background: rgb(73 96 184);
  border-radius: 10px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #ffffff;

  :hover {
    background: rgb(45 63 132);
    cursor: pointer;
  }
`