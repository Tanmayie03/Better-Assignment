import LoginForm from "./components/LoginForm";
import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import "./index.css";
function App() {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 px-8 bg-white lg:gap-12 lg:flex-row">
      <div className="flex flex-col items-center">
        <h1 className="mb-8 text-3xl font-bold text-center text-blue-500">
          Welcome User!
        </h1>
        <img
          src="https://res.cloudinary.com/dy7zpv1ij/image/upload/v1733689250/e77f4aaa-c711-463e-9465-ad34211de887.png"
          className="w-64 lg:w-[400px]"
          alt="Welcome-illustration"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        {isSignUp ? <SignUpForm /> : <LoginForm />}
        <div className="mt-4 text-center">
          {isSignUp ? (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setIsSignUp(false)}
                className="text-blue-500 hover:text-blue-600"
                aria-label="Login form">
                Login
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <button
                onClick={() => setIsSignUp(true)}
                className="text-blue-500 hover:text-blue-600"
                aria-label="Sign Up form">
                Sign Up
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
