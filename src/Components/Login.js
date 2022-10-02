import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/login';

const Login = () => {
  const [username, setUsername] = React.useState('dog');
  const [password, setPassword] = React.useState('dog');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ display: 'block' }} htmlFor="username">
        Usuário
      </label>
      <input
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        id="username"
        type="text"
      />
      <label style={{ display: 'block' }} htmlFor="password">
        Senha
      </label>
      <input
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        id="password"
        type="password"
      />
      <button>Enviar</button>
    </form>
  );
};

export default Login;
