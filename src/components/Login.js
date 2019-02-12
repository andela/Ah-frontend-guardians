import React from 'react';

const Login = () => (
  <form>
    <label>
      Email:
      <input type="text" id="email" placeholder="Email" />
    </label>
    <br />
    <label>
      Password:
      <input type="text" id="password" placeholder="Password" />
    </label>
    <br />
    <input type="submit" value="Login" />
  </form>
);

export default Login;
