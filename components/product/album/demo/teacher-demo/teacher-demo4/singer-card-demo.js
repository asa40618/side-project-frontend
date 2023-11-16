import React from 'react'
//在next中引用圖片
import Image from 'next/image'
//
//
//
import SingerCard1 from '@/public/figure/teacher/I-FangSu.jpg'
//
//
//
//CSS設定，放在同一層
import styles from './style.module.css'

import Link from 'next/link'

export default function AlbumProductCard() {
  return (
    <>
      <div
        className={`p-3 bg-transparent mt-2 rounded ${styles.wrapper}   text-center`}
      >
        <div className={`${styles.imgwrap}`}>
          {/*  */}
          {/*  */}
          {/*  */}
          <Link href={`https://side-project-frontend-iota.vercel.app/figure/teacher/18`}>
            {/*  */}
            {/*  */}
            {/*  */}
            <Image
              className={`img card-img-top ${styles.w160} rounded-circle`}
              //
              //
              //
              src={SingerCard1}
              //
              //
              //
              alt="singer"
            />
          </Link>
        </div>
        <div className="card-body text-white mt-3">
          {/*  */}
          {/*  */}
          {/*  */}
          <h5 className="card-title ">I-FangSu</h5>
          {/*  */}
          {/*  */}
          {/*  */}
          {/* <h6 className="card-text mt-2">XXX位粉絲收藏</h6> */}
        </div>
      </div>
    </>
  )
}
