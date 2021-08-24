import React from 'react';
import Logo from '../../static/images/logo.svg';
import X from '../../assets/zarebin_image.gif';

const Home = () => {
  return (
    <div>
      <div>Home component</div>
      <button onClick={() => console.log('Hi there')}> Saampllle </button>
      <img src={Logo} />
      <img width={300} src={X} />
    </div>
  );
};

export default Home;
