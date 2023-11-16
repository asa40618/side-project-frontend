import { useEffect, React, useState } from 'react'
import FrameworkLeftRight from '@/components/share/framework/framework-left-right'
import EventAsideContentMoMo from '@/components/share/product/event-management/EventAsideContentMo/EventAsideContentMo'
import RightContent from '@/components/share/product/event-management/FrameworkListPage-right/frameworkListPageRight'
import CardComponent from '@/components/product/event-management/activity-CardComponent/cards'
import Custompagination from '@/components/evaluate/custompagination'
import axios from 'axios'

export default function EventManagement() {
  const perPage = 4
  const [allEvents, setAllEvents] = useState([])
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

  useEffect(() => {
    axios
      .get('https://nodal-buckeye-404908.de.r.appspot.com/api/product/event-management')
      .then((response) => {
        const products = response.data.products
        setAllEvents(products)
        console.log(products)
        const shuffled = products.sort(() => 0.5 - Math.random())
        setSelectedEvents(shuffled.slice(0, 4)) // 取前四項
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

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
