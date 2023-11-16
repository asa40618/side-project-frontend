import React from 'react'

//在next中引用圖片
import Image from 'next/image'
// 商品列表頁icon
import MusicIcon from '@/public/product/album/icon/music-icon.svg'

//
import Link from 'next/link'

export default function AlbumCatagory({ subtitle, genre }) {
  return (
    <>
      <h2>{subtitle}</h2>
      {/* {genre.map((v) => (
        <div key={v} className="d-flex justify-content-center">
          <Image className="img" src={MusicIcon} alt="music" />
          <div className="ms-1">{v}</div>
        </div>
      ))} */}
      {genre.map((v, index) => (
        <div key={v} className="d-flex justify-content-center">
          <div className="ms-1">
            <Link
              href={`https://side-project-frontend-iota.vercel.app/product/album?cate=${getCategoryId(
                v
              )}`}
            >
              <button
                type="submit"
                className="btn btn-primary"
                key={v}
                style={{
                  display: 'block',
                  marginBottom: '10px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                onClick={() => {}}
              >
                {v}
              </button>
            </Link>
          </div>
        </div>
      ))}
      <br />
    </>
  )
}
function getCategoryId(genre) {
  switch (genre) {
    case '搖滾音樂':
      return 7
    case '流行音樂':
      return 6
    case '鄉村音樂':
      return 2
    case '嘻哈音樂':
      return 4
    default:
      return 0 // 没有匹配的分类ID
  }
}
