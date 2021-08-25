import React from 'react';
import Logo from '../../static/images/logo.svg';
import X from '../../assets/zarebin_image.gif';
import SharedComponent from "website2/SharedComponent";


const Home = () => {
  return (
    <div>
      <div>Home component</div>
        <SharedComponent />
        <button onClick={() => console.log('Hi there')}> Saa </button>
      <img src={Logo} />
      <img width={300} src={X} />
    </div>
  );
};

export default Home;
