import { Formik } from 'formik';
import * as yup from 'yup';
import { Button, ErrorMessageStyled, FieldStyled, FormStyled, FormTitle, InputBox, InputContainer, ShowPassword } from '../LoginForm/LoginForm.styled';
import { useState } from 'react';
import { RxEyeClosed, RxEyeOpen} from 'react-icons/rx'


const nameRegexp = /^[a-z ,.'-]+$/i;
const emailRegexp =
  // eslint-disable-next-line no-useless-escape
  /^(^[A-Za-z0-9]+[A-Za-z0-9_\-\.]{2,})+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const passRegexp = /^\S+$/;


const initialValues = {
  email: '',
  password: '',
  name: '',
}
const schema = yup.object({
  email: yup.string().email("Invalid email addres").matches(emailRegexp, "Invalid email address").required("Email is required").min(10, "Email must be at least 10 characters")
  .max(63, "Email must be at most 63 characters"),
  password: yup.string()
    .matches(passRegexp, "Password cannot contain spaces")
    .min(7, "Password must be at least 7 characters")
    .max(32, "Password must be at most 32 characters")
    .required("Password is required"),
  name: yup.string()
    .matches(nameRegexp, "Name must contain only English letters")
    .required("Name is required"),
});   


export const RegisterForm = ({onClose}) => {
    const [showPassword, setShowPassword] = useState(false);
//   const dispatch = useDispatch();
  
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // dispatch(
    //   register({
    //     email: values.email,
    //     password: values.password,
    //     name: values.name,
    //     address: values.address,
    //     phone: values.phone
    //   })
    // );
    resetForm(); 
    onClose();
  };
 
  return (
    <Formik 
      validationSchema={schema}
      initialValues={initialValues} 
      onSubmit={handleSubmit}

   >
    {({handleChange, values, errors, touched, setFieldTouched, formikHelpers, setFieldError}) => {

      const handleClickButton = () => {
        
        if ((values.email === '' && values.password === '') && !(touched.email && touched.password)) {
          setFieldTouched("email");
          setFieldTouched("password");
          return;
        }
        
        //перевірка чи є електронка в БД

        // if (errors.email || errors.password) return

        // checkEmail(values.email).then((res) => setisLastStep(true)).catch(error => {
        //   setFieldError('email', "The email is already in use")
        // })
        
      }

     return (
     <FormStyled autoComplete='off' >
        <FormTitle>Create your account</FormTitle>
        <InputContainer>
            <InputBox>
               <FieldStyled type="email" name="email" placeholder='Email'/>
               <ErrorMessageStyled name="email" component="p"/>
            </InputBox>
            <InputBox>
              <FieldStyled type={showPassword ? "text" : "password"}  name="password" placeholder='Password'  autoComplete='off'/>
              <ShowPassword onClick={() => setShowPassword(!showPassword)}>{showPassword ? <RxEyeOpen size={18} /> : <RxEyeClosed size={18}/> }</ShowPassword>
              < ErrorMessageStyled name="password" component="p"/>
            </InputBox>
            <InputBox>
              <FieldStyled type="text" name="name" placeholder='Name' />
              <ErrorMessageStyled name="name" component="p"/> 
            </InputBox>
        </InputContainer>
        <Button type="submit">Register</Button>
     </FormStyled>
      )}}
   </Formik>)
};

