import style from './styles/signup.module.scss'

import React, { useRef, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { UserContext } from '../contexts/UserContext'

const Login = () => {
  const router = useRouter()

  const [inputFields] = useState([
    { label: 'Email', ref: useRef(undefined), type: 'text' },
    { label: 'Lösenord', ref: useRef(undefined), type: 'password' },
  ])

  const errorContainer = useRef(undefined)
  const cardContainer = useRef(undefined)
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = async () => {
  }

  return (
    <div className={`${style.signup} ${style.login}`}>
      <div className={style.formContainer}>
        <div className={style.header}>
          <div className={style.lang}>
            <p className={style.active}>Svenska</p>
          </div>
          <div className={style.login}>
            <p>Har du inget konto?</p>
            <Link href='/signup'>
              <a>Skapa konto</a>
            </Link>
          </div>
        </div>
        <div className={style.signupContainer}>
          {inputFields.map(input => {
            return (
              <>
                <input className={style.userInputDetails} ref={input.ref} type={input.type} placeholder={input.label} />
                {errorMessage[input.type]}
              </>
            )
          })}

          <a className={style.create} href='/api/auth/login'>
            Logga in
          </a>

          <div className={style.divider}>
            <div className={style.line}></div>
            <p>ELLER</p>
            <div className={style.line}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
