import React, { useState, ChangeEvent } from 'react';

const Login = () => {
  const [keyInput, setKeyInput] = useState('');

  const fatch = async () => {
    const HTTP_METHOD = 'POST';
    const API_URL = 'https://api-football-v1.p.rapidapi.com/v3/';
    const request = require('request');

    let options = {
      method: HTTP_METHOD,
      url: API_URL,
      headers: {
        'x-rapidapi-key': keyInput,
      },
    };

    await request(options, function (error: any, response: any, body: any) {
      if (error) throw new Error(error);

      console.log(body);
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyInput(event.target.value);
  };

  const onClick: any = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(fatch());
  };

  return (
    <form>
      <h1>Faça o Login</h1>
      <label htmlFor='key'>
        Coloque sua Chave:
        <input type='text' id='key' value={keyInput} onChange={handleChange} />
      </label>
      <button type='submit' onClick={onClick}>
        Entrar
      </button>
      <h1>Página inicial</h1>
      <p>kljashdkljshdkljashkjdhajkdahjkdhajkdhaskjdh</p>
    </form>
  );
};

export default Login;
