import Lottie from "lottie-react";
import registerAnimation from "../assets/web-address-registration.json";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import SocialLogIn from "../shared/SocialLogIn";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const passwordValidation = passwordRegex.test(password);
    if (!passwordValidation) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters long, contain at least one uppercase, one lowercase, and one number!",
      });
    }

    createUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Register SuccessFull!",
            icon: "success",
            draggable: true,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 px-4 py-6 h-screen">
        {/* Animation */}
        <div className="w-48 sm:w-64 md:w-80 flex-shrink-0">
          <Lottie animationData={registerAnimation}></Lottie>
        </div>

        {/* Login Card */}
        <div className="card bg-base-100 w-full max-w-lg shadow-xl">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
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

              <button className="btn btn-neutral w-full mt-4">Sign Up</button>
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

export default Register;
