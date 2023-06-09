import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import {
  Button,
  FormStyled,
  FieldStyled,
  ErrorMessageStyled,
  InputContainer,
  ShowPassword,
  InputBox,
  FormTitle,
} from "./LoginForm.styled";

const passRegexp = /^\S+$/;
const emailRegexp =
  // eslint-disable-next-line no-useless-escape
  /^(^[A-Za-z0-9]+[A-Za-z0-9_\-\.]{2,})+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const initialValues = {
  email: "",
  password: "",
};

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email addres")
    .matches(emailRegexp, "Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .matches(passRegexp, "Password cannot contain spaces")
    .min(7, "Password must be at least 7 characters")
    .max(32, "Password must be at most 32 characters")
    .required("Password is required"),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   const errorCode = useSelector(selectLoginError);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     console.log(errorCode);
  //   }, [errorCode]);

  const handleSubmit = (values, { resetForm }) => {
    //   dispatch(
    //     logIn({
    //       email: values.email,
    //       password: values.password,
    //     })
    //   );
    //   if (errorCode) return;
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ handleChange, values, errors, touched, setFieldTouched }) => {
        return (
          <FormStyled autoComplete="off">
            <FormTitle>Join LolNet today</FormTitle>
            <InputContainer>
              <InputBox>
                <FieldStyled type="email" name="email" placeholder="Email" />
                <ErrorMessageStyled name="email" component="p" />
              </InputBox>
              <InputBox>
                <FieldStyled
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                <ShowPassword onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <RxEyeOpen size={18} />
                  ) : (
                    <RxEyeClosed size={18} />
                  )}
                </ShowPassword>
                <ErrorMessageStyled name="password" component="p" />
              </InputBox>

              {/* {errorCode === 401 && (
                <ErrorStyled>
                  Email or Password is wrong. Please check your data.
                </ErrorStyled>
              )} */}
            </InputContainer>
            <Button type="submit">Log in</Button>
            
          </FormStyled>
        );
      }}
    </Formik>
  );
};
