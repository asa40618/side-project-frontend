// import React from 'react'

// ttt
import React, { useEffect, useState } from 'react'

import Framework from '@/components/share/framework/framework-left-right'
// CSS
import styles from './style.module.css'
//
import OffcanvasRightButton from '@/components/share/aside/offcanvas-right-button'
//
import AsideContent from '@/components/share/aside/aside-content'
//
import AlbumCatagory from '@/components/share/aside/album/album-catagory'
//
import Collect from '@/components/share/aside/album-and-course/collect'
//
import CardContent from '@/components/product/album/card/card-content/card-content'

//jjj part-1 iii
import axios from 'axios'

//qwert
import Image from 'next/image'
import TheFirstAlbumCover from '@/public/product/album/R-18911899-1622164711-5894.jpg'
import TheFlatAlbumCover from '@/public/product/album/R-459346-1409631172-6122.jpg'
import TheLongAlbumCover from '@/public/product/album/R-319865-1157067037.jpg'
import FourthAlbumCover from '@/public/product/album/R-1279478-1527737794-4656.jpg'
// R-319865-1157067037.jpg //扁
// R-459346-1409631172-6122.jpg //長
//R-1279478-1527737794-4656.jpg
import CartIcon from '@/public/product/album/icon/cart-icon.svg'
import HeartDefaultIcon from '@/public/product/album/icon/heart-default-icon.svg'

import NewCard from '@/components/product/album/new-card/new-card.js'

//testtest part1
// import { useCart } from '@/hooks/use-cart' //import hook資料夾中的檔案 專輯use-cart 、課程use-cart-course 、活動use-cart-ticket

// 分頁測試 part1
import CustomPagination from '@/components/evaluate/custompagination'
import MapData from '@/components/product/album/map-data'

// 表單測試 part1
import AsideContentCopy from '@/components/share/new-aside/aside-content-copy'
import AlbumCatagoryCopy from '@/components/share/new-aside/album-catagory-copy'

import Link from 'next/link'

//購物車 part1
import { useCart } from '@/hooks/use-cart' //import hook資料夾中的檔案 專輯use-cart 、課程use-cart-course 、活動use-cart-ticket

export default function Category() {
  //購物車 part2
  const { addItem } = useCart() //課程const addCourse、活動const addTicket

  // 分頁測試 part2
  const [page, setPage] = useState(1)
  const perPage = 12
  // 分頁測試 part3
  const [product, setProduct] = useState([])

  const [newProducts, setNewProducts] = useState([
    {
      "id": 1,
      "title": "だからその手を離して",
      "artist": "B'z",
      "artist_id": 2,
      "label": "Air Records",
      "format": "Vinyl",
      "country": "Japan",
      "language_id": 3,
      "released_date": "1988-09-21",
      "year": 1988,
      "cover_image": "R-18911899-1622164711-5894.jpg",
      "discogs_id": 18911899,
      "description": "だからその手を離して是日本音樂組合B'z的歌曲。於1988年9月21日作為出道單曲由BMG VICTOR發行。(Wiki)",
      "price": 500,
      "stock_num": 1,
      "created_at": "2023-07-05 21:07:04",
      "valid": 1
    },
    {
      "id": 3,
      "title": "You Give Love A Bad Name",
      "artist": "Bon Jovi",
      "artist_id": 4,
      "label": "Mercury",
      "format": "Vinyl",
      "country": "Europe",
      "language_id": 2,
      "released_date": "1986-07-23",
      "year": 1986,
      "cover_image": "R-794249-1420917779-7024.jpg",
      "discogs_id": 794249,
      "description": "You Give Love a Bad Name，在1986年7月發行的單曲，這首單曲獲得美國告示牌1週冠軍，成為該團首支全美冠軍單曲。(wiki)",
      "price": 501,
      "stock_num": 1,
      "created_at": "2023-07-05 21:34:10",
      "valid": 1
    },
    {
      "id": 6,
      "title": "Digital Flower Best",
      "artist": "花たん",
      "artist_id": 6,
      "label": "Digital Wing",
      "format": "CD",
      "country": "Japan",
      "language_id": 3,
      "released_date": "2017-05-17",
      "year": 2017,
      "cover_image": "R-10343464-1495937426-1860.jpg",
      "discogs_id": 10343464,
      "description": "花たん/YURiCa オンリーBEST決定盤！！「デジウィ」feat.「花たん」大人気楽曲を選りすぐりでここにお届け！新曲も注目♪DiGiTAL WiNG feat.花たん/YURiCa歴代の「DiGiTAL WiNG」アルバムの中から「花たん/YURiCa」歌唱で最も人気が高い曲を選りすぐりで収録です！ここにしか入っていない新曲も要チェック！(https://booth.pm/ja/items/2606406)Note:On the artwork, this compilation is credited to ",
      "price": 503,
      "stock_num": 3,
      "created_at": "2023-07-05 21:58:24",
      "valid": 1
    },
    {
      "id": 7,
      "title": "倔強",
      "artist": "五月天",
      "artist_id": 7,
      "label": "Rock Records & Tapes",
      "format": "CD",
      "country": "Taiwan",
      "language_id": 1,
      "released_date": "2004-11-05",
      "year": 2004,
      "cover_image": "R-15738020-1596876170-3355.jpg",
      "discogs_id": 15738020,
      "description": "《倔強》是臺灣樂團五月天的歌曲，由阿信作詞、作曲。收錄於2004年的專輯《神的孩子都在跳舞》。(wiki)",
      "price": 497,
      "stock_num": 2,
      "created_at": "2023-07-05 22:07:32",
      "valid": 1
    },
    {
      "id": 8,
      "title": "十二樓的莫文蔚",
      "artist": "莫文蔚",
      "artist_id": 8,
      "label": "Rock Records & Tapes",
      "format": "Vinyl",
      "country": "Taiwan",
      "language_id": 1,
      "released_date": "2021-05-28",
      "year": 2021,
      "cover_image": "R-18975259-1622572848-4127.jpg",
      "discogs_id": 18975259,
      "description": "《十二樓的莫文蔚》是香港歌手莫文蔚的第五張國語音樂專輯，於2000年10月26日發行。(wiki)黑膠版於2021年5月28日發行為什麼是十二樓的的莫文蔚? 而不是十一樓或十三樓的莫文蔚? 簡單說，是因為我們有一首歌叫《十二樓》。而這首歌正可以直接反映、呈現這一次跟過往完全不一樣的莫文蔚，無論視覺上和感覺上。寂寞，不一定是不開心。寂寞，不一定是一個人。寂寞，不一定要說我很寂寞才叫寂寞。寂寞，不一定是人才會寂寞，城市也可以很寂寞，國家也可以很寂寞。然而『十二樓』上，也不只有寂寞而已。要關在十二樓裡，要從十二樓更上一層樓，要從十二樓回到地面，可以自己決定，但是建議你開窗，你會聽見在城市裡的另一端，十二樓的莫文蔚正在開窗......",
      "price": 1299,
      "stock_num": 1,
      "created_at": "2023-07-05 22:22:13",
      "valid": 1
    },
    {
      "id": 11,
      "title": "Evermore",
      "artist": "Taylor Swift",
      "artist_id": 11,
      "label": "Republic Records",
      "format": "CD",
      "country": "Europe",
      "language_id": 2,
      "released_date": "2020-12-18",
      "year": 2020,
      "cover_image": "R-16601034-1608804895-9382.jpg",
      "discogs_id": 16601034,
      "description": "《恆久傳說》（英語：Evermore，風格化為全小寫）是美國創作歌手泰勒絲的第九張錄音室專輯，由聯眾唱片於2020年12月11日發行，距離第八張錄音室專輯《美麗傳說》僅僅不到五個月而已。《恆久傳說》是上張專輯的姊妹專輯，都是在發行前幾個小時就在社交媒體上發布的驚喜專輯。這張專輯主要是獨立民謠、獨立搖滾和室內搖滾專輯，它以《美麗傳說》的獨立風格為基礎進行擴展，並圍繞其之前未曾談論過的一組新穎的敘事故事。\r\n\r\n《恆久傳說》專輯中客串了美國樂團海慕樂團、美好冬季樂團及The National。其主打單曲〈柳〉的發行日與該專輯的發行同一天，其音樂錄影帶為泰勒絲執導。《恆久傳說》受到音樂評論家的普遍讚譽，他們讚揚了其角色動態和實驗作品。",
      "price": 459,
      "stock_num": 2,
      "created_at": "2023-07-09 21:25:54",
      "valid": 1
    }])

  const [initialLoad, setInitialLoad] = useState(true) // 新增状态

  //testtest part2
  // const { addItem } = useCart() //課程const addCourse、活動const addTicket

  // jjj part-2 search axios post
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault() // 防止表单默认提交行为
    try {
      // 创建一个包含表单数据的对象
      const formData = {
        min: min,
        max: max,
        start: start,
        end: end,
        categoryId: '',
      }
      // 發送 POST 請求到後端
      const response = await axios.post(
        'https://nodal-buckeye-404908.de.r.appspot.com/api/album/search',
        formData
      )
      setAlbumData(response.data)
      console.log('后端响应：', response.data)

      const firstSortedData = [...response.data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })

      const firstNewArray = firstSortedData.slice((1 - 1) * 12, 1 * 12)

      setNewProducts(firstNewArray)
    } catch (error) {
      // 处理错误
      console.error('发送请求时出错：', error)
    }
  }

  //大類按鈕 part1
  const [cate, setCate] = useState('')
  const handleSubmit2 = async (e, customValue) => {
    e.preventDefault() // 防止表单默认提交行为
    try {
      // 创建一个包含表单数据的对象
      const formData = {
        cate: customValue,
      }
      // 發送 POST 請求到後端
      const response = await axios.post(
        'https://nodal-buckeye-404908.de.r.appspot.com/api/album/catego',
        formData
      )
      setAlbumData(response.data)
      console.log('后端响应：', response.data)

      const firstSortedData = [...response.data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })

      const firstNewArray = firstSortedData.slice((1 - 1) * 12, 1 * 12)

      setNewProducts(firstNewArray)
    } catch (error) {
      // 处理错误
      console.error('发送请求时出错：', error)
    }
  }

  //z2
  const [filteredData, setFilteredData] = useState([])
  //z7
  const [selectedValues, setSelectedValues] = useState([])

  // y1
  const [tags, setTags] = useState([]) // 初始化一个空的标签数组

  const tagTypes = ['華語', '英語', '日語']
  const handleChecked = (e) => {
    const value = e.target.value
    if (!tags.includes(value)) return setTags([...tags, value])

    if (tags.includes(value)) {
      const newTags = tags.filter((v) => v !== value)
      setTags(newTags)
    }
  }

  // console.log('aa')
  // console.log(tags)
  // console.log('aa')

  // const handleCheckboxChange = (tag) => {
  //   if (tags.includes(tag)) {
  //     setTags(tags.filter((t) => t !== tag))
  //   } else {
  //     // 否则，将标签添加到数组中
  //     setTags([...tags, tag])
  //   }
  // }
  // console.log('aa')
  // console.log(tags)
  // console.log('aa')
  //
  //
  //sss p-0
  // ttt hhh ppp rrr
  const [albumData, setAlbumData] = useState([])
  // // ttt
  // useEffect(() => {
  //   // 使用 Fetch API 從 API 中獲取 JSON 資料
  //   fetch('https://nodal-buckeye-404908.de.r.appspot.com/api/album/')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // data 是包含多個 album 資訊的陣列
  //       setAlbumData(data)

  //       //z1
  //       // const filteredAlbums = data.filter((item) => item.language_id === 1)
  //       // const filteredAlbums = data.filter((item) => item.language_id === 2)
  //       // const filteredAlbums = data.filter((item) => item.language_id === 3)
  //       // z3
  //       // setFilteredData(filteredAlbums)
  //       //Z8
  //       // if (selectedValues.length === 0) {
  //       //   setFilteredData(data)
  //       // } else {
  //       //   // 否则，根据选中的值筛选数据
  //       //   const filteredAlbums = data.filter((item) =>
  //       //     selectedValues.includes(item.language_id.toString())
  //       //   )
  //       //   setFilteredData(filteredAlbums)
  //       // }

  //       // setFilteredData(filteredAlbums)

  //       //z5
  //       // const firstSortedData = [...data].sort((a, b) => {
  //       //Z8 filteredData filteredAlbums

  //       // 第一次資料顯示
  //       const firstSortedData = [...data].sort((a, b) => {
  //         if (a[sortConfig.key] < b[sortConfig.key]) {
  //           return sortConfig.direction === 'ascending' ? -1 : 1
  //         }
  //         if (a[sortConfig.key] > b[sortConfig.key]) {
  //           return sortConfig.direction === 'ascending' ? 1 : -1
  //         }
  //         return 0
  //       })

  //       const firstNewArray = firstSortedData.slice((1 - 1) * 12, 1 * 12)

  //       setNewProducts(firstNewArray)
  //     })
  //     .catch((error) => {
  //       console.error('發生錯誤：', error)
  //     })
  // }, [])
  // 語系篩選
  const handleTags = (products, tags) => {
    let newProducts = [...products]

    // tags = 代表使用者目前勾選的標籤陣列
    //console.log(tags)

    // 處理勾選標記
    if (tags.length > 0) {
      newProducts = [...newProducts].filter((product) => {
        let isFound = false
        // console.log(typeof product.language_id)
        // 原本資料裡的tags字串轉為陣列
        const productTags = product.language.split(',')

        // 用目前使用者勾選的標籤用迴圈找，有找到就回傳true
        for (let i = 0; i < tags.length; i++) {
          // includes -> Array api
          if (productTags.includes(tags[i])) {
            isFound = true // 找到設為true
            break // 找到一個就可以，中斷迴圈
          }
        }

        return isFound
      })
    }

    return newProducts
  }

  //sss p-1
  const [sortConfig, setSortConfig] = useState({
    key: 'id', // 默认按照 id 排序
    direction: 'ascending', // 默认升序
  })

  //sss part-2 start
  // 处理排序按钮点击事件
  const handleSortClick = (key) => {
    let direction = 'ascending' // 默认升序

    // 如果已经按照该属性排序，切换排序顺序
    if (sortConfig.key === key) {
      direction =
        sortConfig.direction === 'ascending' ? 'descending' : 'ascending'
    }
    // 更新排序配置
    setSortConfig({ key, direction })
  }
  // 根据排序配置对数据进行排序

  // z4 filteredData

  // 排序處理
  const sortedData = (Data) => {
    return [...Data].sort((a, b) => {
      // const sortedData = [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1
      }
      return 0
    })
  }
  // let sortedData = [...albumData].sort((a, b) => {
  //   // const sortedData = [...filteredData].sort((a, b) => {
  //   if (a[sortConfig.key] < b[sortConfig.key]) {
  //     return sortConfig.direction === 'ascending' ? -1 : 1
  //   }
  //   if (a[sortConfig.key] > b[sortConfig.key]) {
  //     return sortConfig.direction === 'ascending' ? 1 : -1
  //   }
  //   return 0
  // })
  //sss part-2 end

  // useEffect(() => {
  //   const newArray = sortedData.slice(0, perPage)
  //   setNewProducts(newArray)
  // }, [])

  // useEffect(() => {
  //   if (initialLoad) {
  //     const newArray = sortedData.slice(0, perPage)
  //     setNewProducts(newArray)
  //     setInitialLoad(false) // 标记初始加载完成
  //   }
  // }, [initialLoad, sortedData])
  const [processedData, setProcessedData] = useState([])
  // useEffect(() => {
  //   let newData = []
  //   newData = sortedData(albumData)
  //   newData = handleTags(newData, tags)
  //   // setFilter(handleTags(sortedData, tags))
  //   setProcessedData(newData)
  //   const newArray = newData.slice((page - 1) * perPage, page * perPage)
  //   // sortedData = newData.slice((page - 1) * perPage, page * perPage)

  //   setNewProducts(newArray)
  // }, [page, sortConfig, tags, albumData])

  // useEffect(() => {
  //   const newArray = sortedData.slice((page - 1) * perPage, page * perPage)
  //   setNewProducts(newArray)
  // }, [page])

  // xxx part-1
  // const [selectedValues, setSelectedValues] = useState([]) // 用于存储所选的值
  // // 处理核取框的更改
  // const handleCheckboxChange = (value) => {
  //   if (selectedValues.includes(value)) {
  //     // 如果值已经在选定的值中，则从选定的值中移除它
  //     setSelectedValues(selectedValues.filter((v) => v !== value))
  //   } else {
  //     // 否则，将值添加到选定的值中
  //     setSelectedValues([...selectedValues, value])
  //   }
  // }

  // useEffect(() => {
  //   // 在 sortConfig、sortedData、newProducts、page 改变时清空 selectedValues
  //   setSelectedValues([])
  // }, [page])

  return (
    <>
      {/*  */}
      {/* y2 */}
      {/* <div>
        <label>
          <input
            type="checkbox"
            value={1} // 将 "華語" 的 value 更改为 1
            checked={tags.includes(1)}
            onChange={() => handleCheckboxChange(1)}
          />
          華語
        </label>

        <label>
          <input
            type="checkbox"
            value={2} // 将 "西洋" 的 value 更改为 2
            checked={tags.includes(2)}
            onChange={() => handleCheckboxChange(2)}
          />
          西洋
        </label>

        <label>
          <input
            type="checkbox"
            value={3}
            checked={tags.includes(3)}
            onChange={() => handleCheckboxChange(3)}
          />
          日語
        </label>
      </div> */}
      {/*  */}

      {/*  */}
      <Framework
        leftContent=<>
          <>
            <div className="text-white bg-secondary p-2 text-center">
              <div>
                <h1 className="mt-4">商品類別</h1>
                <hr className="text-white " />
                {/*  */}
                <h2>曲風</h2>
                {/*  */}
                {/*  */}
                <div className="d-flex justify-content-center">
                  <div className="ms-1">
                    <form onSubmit={(e) => handleSubmit2(e, 7)}>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          display: 'block',
                          marginBottom: '10px',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                        onClick={() => { }}
                      >
                        搖滾音樂
                      </button>
                    </form>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="ms-1">
                    <form onSubmit={(e) => handleSubmit2(e, 6)}>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          display: 'block',
                          marginBottom: '10px',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                        onClick={() => { }}
                      >
                        流行音樂
                      </button>
                    </form>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="ms-1">
                    <form onSubmit={(e) => handleSubmit2(e, 2)}>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          display: 'block',
                          marginBottom: '10px',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                        onClick={() => { }}
                      >
                        鄉村音樂
                      </button>
                    </form>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="ms-1">
                    <form onSubmit={(e) => handleSubmit2(e, 4)}>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          display: 'block',
                          marginBottom: '10px',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                        }}
                        onClick={() => { }}
                      >
                        嘻哈音樂
                      </button>
                    </form>
                  </div>
                </div>
                {/*  */}
                {/* xxx part-2 核取框 */}
                <h2>語系</h2>
                <>
                  {tagTypes.map((value, i) => (
                    <>
                      {/* <div className="checkbox" key={i}>
                      <label>
                        <input
                          type="checkbox"
                          className="icheck"
                          value={value}
                          checked={tags.includes(value)}
                          onChange={handleChecked}
                        />
                        {value}
                      </label>
                    </div> */}
                      <div
                        className="form-check d-flex  justify-content-center"
                        key={i}
                      >
                        <input
                          type="checkbox"
                          className="icheck form-check-input"
                          value={value}
                          checked={tags.includes(value)}
                          onChange={handleChecked}
                        />
                        <label
                          className="form-check-label text-white"
                          htmlFor="flexCheckDefault"
                        >
                          &nbsp;{value}
                        </label>
                      </div>
                    </>
                  ))}
                </>
                {/* xxx part-2 核取框*/}
                {/* <div className="form-check d-flex  justify-content-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="1"
                    checked={selectedValues.includes('1')}
                    onChange={() => handleCheckboxChange('1')}
                  />
                  <label
                    className="form-check-label text-white"
                    htmlFor="flexCheckDefault"
                  >
                    &nbsp;華語
                  </label>
                </div>
                <div className="form-check d-flex  justify-content-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="2"
                    checked={selectedValues.includes('2')}
                    onChange={() => handleCheckboxChange('2')}
                  />
                  <label
                    className="form-check-label text-white "
                    htmlFor="flexCheckChecked"
                  >
                    &nbsp;西洋
                  </label>
                </div>
                <div className="form-check d-flex  justify-content-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="3"
                    checked={selectedValues.includes('3')}
                    onChange={() => handleCheckboxChange('3')}
                  />
                  <label
                    className="form-check-label text-white"
                    htmlFor="flexCheckChecked"
                  >
                    &nbsp;日語
                  </label>
                </div> */}
                {/*  */}
                {/*  */}
              </div>
              <div>
                <h1 className="mt-4">商品篩選</h1>
                <hr />
                <form action="" method="post" onSubmit={handleSubmit}>
                  <h2>日期</h2>
                  <div className="input-group input-group-sm d-flex justify-content-center">
                    <input
                      type="text"
                      className={`form-control-sm `}
                      placeholder="2023-12-30"
                      style={{ width: '100px', color: 'black' }}
                      //
                      value={start}
                      onChange={(e) => setStart(e.target.value)}
                    />
                    <span className="input-group-text ms-2 me-2 bg-transparent border-0 text-white">
                      ~
                    </span>
                    <input
                      type="text"
                      className={`form-control-sm  `}
                      placeholder="2023-12-31"
                      style={{ width: '100px', color: 'black' }}
                      //
                      value={end}
                      onChange={(e) => setEnd(e.target.value)}
                    />
                  </div>
                  <br />
                  <div>
                    <h2>價錢</h2>
                    <div className="input-group input-group-sm  d-flex justify-content-center">
                      <input
                        //   type="text"
                        className="form-control-sm"
                        placeholder="1"
                        style={{ width: '100px', color: 'black' }}
                        //
                        type="number"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                      />
                      <span className="input-group-text ms-2 me-2 bg-transparent border-0 text-white">
                        ~
                      </span>
                      <input
                        //   type="text"
                        className="form-control-sm"
                        placeholder="999999"
                        style={{ width: '100px', color: 'black' }}
                        //
                        type="number"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                      />
                    </div>
                  </div>
                  {/*  */}
                  <br />
                  <br />
                  <div className="d-flex align-items-end">
                    <button
                      type="submit"
                      className="btn btn-primary d-block flex-end"
                      style={{
                        display: 'block',
                        marginBottom: '10px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                      onClick={() => { }}
                    >
                      提交
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <br />
          </>
        </>
        rightContent=<>
          <div className="mt-2 ">
            <h1 className="text-center text-white">商品列表</h1>
          </div>
          <div className="d-flex justify-content-center mt-3 mb-5">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                排序
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {/* sss part-3 start */}
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSortClick('id')}
                  >
                    {sortConfig.key === 'id'
                      ? sortConfig.direction === 'ascending'
                        ? '按 ID 降序排序'
                        : '按 ID 升序排序'
                      : '按 ID 排序'}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSortClick('year')}
                  >
                    {sortConfig.key === 'year'
                      ? sortConfig.direction === 'ascending'
                        ? '按年份降序排序'
                        : '按年份升序排序'
                      : '按年份排序'}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSortClick('price')}
                  >
                    {sortConfig.key === 'price'
                      ? sortConfig.direction === 'ascending'
                        ? '按價格降序排序'
                        : '按價格升序排序'
                      : '按價格排序'}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleSortClick('released_date')}
                  >
                    {sortConfig.key === 'released_date'
                      ? sortConfig.direction === 'ascending'
                        ? '按發行日期降序排序'
                        : '按發行日期升序排序'
                      : '按發行日期排序'}
                  </button>
                </li>
                {/* sss part-3 end */}
              </ul>
            </div>
            {/* offcanvas test */}
            <button
              // className="btn btn-primary ms-2"
              className="btn btn-primary d-sm-none ms-2" //螢幕<576px時顯示此按鈕
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              篩選
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header bg-secondary">
                <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body bg-secondary">
                左邊的東西
                <>
                  <div className="text-white bg-secondary p-2 text-center">
                    <div>
                      <h1 className="mt-4">商品類別</h1>
                      <hr className="text-white " />
                      <h2>曲風</h2>
                      {/*  */}
                      {/*  */}
                      <div className="d-flex justify-content-center">
                        <div className="ms-1">
                          <form onSubmit={(e) => handleSubmit2(e, 7)}>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              style={{
                                display: 'block',
                                marginBottom: '10px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                              }}
                              onClick={() => { }}
                            >
                              搖滾音樂
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="ms-1">
                          <form onSubmit={(e) => handleSubmit2(e, 6)}>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              style={{
                                display: 'block',
                                marginBottom: '10px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                              }}
                              onClick={() => { }}
                            >
                              流行音樂
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="ms-1">
                          <form onSubmit={(e) => handleSubmit2(e, 2)}>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              style={{
                                display: 'block',
                                marginBottom: '10px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                              }}
                              onClick={() => { }}
                            >
                              鄉村音樂
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="ms-1">
                          <form onSubmit={(e) => handleSubmit2(e, 4)}>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              style={{
                                display: 'block',
                                marginBottom: '10px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                              }}
                              onClick={() => { }}
                            >
                              嘻哈音樂
                            </button>
                          </form>
                        </div>
                      </div>
                      {/*  */}
                      {/*  */}
                    </div>
                    <div>
                      <h1 className="mt-4">商品篩選</h1>
                      <hr />
                      <form action="" method="post" onSubmit={handleSubmit}>
                        <h2>日期</h2>
                        <div className="input-group input-group-sm d-flex justify-content-center">
                          <input
                            type="text"
                            className={`form-control-sm `}
                            placeholder="2023-12-30"
                            style={{ width: '100px', color: 'black' }}
                            //
                            value={start}
                            onChange={(e) => setStart(e.target.value)}
                          />
                          <span className="input-group-text ms-2 me-2 bg-transparent border-0 text-white">
                            ~
                          </span>
                          <input
                            type="text"
                            className={`form-control-sm  `}
                            placeholder="2023-12-31"
                            style={{ width: '100px', color: 'black' }}
                            //
                            value={end}
                            onChange={(e) => setEnd(e.target.value)}
                          />
                        </div>
                        <br />
                        <div>
                          <h2>價錢</h2>
                          <div className="input-group input-group-sm  d-flex justify-content-center">
                            <input
                              //   type="text"
                              className="form-control-sm"
                              placeholder="1"
                              style={{ width: '100px', color: 'black' }}
                              //
                              type="number"
                              value={min}
                              onChange={(e) => setMin(e.target.value)}
                            />
                            <span className="input-group-text ms-2 me-2 bg-transparent border-0 text-white">
                              ~
                            </span>
                            <input
                              //   type="text"
                              className="form-control-sm"
                              placeholder="999999"
                              style={{ width: '100px', color: 'black' }}
                              //
                              type="number"
                              value={max}
                              onChange={(e) => setMax(e.target.value)}
                            />
                          </div>
                        </div>
                        {/*  */}
                        <br />
                        <br />
                        <div className="d-flex align-items-end">
                          <button
                            type="submit"
                            className="btn btn-primary d-block flex-end"
                            style={{
                              display: 'block',
                              marginBottom: '10px',
                              marginLeft: 'auto',
                              marginRight: 'auto',
                            }}
                            onClick={() => { }}
                          >
                            提交
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <br />
                </>
              </div>
            </div>
            {/* <OffcanvasRightButton>
              <AsideContent
                type={'商品'}
                subtitle={'語系'}
                choice={['西洋', '華語', '日語']}
                genreDivPosition={
                  <AlbumCatagory
                    subtitle="曲風"
                    genre={['搖滾音樂', '流行音樂', '鄉村音樂', '嘻哈音樂']}
                  />
                }
                collectDivPosition={<Collect />}
              ></AsideContent>
            </OffcanvasRightButton> */}
          </div>
          <div className="row">
            {/*   // 分頁測試 part4 */}
            {/* <MapData
              newProducts={newProducts}
              perPage={perPage}
              setNewProducts={setNewProducts}
              product={sortedData}
              page={page}
            /> */}
            {newProducts.map((album, index) => (
              <div
                className={` justify-content-center align-items-center card col-6 col-sm-3 bg-transparent border-0  mt-2 mb-2 `}
                key={album.id}
              >
                <NewCard
                  key={index}
                  id={album.id}
                  title={album.title}
                  artist={album.artist}
                  price={album.price}
                  coverImage={album.cover_image}
                  releasedDate={album.released_date}
                />
                {/*  //購物車 part3 */}
                {/* <button
                  className="btn btn-primary flex-fill  btn-lg me-2 "
                  onClick={() => {
                    addItem({
                      id: album.id,
                      price: album.price,
                      picture: `/product/album/${album.cover_image}`,
                      quantity: 1,
                      title: album.title,
                    })
                  }}
                >
                  加入購物車
                </button> */}
              </div>
            ))}
          </div>
          <div className="mt-3 d-flex justify-content-center mb-3">
            {/* vvv p-2 */}
            {/*   // 分頁測試 part5 */}
            <CustomPagination
              product={processedData}
              perPage={perPage}
              page={page}
              setPage={setPage}
            />
          </div>
        </>
      ></Framework>
    </>
  )
}
