import { SharedLayout } from "../../components/SharedLayout/SharedLayout"
import { Container, UserBox } from "./UserPage.styled"

export const UserPage = () => {
    return(
        <UserBox>
            <Container>
                <SharedLayout />
            </Container>
        </UserBox>
    )
}