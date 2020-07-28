import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signin } from "../../actions/userAction";
import { useSelector, useDispatch } from "react-redux";
export default function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
  }, [userInfo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className="smartphone">
      <div className="content">
        <div className="form">
          <form className="login" onSubmit={handleSubmit}>
            <div>
              {loading && <div>loading...</div>}
              {error && <div>{error}</div>}
            </div>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">login</button>
            <div className="ask2">
              <p>
                New to here ? <Link to={"/signup"}>register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
