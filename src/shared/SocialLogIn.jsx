import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import googleIcon from "../assets/icon/google.png";

const SocialLogIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="mx-7 my-2">
      <div className="divider">OR continue with</div>
      <button onClick={handleGoogleLogIn} className="btn w-full p-2">
        <img className="w-6" src={googleIcon} alt="google" /> Sign In With
        Google
      </button>
    </div>
  );
};

export default SocialLogIn;
