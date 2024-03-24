import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from './style.module.css'
import Link from 'next/link'

import TheFirstAlbumCover from '@/public/product/album/R-18911899-1622164711-5894.jpg'

export default function SingerAlbumRow(props) {
  const [albumsOfSinger, setAlbumsOfSinger] = useState([
    {
        "id": 4,
        "title": "Air Original Soundtrack",
        "artist": "Various",
        "artist_id": 1,
        "label": "Key Sounds Label",
        "format": "CD",
        "country": "Japan",
        "language_id": 3,
        "released_date": "2002-08-09",
        "year": 2002,
        "cover_image": "R-3651961-1426784659-2577.jpg",
        "discogs_id": 3651961,
        "description": "《AIR ORIGINAL SOUNDTRACK》是Key Sounds Label在2002年9月27日發布的第一張《AIR》遊戲原聲音樂專輯，主要收錄了電腦遊戲《AIR》所使用的主題曲以及背景音樂為主，其產品目錄標號為「KSLA-0004～0005」。整個專輯包含有2張收錄了共31首不同風格的混音歌曲、歌唱以及2種版本之樂器演奏開頭主題曲以及片尾主題曲的CD光碟，並且分別由隸屬於Key的麻枝准、折戶伸治與戶越馬込以及隸屬於Ive的高瀨一矢負責音樂創作和改編工作，而Lia也為了此張原聲專輯錄製了《鳥之詩》、《Farewell song》以及《青空》的歌唱版本。遊戲中的音樂鑑賞模式中多將這些歌曲副標題以英語標記，而專輯CD中的曲名則捨棄了副標題。電視動畫版本使用了除《未使用曲4》以外的所有專輯收錄音樂。(wiki)",
        "price": 499,
        "stock_num": 1,
        "created_at": "2023-07-05 21:43:24",
        "valid": 1
    },
    {
        "id": 26,
        "title": "Forrest Gump (The Soundtrack)",
        "artist": "Various",
        "artist_id": 1,
        "label": "Epic Soundtrax",
        "format": "CD",
        "country": "US",
        "language_id": 2,
        "released_date": "1994-06-28",
        "year": 1994,
        "cover_image": "R-443850-1396570715-4788.jpg",
        "discogs_id": 443850,
        "description": "阿甘正傳 電影原聲帶\r\n★ 1994年奧斯卡獎經典電影原聲帶專輯\r\n★ 全美告示榜專輯銷售No.2，收錄32首電影中出現之經典歌曲，包括貓王Elvis Presley \"Hound Dog\", Bob Dylan \"Rainy Day Women #12 & 35\", The Beach Boys \"Sloop John B\", Aretha Franklin \"Respect\", Simon & Garfunkel \"Mrs. Robinson\", Scott McKenzie \"San Francisco (Be Sure to Wear Flowers in Your Hair)\", Lynyrd Skynyrd \"Sweet Home Alabama\", Fleetwood Mac \"Go Your Own Way\"以及電影經典主題曲配樂 \"Forrest Gump Suite\"等\r\n(https://www.sonymusic.com.tw/album/various-artists-forrest-gump-the-soundtrack-2lp/)\r\n\r\n　此兩張一套的原聲帶專輯，收錄的全是一九五○至一九八○年最具時代意義的暢銷金曲，其中藝人包括貓王Elvis Presley、CCR、Joan Baez、The Four Tops、Aretha Franklin、The Beach Boys、The Mamas & The Papas、The Doors、Simon & Garfunkel、Jefferson Airplane、The Byrds、The Supremes和Willie Nelson等，此次重新發行再加收FleetWood Mac \"Go Your Own Way\"和Jackson Browne \"Running on Empty\"等兩首之前未曾收錄的單曲，總共34首作品，超過100分鐘的超值饗宴，讓我們更能深刻了解到40年的物換星移。\r\n(https://www.books.com.tw/products/0020113710)\r\n\r\n\r\nForrest Gump: The Soundtrack is the soundtrack album based on the Academy Award-winning film Forrest Gump, and contains music from many well-known American artists. The score, composed by Alan Silvestri, was released separately (as Forrest Gump – Original Motion Picture Score) on the same day. The album was reissued in 2001 with two additional tracks.(wiki)",
        "price": 555,
        "stock_num": 2,
        "created_at": "2023-07-12 09:16:41",
        "valid": 1
    },
    {
        "id": 163,
        "title": "Rockcan Sound E Can (Rockman 25th Anniversary)",
        "artist": "Various",
        "artist_id": 1,
        "label": "Capcom",
        "format": "CD",
        "country": "Japan",
        "language_id": 3,
        "released_date": "2012-12-29",
        "year": 2012,
        "cover_image": "R-6630804-1423455807-6544.jpg",
        "discogs_id": 6630804,
        "description": "Rockcan Sound E Can (ロックカン サウンドＥ缶) is a commemorative steel E Can containing 10 CDs with music from the original Megaman series and a booklet. Also, those in Japan who pre-ordered the Rockcan directly from e-Capcom enter in a raffle to win one of four exclusive illustrations drawn and autographed by members of the Capcom design team.\r\n\r\n(https://megaman.fandom.com/wiki/Rockcan_Sound_E_Can)",
        "price": 1001,
        "stock_num": 1,
        "created_at": "2023-07-20 10:22:54",
        "valid": 1
    },
    {
        "id": 164,
        "title": "Beatnation Rhyze Vs Hardcore Tano*C",
        "artist": "Various",
        "artist_id": 1,
        "label": "Konami Digital Entertainment",
        "format": "CD",
        "country": "Japan",
        "language_id": 3,
        "released_date": "2014-08-27",
        "year": 2014,
        "cover_image": "R-6359152-1417293528-2126.jpg",
        "discogs_id": 6359152,
        "description": "2003 年 6 月 30 日，在日本 2ch 的 DTM （DeskTop Music，桌面音樂，泛指使用電腦製作音樂）討論版 的其中一個討論串『ハードコアテクノ総合スレッド』（Hardcore Techno 綜合討論串）出現了兩位專門公開自己製作的音樂，並以討論夜店活動為興趣的作曲者。\r\n\r\n從這裡開始，慢慢增加一些對 Hardcore 音樂非常有興趣\r\n也有共同志向的同伴開始組成團體「ヾ(゜Д゜)ノハードコアタノシー」，直到 2007 年 8 月他們的代表專輯「HARDCORE SYNDROME」出來之後，才正式使用「HARDCORE TANO*C」這個名稱，直到今日。\r\n\r\n\r\n2014 年，由 KONAMI 底下新設立的音樂團體「beatnation RHYZE」與「HARDCORE TANO*C」一起進行合作推出特別專輯「beatnation RHYZE vs HARDCORE TANO*C」。\r\n\r\n除了兩邊當時有新歌曲推出之外，兩邊都會將當時 KONAMI 音樂遊戲推出過的知名歌曲重新進行另外一種詮釋。（當然，事後的確有部分歌曲在音樂遊戲上有進行收錄）\r\n\r\n(https://forum.gamer.com.tw/C.php?bsn=20879&snA=295)",
        "price": 888,
        "stock_num": 1,
        "created_at": "2023-07-20 10:29:34",
        "valid": 1
    }
])
  // const imageSrc = `/product/album/${album.cover_image}`

  // useEffect(() => {
  //   if (props.id) {
  //     axios
  //       .get(`https://nodal-buckeye-404908.de.r.appspot.com/api/singer/${props.id}/albums`)
  //       .then((response) => {
  //         setAlbumsOfSinger(response.data)
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error)
  //       })
  //   }
  // }, [props.id])
  return (
    <>
      {albumsOfSinger.map((album, index) => (
        <div className="d-flex justify-content-start mt-3 mb-3" key={index}>
          <div className={`${styles.sq200} `}>
            <Link href={`/product/album/${album.id}`}>
              <Image
                className={`img ${styles.coverSq}`}
                src={`https://side-project-frontend-iota.vercel.app/product/album/${album.cover_image}`}
                alt="album-artist-album-title"
                width={500} // 设置图片宽度
                height={500} // 设置图片高度
              />
            </Link>
          </div>
          <div className="ms-5 align-self-center">
            <h3 className="text-white lh-lg text-start">{album.title}</h3>
            <h6 className="text-white-50 lh-lg text-start">{album.artist}</h6>
          </div>
        </div>
      ))}
    </>
  )
}
