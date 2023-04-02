import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SiteLogo from '../assets/logo.png';

const HeaderLogin = (props) => {
  const navigate = useNavigate();

  return (
    <Container className='flex a-center j-between'>
      <div className='logo'>
        <img src={SiteLogo} alt='Site Logo' />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Авторизоваться" : "Войти"}
      </button>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 4rem;
  .logo {
    img{
      height: 5rem;
    }
  }
  button{
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border:none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;
export default HeaderLogin