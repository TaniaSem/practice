import { PostsList } from "../../components/PostsList/PostsList"
import { SharedLayout } from "../../components/SharedLayout/SharedLayout"
import { Container, UserBox } from "./UserPage.styled"

export const UserPage = () => {
    return(
        <UserBox>
            <Container>
                <SharedLayout />
                <PostsList />
            </Container>
        </UserBox>
    )
}