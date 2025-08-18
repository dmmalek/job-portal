import Lottie from "lottie-react";
import registerAnimation from "../assets/web-address-registration.json";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 px-4 py-6 h-screen">
        {/* Animation */}
        <div className="w-48 sm:w-64 md:w-80 flex-shrink-0">
          <Lottie animationData={registerAnimation}></Lottie>
        </div>

        {/* Login Card */}
        <div className="card bg-base-100 w-full max-w-lg shadow-xl">
          <form onSubmit={handleSignIn} className="card-body">
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
        </div>
      </div>
    </div>
  );
};

export default Register;
