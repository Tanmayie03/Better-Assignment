import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "../utils/validationSchemas";

const LoginForm: React.FC = () => {
  const rememberedEmail = localStorage.getItem("rememberedEmail") || "";
  const rememberedPassword = localStorage.getItem("rememberedPassword") || "";

  return (
    <div className="p-6 rounded-md shadow-md bg-gray-50 w-96">
      <h2 className="mb-6 text-2xl font-bold text-center text-blue-500">
        Login
      </h2>
      <Formik
        initialValues={{
          email: rememberedEmail,
          password: rememberedPassword,
          rememberMe: !!rememberedEmail,
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { resetForm }) => {
          if (values.rememberMe) {
            localStorage.setItem("rememberedEmail", values.email);
            localStorage.setItem("rememberedPassword", values.password);
          } else {
            localStorage.removeItem("rememberedEmail");
            localStorage.removeItem("rememberedPassword");
          }
          alert("Login Successful");
          resetForm();
        }}>
        <Form className="space-y-4">
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
              name="email"
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
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-sm text-red-500"
            />
          </div>

          <div className="flex items-center">
            <Field
              type="checkbox"
              name="rememberMe"
              className="w-4 h-4 text-blue-600"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
