import { useHistory } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import "./styles.css";
import "./index.css";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup
} from "firebase/auth";
export function Register(props) {
  const history = useHistory();
  const handleSignInGoogle = (event) => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    signInWithPopup(props.auth, provider)
      .then((result) => {
        console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        let user = result.user;
        props.onUserChange(user);
        history.push("/name");
      })
      .catch((error) => {
        console.log("signInWithPopup error: ", error);
      });
    event.preventDefault();
  };
  const handleSignInFacebook = (event) => {
    const provider = new FacebookAuthProvider();
    provider.addScope("user_birthday");

    signInWithPopup(props.auth, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        let user = result.user;
        props.onUserChange(user);
        history.push("/name");
      })
      .catch((error) => {
        console.log("signInWithPopup error: ", error);
      });
    event.preventDefault();
  };

  return (
    <div className="registerBox">
      <img src="Register.png" alt="register" width={300} />
      <br />
      <Col span={24}>
        <Button type="ghost" onClick={handleSignInGoogle} className="">
          <GoogleOutlined /> Sign in with Google
        </Button>
      </Col>
      <br />
      <Col span={24}>
        <Button type="ghost" onClick={handleSignInFacebook} className="">
          <FacebookOutlined /> Sign in with Facebook
        </Button>
      </Col>
    </div>
  );
}
