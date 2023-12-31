import { useEffect, useRef, useState } from 'react'
import style from './header.module.scss'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { RiShoppingBasket2Fill } from 'react-icons/ri'
import { Dropdown, Space, Menu, ConfigProvider, Badge } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import Link from 'next/link'
import axios from 'axios'
import Cookies from 'js-cookie'
// 導入登入鉤子
import { useAuthJWT } from '@/hooks/use-auth-jwt'
import Image from 'next/image'
// 購物車相關
import { useTicketCart } from '@/hooks/use-cart-ticket'
import { useCourseCart } from '@/hooks/use-cart-course'
import { useCart } from '@/hooks/use-cart'

export default function Header() {
  // sidebar開關
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  // sidebar
  const sidebarRef = useRef(null)
  // sidebar外點擊事件
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  //登入相關 取得全站authJWT資料
  const { authJWT, setAuthJWT } = useAuthJWT()
  const userData = authJWT.userData
  // sidebar登入登出用
  const isAuth = authJWT.isAuth
  // 登出
  async function logoutCleanCookies() {
    const res = await axios.post(
      'https://nodal-buckeye-404908.de.r.appspot.com/api/member/logout',
      { accessToken: Cookies.get('accessToken') },
      {
        withCredentials: true, // save cookie in browser
      }
    )

    console.log(res.data)

    if (res.data.message === 'success') {
      Cookies.set('user', res.data.user)
      Cookies.remove('accessToken')
      setAuthJWT({
        isAuth: false,
        userData: {
          account: '',
          address: '',
          birthday: '',
          created_at: '',
          email: '',
          gender: '',
          id: 0,
          name: '',
          phone: '',
          photo: '',
          status: '',
          iat: 0,
          exp: 0,
        },
      })
    }
  }

  const dropdown2Items = [
    {
      key: '3',
      label: '課程 Course',
      path: '/product/course',
    },
    {
      key: '4',
      label: '講師 Teacher',
      path: '/figure/teacher',
    },
  ]

  const menu2 = (
    <Menu>
      {dropdown2Items.map((item) => (
        <Menu.Item key={item.key}>
          <Link href={item.path} className={`${style.dropdownDesign}`}>
            {item.label}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )

  const menu3 = (
    <Menu className="d-flex flex-column">
      <Link href="/member" className={`${style.memberDropdown}`}>
        會員中心
      </Link>
      <Link
        href="/member/logout"
        className={`${style.memberDropdown} `}
        onClick={logoutCleanCookies}
      >
        會員登出
      </Link>
    </Menu>
  )
  // 計算購物車總數量
  const [totalproduct, setTotalproduct] = useState(0)
  const { ticketItems } = useTicketCart() //取得購物車活動內容
  const { courseCart } = useCourseCart() //取得購物車課程內容
  const { items } = useCart() //取得購物車專輯內容
  const newTotal = ticketItems.length + courseCart.length + items.length
  useEffect(() => { //當購物車內容有變動時，重新設定總數量狀態
    setTotalproduct(newTotal)
  }, [newTotal])

  return (
    <>
      <div className={`container-fluid bg-light ${style.header}`}>
        <Link href="/">
          <img src="/header/logo.svg" alt="Logo" />
        </Link>
        <div className={`d-flex ${style.headerNav} d-none d-sm-block`}>
          <div className="nav">
            {/* PC版navbar */}
            <ul>
              <ConfigProvider
                theme={{
                  token: {
                    motionDurationMid: '0.1s',
                    // controlItemBgHover: 'red',
                    colorBgElevated: '#181818',
                    colorText: '#fff',
                  },
                }}
              >
                <li>
                  <Link href="/product/album" className=" h3">
                    精選專輯 Album
                  </Link>
                </li>
              </ConfigProvider>
              <li>
                <Link href="/ranking" className=" h3">
                  專輯排行 Charts
                </Link>
              </li>
              <li>
                <Link
                  href="/product/event-management
"
                  className=" h3"
                >
                  音樂祭票 Tickets
                </Link>
              </li>
              <ConfigProvider
                theme={{
                  token: {
                    motionDurationMid: '0.1s',
                    colorBgElevated: '#181818',
                    colorText: '#fff',
                  },
                }}
              >
                <li>
                  <Link href="/product/course" className=" h3">
                    精選課程 Course
                  </Link>
                </li>
              </ConfigProvider>
            </ul>
          </div>
        </div>
        <div className={`${style.login_ShoppingCart_Icon}`}>
          <ul>
            {/* 會員登入 */}
            <li className={style.username}>
              {authJWT.isAuth ? (
                <span className={`h3 text-info`}>歡迎，{userData.name}</span>
              ) : (
                <Link href="/member/login" className={`h3 ${style.navBtn}`}>
                  尚未登入
                </Link>
              )}
            </li>
            {authJWT.isAuth ? (
              <li className="d-none d-sm-block">
                <ConfigProvider
                  theme={{
                    token: {
                      motionDurationMid: '0.1s',
                      // controlItemBgHover: '#181818',
                      colorBgElevated: '#181818',
                      colorText: '#fff',
                    },
                  }}
                >
                  <li>
                    <Dropdown overlay={menu3} placement="bottomRight">
                      <Space>
                        <DownOutlined style={{ color: 'white' }} />
                      </Space>
                    </Dropdown>
                  </li>
                </ConfigProvider>
              </li>
            ) : (
              ''
            )}
            {authJWT.isAuth ? (
              <ConfigProvider
                theme={{
                  token: {
                    motionDurationMid: '0.1s',
                    // controlItemBgHover: '#181818',
                    colorBgElevated: '#181818',
                    colorText: '#fff',
                  },
                }}
              >
                <Link href="/dashboard/profile" className="text-info">
                  <li>
                    <div className="d-flex">
                      <div className={style.avatar}>
                        {userData.photo ? (
                          <Image
                            src={`/member/image/${userData.photo}`}
                            alt={`${userData.name}`} // alt属性
                            width={40} // 图片宽度
                            height={40} // 图片高度
                          />
                        ) : (
                          <Image
                            src="/member/image/default.png"
                            width={60}
                            height={60}
                            alt="Oasis"
                          />
                        )}
                      </div>
                    </div>
                  </li>
                </Link>
              </ConfigProvider>
            ) : (
              <div className={style.avatar}>
                <li>
                  <Link href="/member/login" fontSize={40}>
                    <FaUserCircle />
                  </Link>
                </li>
              </div>
            )}
            {/* 購物車 */}
            <Link href={`${isAuth ? "/product/cart" : "/member/login"}`}>
              <li>
                <Badge count={totalproduct}>
                  <RiShoppingBasket2Fill className="text-info h1" />
                </Badge>
              </li>
            </Link>
            <li className="d-sm-none">
              {/* 漢堡 */}
              <AiOutlineMenu onClick={toggleMenu} />
            </li>
          </ul>
        </div>
      </div>

      {/* 手機板navbar */}
      <ul
        className={`${style.mobileNav}  ${isOpen ? style.active : ''
          } d-sm-none`}
        ref={sidebarRef}
      >
        <div className={style.logo}>
          <Link href="">
            <img src="/header/logo.svg" alt="Logo" />
          </Link>
          <AiOutlineClose
            className="text-info"
            style={{ fontSize: '25px' }}
            onClick={toggleMenu}
          />
        </div>
        <div>
          <li>
            <Link href="/product/album " onClick={toggleMenu}>
              <span className="text-info h3">專輯</span>
            </Link>
          </li>
          <li>
            <Link href="/ranking" className="text-info h3" onClick={toggleMenu}>
              排行榜
            </Link>
          </li>
          <li>
            <Link href="/product/event-management" className="text-info h3" onClick={toggleMenu}>
              音樂祭購票
            </Link>
          </li>
          <li>
            <Link href="/product/course" onClick={toggleMenu}>
              <span className="text-info h3">課程</span>
            </Link>
          </li>
          {isAuth ?
            <>
              <li>
                <Link href="/member" className="text-info h3" onClick={toggleMenu}>
                  會員中心
                </Link>
              </li>
              <li>
                <Link
                  href="/member/logout"
                  className="text-info h3"
                  onClick={() => { toggleMenu; logoutCleanCookies }}
                >
                  會員登出
                </Link>
              </li>
            </> :
            <li>
              <Link href="/member/login"
                className="text-info h3" onClick={toggleMenu}>會員登入</Link>
            </li>}
        </div>
      </ul>
    </>
  )
}
