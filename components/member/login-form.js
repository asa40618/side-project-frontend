import React, { useState, useEffect } from 'react'
import style from './member-style.module.css'
import { Button } from 'rsuite'
import { FcGoogle } from 'react-icons/fc'
import { PiEyeClosedBold, PiEyeBold } from 'react-icons/pi'
import axios from 'axios'

// 會員通行證用
import { useAuthJWT } from '@/hooks/use-auth-jwt'
import Cookies from 'js-cookie'
// 網址導向用
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function LoginForm() {
  const router = useRouter()
  // 解析通行證內容
  const parseJwt = (token) => {
    const base64Payload = token.split('.')[1]
    const payload = Buffer.from(base64Payload, 'base64')
    return JSON.parse(payload.toString())
  }
  // 宣告狀態

  const [msgErrorHtml, setMsgErrorHtml] = useState('')

  const [formData, setFormData] = useState({
    account: '',
    password: '',
  })
  const { setAuthJWT, authJWT } = useAuthJWT()

  // 密碼顯示
  const [showPassword, setShowPassword] = useState(false)

  // 執行動作

  // 密碼顯示
  function showPasswordClick() {
    setShowPassword(!showPassword)
  }
  // 表單送出
  async function handleSubmit() {
    // console.log(formData)
    // const res = await axios.post(
    //   'https://nodal-buckeye-404908.de.r.appspot.com/api/member/login',
    //   {
    //     // account: 'emma_lee123',
    //     // password: '12345',
    //     ...formData,
    //   },
    //   {
    //     withCredentials: true, // save cookie in browser
    //   }
    // )
    // 取得訊息、通行證
    // console.log(res.data)
    // 解析通行證內容
    // console.log(parseJwt(res.data.accessToken))
    //判斷帳號密碼
    // console.log(typeof res.data.message)
    // if (res.data.message === '帳號密碼錯誤') {
    //   setMsgErrorHtml(res.data.message)
    // } else {
    //   setMsgErrorHtml('')
    // }

    // 設定cookie
    // Cookies.set('accessToken', res.data.accessToken, { expires: 1 })
    // if (res.data.message === 'success') {
    //   setAuthJWT({
    //     isAuth: true,
    //     userData: parseJwt(res.data.accessToken),
    //   })
    // }
    const superAdmin = { account: 'superAdmin', password: '12345' }
    if (
      formData.account === superAdmin.account &&
      formData.password === superAdmin.password
    ) {
      setAuthJWT({
        isAuth: true,
        userData: {
          account: 'superAdmin',
          address: '1234 Main Street, Citytown, COUNTRY',
          birthday: '1985-07-28',
          created_at: '2023-03-22T08:30:00Z',
          email: 'user12345@example.com',
          gender: 'male',
          id: 1,
          name: 'John Doe',
          phone: '+12345678900',
          photo: 'boy_avatar_icon_148455.png',
          status: 'active',
          iat: 1617187200,
          exp: 1617273600,
        },
      })
      return
    }
  }
  // 改變input內容
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  // 點擊送出
  const loginBtnClick = (e) => {
    e.preventDefault()
    handleSubmit()
  }
  if (authJWT.isAuth) {
    router.push('/')
  }
  return (
    <>
      <div className="bg-success p-5">
        <div className=" bg-secondary container">
          <form className="form-member d-flex flex-column align-items-center justify-content-center p-5 text-white">
            <h1 className="mb-5">登入</h1>
            <div className="mb-3">
              {/* <!-- 帳號 --> */}
              <div className="account form-floating">
                <input
                  type="text"
                  className="form-control bg-transparent"
                  id="account"
                  placeholder="帳號"
                  name="account"
                  onChange={handleInputChange}
                />
                <label htmlFor="account">帳號</label>
              </div>
              <div className={`${style.msgError} account-error mb-3`}> </div>
              {/* <!-- 密碼 --> */}
              <div className={`${style.password} form-floating`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control bg-transparent"
                  id="password"
                  placeholder="密碼"
                  name="password"
                  onChange={handleInputChange}
                />
                <label htmlFor="password">密碼</label>
                {/* showPassword圖示 */}
                <span
                  onClick={showPasswordClick}
                  className={`${style.show}`}
                  aria-hidden="true"
                >
                  {showPassword ? <PiEyeBold /> : <PiEyeClosedBold />}
                </span>
              </div>
              <div
                id="msgError"
                style={{ minHeight: 24 }}
                className={`${style.msgError}  mb-3`}
              >
                {msgErrorHtml}
              </div>
              <div className="d-flex justify-content-between">
                <Link
                  className={`${style.link}`}
                  href="/member/forget-password"
                >
                  忘記密碼
                </Link>

                <Link className={`${style.link}`} href="/member/register">
                  註冊
                </Link>
              </div>
            </div>
            <Button
              className="btn btn-primary px-4 mb-3"
              onClick={loginBtnClick}
            >
              登入
            </Button>
            <Button
              className="btn btn-primary px-4 d-none"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <FcGoogle />
              google
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
