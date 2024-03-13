import { useEffect, React, useState } from 'react'
import FrameworkLeftRight from '@/components/share/framework/framework-left-right'
import EventAsideContentMoMo from '@/components/share/product/event-management/EventAsideContentMo/EventAsideContentMo'
import RightContent from '@/components/share/product/event-management/FrameworkListPage-right/frameworkListPageRight'
import CardComponent from '@/components/product/event-management/activity-CardComponent/cards'
import Custompagination from '@/components/evaluate/custompagination'
import axios from 'axios'

export default function EventManagement() {
  const perPage = 4
  const [allEvents, setAllEvents] = useState([
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
    }])
  const [selectedEvents, setSelectedEvents] = useState([])
  const [selectedRegion, setSelectedRegion] = useState('全部')
  const [page, setPage] = useState(1)

  const [sortType, setSortType] = useState('dateDesc')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 })
  const handlePriceRangeChange = (min, max) => {
    setPriceRange({ min, max })
  }

  // 排序
  const handleSort = (sortType) => {
    let sortedEvents = [...allEvents]
    switch (sortType) {
      case '日期由新到舊':
        sortedEvents.sort((a, b) => new Date(b.dates) - new Date(a.dates))
        break
      case '日期由舊到新':
        sortedEvents.sort((a, b) => new Date(a.dates) - new Date(b.dates))
        break
      case '價錢由高到低':
        sortedEvents.sort((a, b) => b.price - a.price)
        break
      case '價錢由低到高':
        sortedEvents.sort((a, b) => a.price - b.price)
        break
      default:
        break
    }
    setSelectedEvents(sortedEvents)
  }

  // 接資料

  // useEffect(() => {
  //   axios
  //     .get('https://nodal-buckeye-404908.de.r.appspot.com/api/product/event-management')
  //     .then((response) => {
  //       const products = response.data.products
  //       setAllEvents(products)
  //       console.log(products)
  //       const shuffled = products.sort(() => 0.5 - Math.random())
  //       setSelectedEvents(shuffled.slice(0, 4)) // 取前四項
  //     })
  //     .catch((error) => console.error('Error fetching data:', error))
  // }, [])

  // 日期篩選
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const handleStartDateChange = (date) => {
    setStartDate(date)
    console.log('選取的開始日期:', date)
  }

  const handleEndDateChange = (date) => {
    setEndDate(date)
    console.log('選取的結束日期:', date)
  }

  useEffect(() => {
    let filteredEvents = [...allEvents]

    console.log(startDate, endDate, allEvents, selectedRegion, priceRange)
    // 日期範圍篩選
    if (startDate && endDate) {
      // filteredEvents = filteredEvents.filter(
      //   (event) =>
      //     new Date(event.dates) >= new Date(startDate) &&
      //     new Date(event.dates) <= new Date(endDate)
      // )

      const startTimestamp = Number(new Date(startDate))
      const endTimestamp = Number(new Date(endDate))
      console.log(startTimestamp, endTimestamp)

      filteredEvents = filteredEvents.filter((v) => {
        return (
          Number(new Date(v.dates)) <= endTimestamp &&
          Number(new Date(v.dates)) >= startTimestamp
        )
      })
    }

    // 價錢篩選
    filteredEvents = filteredEvents.filter(
      (event) => event.price >= priceRange.min && event.price <= priceRange.max
    )

    // 地區分類
    if (selectedRegion && selectedRegion !== '全部') {
      filteredEvents = filteredEvents.filter(
        (event) => event.region === selectedRegion
      )
    }

    console.log(filteredEvents)
    setSelectedEvents(filteredEvents)
  }, [startDate, endDate, allEvents, selectedRegion, priceRange])

  const currentEvents = selectedEvents.slice(
    (page - 1) * perPage,
    page * perPage
  )

  const cards = (
    <>
      {currentEvents.map((eventItem, index) => {
        return (
          <div
            className="col-12 col-md-6"
            key={index}
            tabIndex={0}
            role="button"
            onClick={() =>
              (window.location.href = `/product/event-management/${eventItem.id}`)
            }
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === 'Space') {
                window.location.href = `/product/event-management/${eventItem.id}`
              }
            }}
          >
            <CardComponent eventData={eventItem} />
          </div>
        )
      })}

      <Custompagination
        product={allEvents}
        perPage={perPage}
        setPage={setPage}
        page={page}
      />
    </>
  )

  return (
    <>
      <FrameworkLeftRight
        leftContent={
          <>
            <EventAsideContentMoMo
              type={'活動'}
              subtitle={'地區'}
              choice={['全部', '北部', '中部', '南部', '東部', '海外']}
              onRegionSelect={(region) => {
                setSelectedRegion(region)
                setPage(1)
              }}
              onStartDateChange={handleStartDateChange}
              onEndDateChange={handleEndDateChange}
              onPriceRangeChange={handlePriceRangeChange}
            />
          </>
        }
        rightContent={
          <>
            <RightContent
              headerText="全部活動"
              eventType="活動"
              subtitle="地區"
              regionChoices={['北部', '中部', '南部', '東部', '海外']}
              allEvents={selectedEvents}
              perPage={perPage}
              setPage={setPage}
              page={page}
              cards={cards}
              onSortSelect={handleSort}
              onRegionSelect={(region) => {
                setSelectedRegion(region)
                setPage(1)
              }}
            />
          </>
        }
      ></FrameworkLeftRight>
    </>
  )
}
