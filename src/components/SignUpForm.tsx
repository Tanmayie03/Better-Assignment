import { ErrorMessage, Field, Form, Formik } from "formik";
import { signUpValidationSchema } from "../utils/validationSchemas";
import { useState } from "react";
import PasswordStrength from "./PasswordStrength";

const SignUpForm: React.FC = () => {
  const [password, setPassword] = useState("");
  return (
    <div className="p-6 rounded-md shadow-md bg-gray-50 w-96 ">
      <h1 className="mb-6 text-2xl font-bold text-center text-blue-500">
        Sign Up
      </h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={signUpValidationSchema}
        onSubmit={(values, { resetForm }) => {
          alert("Sign up Successfully");
          resetForm();
        }}>
        {({ setFieldValue }) => (
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 ">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="w-full px-3 py-2 mt-1 border rounded-md "
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 ">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 mt-1 border rounded-md "
              />
              <ErrorMessage
                name="Email"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700 ">
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className="w-full px-3 py-2 mt-1 border rounded-md "
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("password", e.target.value);
                  setPassword(e.target.value);
                }}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <PasswordStrength password={password} />
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignUpForm;
