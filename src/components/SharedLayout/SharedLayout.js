import { Link } from "react-router-dom"
import { HeaderBox, HeaderBtn, NavBox, NavLink } from "./SharedLayout.styled"

export const SharedLayout = () => {
    return (
        <HeaderBox>
            <div>Logo</div>
            <NavBox>
                <NavLink>Home</NavLink>
                <NavLink>BookMarks</NavLink>
                <NavLink>Profile</NavLink>
            </NavBox>
            <HeaderBtn type="button">LolPost</HeaderBtn>
        </HeaderBox>
    )
}