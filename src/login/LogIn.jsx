import Lottie from "lottie-react";
import signInAnimation from "../assets/Login.json";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import SocialLogIn from "../shared/SocialLogIn";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user.email;
        if (result.user) {
          // return navigate(location.state);
          const redirectTo = location.state || "/";
          navigate(redirectTo);
          axios
            .post("http://localhost:5000/jwt", user, { withCredentials: true })
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 px-4 py-6 h-screen">
        {/* Animation */}
        <div className="w-48 sm:w-64 md:w-80 flex-shrink-0">
          <Lottie animationData={signInAnimation}></Lottie>
        </div>

        {/* Login Card */}
        <div className="card bg-base-100 w-full max-w-lg shadow-xl">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <fieldset className="fieldset space-y-2">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
                autoComplete="off"
              />

              <div className="text-sm">
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button className="btn btn-neutral w-full mt-4">Login</button>
            </fieldset>
          </form>
          <div>
            <SocialLogIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
