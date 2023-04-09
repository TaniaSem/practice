import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Button, TextStyled } from "../../components/LoginForm/LoginForm.styled";
import { Modal } from "../../components/Modal/Modal";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { useToggle } from "../../hooks/useToggle";
import { HomeBox, HomeText, HomeTitle } from "./Home.styled";

export const Home = () => {
  const { isOpen, open, close } = useToggle();

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
      <div>
      <LoginForm />
      <TextStyled>Don't have an account?</TextStyled>
      <Button className="accent" onClick={open} type="button">Register</Button>

      {isOpen && <Modal isOpen={isOpen} onClose={close}>
        <RegisterForm onClose={close} />
      </Modal>}
      </div>
    </HomeBox>
  );
};
