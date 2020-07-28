import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userAction";
export default function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
  }, [userInfo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  return (
    <div className="smartphone">
      <div className="content">
        <div className="form">
          <form className="signup" onSubmit={handleSubmit}>
            <div>
              {loading && <div>loading...</div>}
              {error && <div>{error}</div>}
            </div>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
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
            <button type="submit">register</button>
            <div className="ask2">
              <p>
                Already have an account? <Link to={"/signin"}>signin</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
