import "./CreateAccount.css";
import React,{useState} from "react";
import Button from "../button";
import TextInput from "./TextInput";

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log("Sign Up Details:", { username, email, phone, password });
  };

  return (
    <div className="create-account">
      <h2>Create an account</h2>
      <p>Connect with your friends today!</p>
      <form onSubmit={handleSignUp}>
        <TextInput
          label="Username"
          type="text"
          placeholder="Enter Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          label="Email"
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Phone Number"
          type="text"
          placeholder="Enter Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button buttonText="Sign Up" classes=".button1"/>
      </form>
      <p>Or With</p>
      <div className="loginSocial bg-blue" >
        <img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png" alt="" />
      <Button buttonText="Signup with Facebook" classes=".button1 bg-blue"/>
      </div>
      <div className="loginSocial bg-white">
        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
        <Button buttonText="Signup with Google" classes=".button1 bg-white"/>
      </div>
      
      <p>
        Already have an account? <a href="#">Login</a>
      </p>
    </div>
  );
}

export default CreateAccount;
