import React, { useEffect, useState } from 'react'
import BreadCrumb from '../share/breadcrumb'
import { Space, Table, Avatar, ConfigProvider, Statistic, Skeleton } from 'antd'
// import Swiper core and required modules
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import style from './ranking.module.scss'
import Audition from './audition'
import { HeartFilled } from '@ant-design/icons'
import Link from 'next/link'

export default function Ranking() {
  // API 抓回來的資料 <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
  const [trackinfo, setTrackinfo] = useState([])
  const [url, setUrl] = useState('https://nodal-buckeye-404908.de.r.appspot.com/api/ranking/')
  // 需要啟動google啟動資料庫才可用此函示
  // const getTrackinfo = async () => {
  //   try {
  //     const res = await fetch(url)
  //     // const res = await fetch('https://nodal-buckeye-404908.de.r.appspot.com/api/ranking/pop')
  //     // console.log(res)
  //     const data = await res.json()
  //     // console.log(data)
  //     setTrackinfo(data)
  //   } catch (e) {
  //     alert('伺服器連線失敗')
  //     console.error(e)
  //   }
  // }
  // console.log(trackinfo)
  const rankingData = [
    {
      "id": 70,
      "title": "The Eminem Show",
      "artist": "Eminem",
      "images": "R-250771-1672170001-7863.jpg",
      "collectAccount": 11,
      "audioSource": "BeastieBoys"
    },
    {
      "id": 84,
      "title": "The Marshall Mathers LP",
      "artist": "Eminem",
      "images": "R-142270-1408878908-2467.jpg",
      "collectAccount": 10,
      "audioSource": "MarshallMathers"
    },
    {
      "id": 60,
      "title": "Licensed to Ill",
      "artist": "Beastie Boys",
      "images": "R-708787-1202592368.jpg",
      "collectAccount": 9,
      "audioSource": "TORATORAW"
    },
    {
      "id": 177,
      "title": "Unravel",
      "artist": "TK From 凛として時雨",
      "images": "R-5925711-1406489072-8683.jpg",
      "collectAccount": 8,
      "audioSource": "BeastieBoys"
    },
    {
      "id": 194,
      "title": "Get Over",
      "artist": "Dream",
      "images": "R-2995380-1606312263-7853.jpg",
      "collectAccount": 8,
      "audioSource": "BeastieBoys"
    },
    {
      "id": 238,
      "title": "七転七起",
      "artist": "ナナヲアカリ",
      "images": "R-23991632-1658739052-8689.jpg",
      "collectAccount": 8,
      "audioSource": "BeastieBoys"
    },
    {
      "id": 109,
      "title": "心裡學",
      "artist": "徐佳瑩",
      "images": "R-11894080-1524282465-8964.jpg",
      "collectAccount": 7,
      "audioSource": "BeastieBoys"
    },
    {
      "id": 183,
      "title": "Answer",
      "artist": "Flow",
      "images": "R-10558023-1499865663-7274.jpg",
      "collectAccount": 7,
      "audioSource": "MarshallMathers"
    },
    {
      "id": 158,
      "title": "Yankee",
      "artist": "米津玄師",
      "images": "R-13043011-1548128371-2690.jpg",
      "collectAccount": 7,
      "audioSource": "BeastieBoys"
    },
    {
      "id": 121,
      "title": "魔杰座",
      "artist": "周杰倫",
      "images": "R-16672764-1609182621-7695.jpg",
      "collectAccount": 7,
      "audioSource": "BeastieBoys"
    }
  ]
  const newData = [
    {
      "id": 238,
      "title": "七転七起",
      "artist": "ナナヲアカリ",
      "images": "R-23991632-1658739052-8689.jpg",
      "collectAccount": 8,
      "audioSource": "https://www.youtube.com/embed/VaAacrLk4gE?si=W1Wkle8J9tu600ko"
    },
    {
      "id": 194,
      "title": "Get Over",
      "artist": "Dream",
      "images": "R-2995380-1606312263-7853.jpg",
      "collectAccount": 8,
      "audioSource": "https://www.youtube.com/embed/VaAacrLk4gE?si=W1Wkle8J9tu600ko"
    },
    {
      "id": 107,
      "title": "期待",
      "artist": "林志穎",
      "images": "R-15757420-1597240316-5228.jpg",
      "collectAccount": 7,
      "audioSource": "https://www.youtube.com/embed/VaAacrLk4gE?si=W1Wkle8J9tu600ko"
    },
    {
      "id": 109,
      "title": "心裡學",
      "artist": "徐佳瑩",
      "images": "R-11894080-1524282465-8964.jpg",
      "collectAccount": 7,
      "audioSource": "https://www.youtube.com/embed/VaAacrLk4gE?si=W1Wkle8J9tu600ko"
    },
    {
      "id": 143,
      "title": "哎呦，不錯哦",
      "artist": "周杰倫",
      "images": "R-14739190-1580643666-9224.jpg",
      "collectAccount": 7,
      "audioSource": "https://www.youtube.com/embed/VaAacrLk4gE?si=W1Wkle8J9tu600ko"
    },
    {
      "id": 45,
      "title": "Fly",
      "artist": "Dixie Chicks",
      "images": "R-927614-1451595365-4438.jpg",
      "collectAccount": 7,
      "audioSource": "https://www.youtube.com/embed/VaAacrLk4gE?si=W1Wkle8J9tu600ko"
    },
    {
      "id": 158,
      "title": "Yankee",
      "artist": "米津玄師",
      "images": "R-13043011-1548128371-2690.jpg",
      "collectAccount": 7,
      "audioSource": "https://www.youtube.com/embed/VaAacrLk4gE?si=W1Wkle8J9tu600ko"
    },
    {
      "id": 155,
      "title": "Stray Sheep",
      "artist": "米津玄師",
      "images": "R-15728633-1596700784-4995.jpg",
      "collectAccount": 7,
      "audioSource": "https://www.youtube.com/embed/VaAacrLk4gE?si=W1Wkle8J9tu600ko"
    },
    {
      "id": 75,
      "title": "Falling Into You",
      "artist": "Celine Dion",
      "images": "R-1069960-1548453366-3129.jpg",
      "collectAccount": 7,
      "audioSource": "https://www.youtube.com/embed/VaAacrLk4gE?si=W1Wkle8J9tu600ko"
    },
    {
      "id": 121,
      "title": "魔杰座",
      "artist": "周杰倫",
      "images": "R-16672764-1609182621-7695.jpg",
      "collectAccount": 7,
      "audioSource": "https://www.youtube.com/embed/VaAacrLk4gE?si=W1Wkle8J9tu600ko"
    }
  ]
    useEffect(() => {
      setTrackinfo(rankingData)
  }, [])
  const getTrackinfo = () => { setTrackinfo(newData) }




  //原本的樣子 image: `/product/album/R-18911899-1622164711-5894.jpg`,
  // 對trackinfo的image加上前綴
  const albumPhotoPrefix = '/product/album/'
  const updatedTrackInfo = trackinfo.map((track) => ({
    ...track,
    images: `${albumPhotoPrefix}${track.images}`,
  }))

  const columns = [
    {
      title: <div className="text-center h4">名次</div>,
      dataIndex: 'id',
      key: 'id',
      render: (text, record, index) => (
        <>
          <div className="text-center">{index + 1}</div>
        </>
      ),
      width: '5rem',
    },
    {
      title: <div className="text-center h4">專輯</div>,
      dataIndex: 'album',
      key: 'album',
      width: '10rem',
      render: (_, record) => (
        <>
          <div className="d-flex">
            <div>
              <Space className="mb-3">
                <Avatar
                  size={{
                    sm: 10,
                    xxl: 100,
                  }}
                  className="bg-white"
                  // 專輯圖片位置
                  src={record.images}
                  alt={'XXX專輯圖片'}
                  shape="square"
                />
              </Space>
            </div>
            <div className="ps-3 d-flex flex-column justify-content-evenly">
              <Link href={`product/album/${record.id}`} className="h3">
                {record.title}
              </Link>
              <h5>{record.artist}</h5>
            </div>
          </div>
        </>
      ),
    },
    {
      title: <div className="text-center h4">收藏數</div>,
      dataIndex: 'audition',
      key: 'audition',
      width: '5rem',
      className: 'd-none d-sm-block align-middle', // 添加到table中收藏數，使其手機板不會顯示
      render: (_, record) => (
        <>
          {/* 收藏數 */}
          <div className="text-center my-4 py-3">
            <Statistic
              value={record.collectAccount}
              prefix={<HeartFilled className="px-2" />}
            />
          </div>
        </>
      ),
    },
    {
      title: <div className="text-center h4">試聽</div>,
      dataIndex: 'audition',
      key: 'audition',
      width: '5rem',

      render: (_, record) => (
        <>
          {' '}
          {/* 播放按鍵 */}
          <div className="text-center ">
            <div>
              <Audition audioUrl={record.audioSource} />
            </div>
          </div>
        </>
      ),
    },
  ]

  return (
    <>
      {/* 主畫面 */}
      <div className={`bg-success container`}>
        {/* 麵包屑 */}
        <div className="breadCrumbs ">
          <BreadCrumb />
        </div>
        {/* 標題 */}
        <div className="text-info m-5">
          <h1 className="text-center">站內排行榜</h1>
        </div>
        {/* 排行分類 */}
        <div>
          <Swiper
            className={`px-5 mb-5 ${style.swiperOutside}`}
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 320px
              768: {
                slidesPerView: 4,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide
              className="btn btn-secondary text-info"
              onClick={() => {
                setUrl('https://nodal-buckeye-404908.de.r.appspot.com/api/ranking/')
                setTrackinfo(rankingData)
              }}
            >
              <h3 className="m-0">總排行</h3>
            </SwiperSlide>
            <SwiperSlide
              className="btn btn-secondary text-info"
              onClick={() => {
                setUrl('https://nodal-buckeye-404908.de.r.appspot.com/api/ranking/pop')
                getTrackinfo()
              }}
            >
              <h3 className="m-0">流行音樂</h3>
            </SwiperSlide>
            <SwiperSlide
              className="btn btn-secondary text-info"
              onClick={() => {
                setUrl('https://nodal-buckeye-404908.de.r.appspot.com/api/ranking/rock')
                getTrackinfo()
              }}
            >
              <h3 className="m-0">搖滾音樂</h3>
            </SwiperSlide>
            <SwiperSlide
              className="btn btn-secondary text-info"
              onClick={() => {
                setUrl('https://nodal-buckeye-404908.de.r.appspot.com/api/ranking/hiphop')
                getTrackinfo()
              }}
            >
              <h3 className="m-0">嘻哈音樂</h3>
            </SwiperSlide>
            <SwiperSlide
              className="btn btn-secondary text-info"
              onClick={() => {
                setUrl('https://nodal-buckeye-404908.de.r.appspot.com/api/ranking/soul')
                getTrackinfo()
              }}
            >
              <h3 className="m-0 ">靈魂音樂</h3>
            </SwiperSlide>
            <SwiperSlide
              className="btn btn-secondary text-info"
              onClick={() => {
                setUrl('https://nodal-buckeye-404908.de.r.appspot.com/api/ranking/country')
                getTrackinfo()
              }}
            >
              <h3 className="m-0">鄉村音樂</h3>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* 表 */}
        <div className={style.outerBox}>
          <div className={style.table}>
            <ConfigProvider
              theme={{
                token: {
                  colorBgContainer: '#22333B',
                  colorText: '#fff',
                  fontSize: '2rem',
                  borderColor: 'red',
                },
              }}
            >
              {trackinfo.length == 0 ? (
                <Skeleton />
              ) : (
                <Table
                  scroll={{ x: true }}
                  pagination={false}
                  columns={columns}
                  dataSource={updatedTrackInfo}
                  shape="square"
                />
              )}
            </ConfigProvider>
          </div>
        </div>
      </div>
    </>
  )
}
