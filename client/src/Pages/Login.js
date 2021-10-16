import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = ({ history }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user, history);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default Login;
// const ConnectedLogin = (props) => {
//   <AuthConsumer>{(auth) => <Login {...props} {...auth} />}</AuthConsumer>;
// };
// export default ConnectedLogin;
