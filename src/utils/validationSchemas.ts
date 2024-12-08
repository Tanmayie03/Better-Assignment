import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(8, "Mininmum 8 characters ")
    .required("Password is required"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});
