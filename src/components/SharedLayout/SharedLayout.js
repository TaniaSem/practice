import { Link, Outlet } from "react-router-dom"
import { HeaderBox, HeaderBtn, MainContainer, SecondContainer, NavBox, NavLink } from "./SharedLayout.styled"
import { Suspense } from "react"

export const SharedLayout = () => {
    return (
        <MainContainer>
            <SecondContainer>
            <HeaderBox>
                <div>Logo</div>
                <NavBox>
                    <NavLink>Home</NavLink>
                    <NavLink>BookMarks</NavLink>
                    <NavLink>Profile</NavLink>
                </NavBox>
                <HeaderBtn type="button">LolPost</HeaderBtn>
            </HeaderBox>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
            </SecondContainer>
        </MainContainer>
    )
}