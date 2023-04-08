import { LoginForm } from "../components/LoginForm/LoginForm";
import { HomeBox, HomeText, HomeTitle } from "./Home.styled";

export const Home = () => {
  return (
    <HomeBox>
      <div>
        <HomeTitle>LolNet</HomeTitle>
        <HomeText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
          eligendi ipsum! Dolorum ipsam dignissimos quam voluptatum voluptate ab
          odio, minima ut, maxime dolor repudiandae. Assumenda ipsum maxime ad
          doloremque dolore!
        </HomeText>
      </div>
      <LoginForm />
    </HomeBox>
  );
};
