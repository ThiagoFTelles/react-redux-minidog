import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/login';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = React.useState('dog');
  const [password, setPassword] = React.useState('dog');
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <form className="anime" onSubmit={handleSubmit}>
      <label
        className={styles.label}
        style={{ display: 'block' }}
        htmlFor="username"
      >
        Usuário
      </label>
      <input
        className={styles.input}
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        id="username"
        type="text"
      />
      <label
        className={styles.label}
        style={{ display: 'block' }}
        htmlFor="password"
      >
        Senha
      </label>
      <input
        className={styles.input}
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        id="password"
        type="password"
      />
      <button className={styles.button}>Enviar</button>
    </form>
  );
};

export default Login;
