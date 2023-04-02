import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundLogin from '../components/BackgroundLogin';
import HeaderLogin from '../components/HeaderLogin';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/fairbase-config';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const handleSignIn = async () => {
        try{
            const {email, password} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
        }catch (err) {
            console.log(err);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
      });

    return (
        <Container showPassword={showPassword}>
            <BackgroundLogin />
            <div className='content'>
                <HeaderLogin login />
                <div className='body flex column a-center j-center'>
                    <div className='text flex column'>
                        <h1>Неограниченные фильмы, телешоу и многое другое</h1>
                        <h4>Смотрите где угодно. Отмените в любое время</h4>
                        <h6>
                            Готовы смотреть?
                            Введите свой адрес электронной почты, чтобы создать ящик или возобновить членство
                        </h6>
                    </div>
                    <div className='form'>
                        <input
                            type='email'
                            placeholder='Email'
                            name='email'
                            value={formValues.email}
                            onChange={(evt) =>
                                setFormValues({
                                    ...formValues,
                                    [evt.target.name]: evt.target.value,
                                })
                            }
                        />
                        {
                            showPassword && (
                                <input
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    value={formValues.password}
                                    onChange={(evt) =>
                                        setFormValues({
                                            ...formValues,
                                            [evt.target.name]: evt.target.value,
                                        })
                                    }
                                />
                            )}
                        {!showPassword && (
                            <button onClick={() => setShowPassword(true)}>Начать</button>
                        )}
                    </div>
                    <button onClick={handleSignIn}>Войти</button>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 1.5rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;
export default Signup