import React, { useEffect, useState } from 'react'
import styles from './[pid].module.scss'
import axios from 'axios'
import { useRouter } from 'next/router'
import ProductDetailsPage from '@/components/share/product/product-details-page'
import CustomSwiper from '@/components/share/product/DetailPage/swiper/swiper'
import CardComponent2 from '@/components/product/event-management/activity-CardComponent/eventCard-2/cards'
import CardComponent3 from '@/components/product/event-management/activity-CardComponent/eventCard-3/cards'
import CardComponent4 from '@/components/product/event-management/activity-CardComponent/eventCard-4/cards'
import CardComponent5 from '@/components/product/event-management/activity-CardComponent/eventCard-5/cards'
import CardComponent6 from '@/components/product/event-management/activity-CardComponent/eventCard-6/cards'
import Image from 'next/image'
import Count from '@/components/product/album/count/count'
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
import HeartDefaultIcon from '@/public/product/album/icon/heart-default-icon.svg'
import GoogleMyMap from '@/components/product/event-management/googleMyMap/googleMyMap'
import { useTicketCart } from '@/hooks/use-cart-ticket'

// 最愛按鈕
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import Cookies from 'js-cookie'
import { useAuthJWT } from '@/hooks/use-auth-jwt'

function PageEvent() {

  const eventDefaultDatas = [
    {
      "id": 1,
      "images": "酷玩樂團2023高雄演唱會.jpeg",
      "names": "Coldplay： Music Of The Spheres World Tour - delivered by DHL 酷玩樂團2023高雄演唱會",
      "dates": "2023-11-11",
      "location_id": 1,
      "price": 1500,
      "statuss": 1,
      "launch_date": "2023-07-13",
      "descriptions": "Coldplay： Music Of The Spheres World Tour - delivered by DHL 酷玩樂團2023高雄演唱會11/12緊急加場還記得2017年那一夜在大雨中的感動與激情嗎?睽違六年!他們回來了!史上最暢銷的樂團之一 英倫搖滾神團Coldplay首度降臨高雄全球最受矚目 前所未見 以永續和減碳為訴求的話題巡演讓你的每一個跳動與尖叫都成為音樂宇宙中的能量2023年11月11日、12日 高雄國家體育場 與Coldplay相約星際漫遊",
      "longitude": 22.70333902,
      "latitude": 120.2944975,
      "location_name": "高雄國家體育場 (世運主場館)",
      "address": "高雄市左營區世運大道100號",
      "region_id": 3,
      "region": "南部"
    },
    {
      "id": 2,
      "images": "Post Malone.jpeg",
      "names": "Post Malone：If Y’all Weren’t Here， I’d Be Crying Tour in Taipei",
      "dates": "2023-09-20",
      "location_id": 2,
      "price": 2300,
      "statuss": 1,
      "launch_date": "2023-07-13",
      "descriptions": "Post Malone: If Y’all Weren’t Here, I’d Be Crying Tour in Taipei\n\n最狂串流天王 巨星馬龍 Post Malone 首次降臨台灣！\n\n以無數洗腦神曲<Circles>、<Sunflower>等橫掃全球各大排行\n\n今年最大型的趴踢就在這裡\n\n不來，真的會哭！",
      "longitude": 25.05230807,
      "latitude": 121.5986373,
      "location_name": "臺北流行音樂中心表演廳",
      "address": "台北市南港區市民大道八段99號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 3,
      "images": "西城男孩2023台北演唱會.jpeg",
      "names": "Westlife The Wild Dreams Tour Taipei西城男孩2023台北演唱會",
      "dates": "2023-11-15",
      "location_id": 2,
      "price": 2800,
      "statuss": 1,
      "launch_date": "2023-07-13",
      "descriptions": "Westlife The Wild Dreams Tour Taipei西城男孩2023台北演唱會\n\n\n西城男孩台北安可場11月狂野登場！\n\n \n\n繼2023年初的高雄完售場\n\n今年底，西城男孩將帶著首首金曲重返台北\n\n連續兩晚，台北流行音樂中心\n\n再次回味所有意猶未盡的感動！",
      "longitude": 25.05230807,
      "latitude": 121.5986373,
      "location_name": "臺北流行音樂中心表演廳",
      "address": "台北市南港區市民大道八段99號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 4,
      "images": "Dean Lewis.jpeg",
      "names": "Dean Lewis The Future Is Bright World Tour 2023 in Taipei",
      "dates": "2023-08-27",
      "location_id": 3,
      "price": 2300,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "Dean Lewis The Future Is Bright World Tour 2023 in Taipei     澳洲情歌王子Dean Lewis將帶著充滿渲染力的嗓音首次來台  憑藉成名單曲<Waves>及破億催淚神曲<Be Alright>橫掃樂壇  八月就讓Dean用最真摯動人的療傷系情歌唱進你我心坎",
      "longitude": 25.04542076,
      "latitude": 121.5309776,
      "location_name": "CLAPPER STUDIO (三創生活園區5F)",
      "address": "台北市中正區市民大道三段2號5 樓",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 5,
      "images": "Nightmares ＆ Daydreams.jpeg",
      "names": "Against The Current： Nightmares ＆ Daydreams 2023 World Tour",
      "dates": "2023-10-13",
      "location_id": 4,
      "price": 1800,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "Against The Current: Nightmares & Daydreams 2023 World Tour  曾四度來台且多次創下票房秒殺佳績的Against The Current  由高顏值實力女主唱Chrissy、鼓手Will Ferri及吉他手Dan Gow三人組成  因疫情而睽違四年終於將在2023年再度踏上台灣  首度於Zepp New Taipei開唱  當過去的美好成為眼前的夢魘  就讓Against The Current的音樂為你蒙住雙眼 給予你勇氣 穿越一切 往前奔跑",
      "longitude": 25.05992424,
      "latitude": 121.4494586,
      "location_name": "Zepp New Taipei (新莊宏匯廣場8F)",
      "address": "新北市新莊區新北大道四段3號8樓",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 6,
      "images": "23_p1oneer_9f78ff184708983f9f76276b6a6fd49f.jpeg",
      "names": "P1HARMONY LIVE TOUR [P1USTAGE H：P1ONEER] IN TAIPEI",
      "dates": "2023-10-04",
      "location_id": 4,
      "price": 3300,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "P1HARMONY LIVE TOUR [P1USTAGE H:P1ONEER] IN TAIPEI  FNC娛樂公司挑戰KPOP男團版圖的最新力作  2020橫空出世 P1Harmony就此誕生  由KEEHO、THEO、JIUNG、INTAK、SOUL、JONGSEOB所組成  以出道電影 P1H : 新世界的開始 展現與眾不同的世界觀和成員的獨特魅力  以強烈的歌曲和舞台吸引全球目光  被時代雜誌選為2021年最受矚目新人韓團之一",
      "longitude": 25.05992424,
      "latitude": 121.4494586,
      "location_name": "Zepp New Taipei (新莊宏匯廣場8F)",
      "address": "新北市新莊區新北大道四段3號8樓",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 7,
      "images": "23_mwam_7de8ab0704c1d5dac905bcd9829dc8ce.jpeg",
      "names": "MAN WITH A MISSION World Tour 2023 ~WOLVES ON PARADE台北場",
      "dates": "2023-09-17",
      "location_id": 4,
      "price": 2500,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "WOOOOOOOOOOOOOOOLVES~~~~   皆さん!!!!  帶著使命感的那群(狼)人，回來了!  正在瘋狂地進行世界巡迴的狼人樂團，在今年初接受媒體訪問時提到，四年來第一次的世界巡迴，團員們認為2023年最重要的mission，就是在世界各地舉辦巡迴演唱會，不管是很久沒去的國家，或是初次造訪的國家。所以從年初一直到現在，走過了日本各城市/歐洲/北美洲，終於迎來亞洲巡迴。",
      "longitude": 25.05992424,
      "latitude": 121.4494586,
      "location_name": "Zepp New Taipei (新莊宏匯廣場8F)",
      "address": "新北市新莊區新北大道四段3號8樓",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 8,
      "images": "23_reneliu_a6a70c0cb28138caa59476102df8c1d4.jpeg",
      "names": "2023 劉若英 [ 飛行日 Final Call ] 世界巡迴演唱會 高雄站",
      "dates": "2023-07-16",
      "location_id": 6,
      "price": 800,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "劉若英  [ 飛行日 Final Call ] 2023世界巡迴演唱會 ⌬ 高雄站  時間是用飛的！你還在等嗎？ 想你   就要見到你 高雄   奶茶與你約好了 一起的第一次飛行",
      "longitude": 22.6688989,
      "latitude": 120.3026765,
      "location_name": "高雄巨蛋",
      "address": "高雄市左營區博愛二路757號",
      "region_id": 3,
      "region": "南部"
    },
    {
      "id": 9,
      "images": "kodaline.jpeg",
      "names": "KODALINE LIVE IN ASIA",
      "dates": "2023-07-11",
      "location_id": 4,
      "price": 2100,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "KODALINE LIVE IN ASIA  獨立與主流間最完美的平衡線  2019首場台北演唱會 開賣秒殺  Kodaline 2023年二度來台 用音樂彌補所有你生命中的美好缺憾",
      "longitude": 25.05992424,
      "latitude": 121.4494586,
      "location_name": "Zepp New Taipei (新莊宏匯廣場8F)",
      "address": "新北市新莊區新北大道四段3號8樓",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 10,
      "images": "23_hybs_b07b05ce61924a351eff94418786df2a.jpeg",
      "names": "HYBS Live in Taipei",
      "dates": "2023-09-08",
      "location_id": 4,
      "price": 1600,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "HYBS帶你穿越時光， 踏上一場浪漫又復古的音樂之旅！ Let’s go to the moon, together 2023.7.22(六) 中午12點 療癒開賣",
      "longitude": 25.05992424,
      "latitude": 121.4494586,
      "location_name": "Zepp New Taipei (新莊宏匯廣場8F)",
      "address": "新北市新莊區新北大道四段3號8樓",
      "region_id": 1,
      "region": "北部"
    }]

  const [eventData, seteventData] = useState({})
  // const router = useRouter()
  // const id = router.query.pid // 獲取動態路由參數

  const router = useRouter()
  console.log(router)
  const { asPath } = router
  const pathname = asPath.split('?')[0]
  const paths = pathname.split('/')
  const id = paths[paths.length - 1]
  console.log(id)
  useEffect(() => {
    if (router.isReady) {
      const { pid } = router.query;
      console.log(pid);
      if (pid) {
        const data = eventDefaultDatas.find(item => item.id === parseInt(pid));
        seteventData(data);
      }
      console.log(eventData);
    }
  }, [router]);
  //加入購物車
  const { addTicket } = useTicketCart()
  // console.log(id)
  // 得到目前的網址的路徑
  // const router = useRouter()
  // const { isReady, asPath } = router
  // const pathname = asPath.split('?')[0]

  // useEffect(() => {
  //   if (!router.isReady) return // 確保路由已經準備好

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://nodal-buckeye-404908.de.r.appspot.com/api/product/event-management/${id}`
  //       )
  //       console.log(response.data)
  //       seteventData(response.data)
  //     } catch (error) {
  //       console.error('資料獲取失敗:', error)
  //     }
  //   }

  //   if (id) {
  //     // 確保id存在再進行fetch
  //     fetchData()
  //   }
  // }, [id])
  // 注意這裡，我將id加入到依賴列表中
  // console.log(eventData)

  // 最愛按鈕
  const { authJWT } = useAuthJWT()
  const [like, setLike] = useState(false)

  // const likeClick = () => {
  //   if (!authJWT.isAuth) {
  //     router.push('/member/login')
  //     return false
  //   }
  //   if (like == true) {
  //     removeLike()
  //   } else {
  //     addLike()
  //   }
  //   setLike(!like)
  // }

  async function fetchData(id) {
    try {
      // 抓取此登入使用者的id
      const response = await axios.post(
        'https://nodal-buckeye-404908.de.r.appspot.com/api/favorite/my-favorite/event',
        {
          accessToken: Cookies.get('accessToken'),
        }
      )

      const result = response.data
      const userLike = result.favorites

      console.log(userLike)
      console.log(result)

      const includesValue = userLike.includes(id)
      console.log(includesValue)

      if (includesValue) {
        setLike(true)
      } else {
        setLike(false)
      }
    } catch (error) {
      console.log('error:' + error)
    }
  }

  useEffect(() => {
    if (id != undefined) {
      fetchData(parseInt(id))
    }
  }, [id])

  // const addLike = async () => {
  //   const res = await axios.put(
  //     'https://nodal-buckeye-404908.de.r.appspot.com/api/favorite/' + `event/${id}`,
  //     { accessToken: Cookies.get('accessToken') }
  //   )
  // }
  // const removeLike = async () => {
  //   const res = await axios.put(
  //     'https://nodal-buckeye-404908.de.r.appspot.com/api/favorite/delete/' + `event/${id}`,
  //     { accessToken: Cookies.get('accessToken') }
  //   )
  // }

  const {
    images,
    names,
    launch_date,
    price,
    descriptions,
    dates,
    location_name,
    address,
  } = eventData

  const imageSrc = `/product/event-management/eventBanner/${images}`
  const cards = [
    CardComponent2,
    CardComponent3,
    CardComponent4,
    CardComponent5,
    CardComponent6,
  ]
  const mainContent = (
    <>
      <div className="d-flex flex-column">
        <div className=" flex-grow-1 text-primary ">
          <h2 className=" lh-lg">{names}</h2>
          <h3 className=" lh-lg">{dates}</h3>
          <h3 className=" lh-lg">{location_name}</h3>
          <h3 className=" lh-lg">{address}</h3>
          <h3 className="fw-bold lh-lg">NT${price}</h3>
        </div>
        <div className=" flex-column ">
          <div className="d-flex mt-3 justify-content-center">
            <div className="flex-shirnk-0 d-flex align-items-center me-1">
              <h4>購買數量:</h4>
            </div>
            <div className="flex-grow-1 ">
              <Count></Count>
            </div>
          </div>
          {/* </div> */}
          {/* 1440 */}
          <div className="d-none d-sm-block">
            <div className=" d-flex  justify-content-around  mt-2 mb-2 ms-1 me-1 ">
              <button className="btn btn-primary flex-fill  btn-lg me-2 " onClick={() => {
                addTicket({
                  id: id,
                  price: price,
                  picture: `/product/event-management/eventBanner/${images}`,
                  quantity: 1,
                  name: names,
                })
              }}>
                加入購物車&nbsp;
                <Image src={CartIcon} alt="cart-icon-dark" />
              </button>
              <buttom
                className="btn btn-primary flex-fill  btn-lg "
                // onClick={likeClick}
              >
                加入我的最愛&nbsp;
                {/* <Image src={HeartDefaultIcon} alt="heart-default-icon-dark" /> */}
                {like ? <AiFillHeart /> : <AiOutlineHeart />}
              </buttom>
            </div>
          </div>
          {/* 390 */}
          <div className="d-block d-sm-none">
            <div className=" d-flex  justify-content-around  mt-2 mb-2 ms-1 me-1 row">
              <button className="btn btn-primary flex-fill  btn-lg me-2 col-12 ">
                加入購物車&nbsp;
                <Image src={CartIcon} alt="cart-icon-dark" />
              </button>
              <buttom
                className="btn btn-primary flex-fill  btn-lg col-12 mt-2 "
                // onClick={likeClick}
              >
                加入我的最愛&nbsp;
                {/* <Image src={HeartDefaultIcon} alt="heart-default-icon-dark" />
                 */}
                {like ? <AiFillHeart /> : <AiOutlineHeart />}
              </buttom>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="container">
      <>
        {/* 以下程式碼能正常傳遞 */}
        {!eventData ? (
          <div>123</div>
        ) : (
          <ProductDetailsPage
            imageSrc={imageSrc}
            imageAlt={`event image can not find`}
            mainContentArea={mainContent}
            basicIntroduceTitle="活動介紹"
            basicIntroduceText={descriptions}
            otherIntroductionTitle="活動地點"
            otherIntroductionArea={
              <>
                <>
                  <div className="d-flex justify-content-center">
                    <div className={styles.GoogleMyMap}>
                      <GoogleMyMap
                        embedURL={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${parseFloat(
                          eventData.latitude
                        )},${parseFloat(eventData.longitude)}&zoom=14`}
                      />
                    </div>
                  </div>
                </>
              </>
            }
            trackRecordText="曾經瀏覽過的商品"
            trackRecordSwiperArea={
              <>
                <CustomSwiper
                  cards={cards}
                  slidesPerView={'1'} // 在小於390px的屏幕上只顯示一張卡片
                  className="d-block d-sm-none"
                  onCardClick={(ClickedCard) => {
                    window.location.href = `/product/event-management/${id}`
                  }}
                />
              </>
            }
            recommendText="為您推薦"
            recommendSwiperArea={
              <>
                <CustomSwiper
                  cards={cards}
                  slidesPerView={'2'}
                  onCardClick={(ClickedCard) => {
                    window.location.href = `/product/event-management/${id}`
                  }}
                />
              </>
            }
          />
        )}
      </>
    </div>
  )
}

export default PageEvent

/* <>
  <div className={styles.pageContainer}>
    <DetailSection1 data={eventData} />
    <div className={styles.pageContainer}>
    <div className={styles.breadcrumb}>
      <Breadcrumb />
    </div>
    <div className={styles.flexContainer}>
      <div className={styles.imageBlock}>
        <img
          src="/homePage/fireball.png"
          alt="TopImg"
          className={styles.imageContainer}
        />
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <main className={styles.container}>
            <div className={styles.row}>
              <div className={`${styles.col} mt-2`}>
                <div
                  className={`${styles.card} ${styles.noBorder} ${styles.fontSize16}`}
                >
                  <div className={styles.positionRelative}></div>
                  <div className={styles.cardBody}>
                    <h2 className={`${styles.currency} bold`}>
                      {eventData.names}
                    </h2>
                    <p className={styles.cardTextOne}>
                      {eventData.dates}
                    </p>
                    <p className={styles.cardTextTwo}>
                      {eventData.location_name}
                    </p>
                    <h2 className={`${styles.priceText} bold`}>
                      {eventData.price}
                    </h2>
                  </div>
                  <div className={styles.footer}>
                    <EventCardButton />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
    <DetailSection2
      titleIntroduce="活動介紹"
      introduceStyle="introduceStyle"
      titleIntroduceTwo="活動地點"
      contentDetail={
        <div className="iframeBlock">
          <iframe
            title="Google Map Location"
            src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${parseFloat(
              eventData.latitude
            )},${parseFloat(eventData.longitude)}&zoom=14`}
            className={styles.googleMapBlock}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="eager"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      }
    >
      {eventData.descriptions}
    </DetailSection2>
  </div>
  <DetailSection3 title1="曾經瀏覽過的活動" title2="為您推薦" />
</> */
