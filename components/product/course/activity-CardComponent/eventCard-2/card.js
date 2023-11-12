import React from 'react'
import style from './card.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({
  course_id,
  img,
  name,
  directions,
  teacher,
  price,
}) {
  const imageSrc = `/product/course/course/${img}`
  return (
    <>
      <div className={style['product-card']}>
        <div className={style['product-image-container']}>
          <Link
            href={`/product/course/25`}
            className="w-100 d-block overflow-hidden"
          >
            <img
              className={style['product-image']}
              src="/product/course/course/course8.jpg"
              alt="oasis"
            />
          </Link>
        </div>

        <div className={style['product-details']}>
          <h3 className={`${style['product-title']} text-wrap`}>
            电子音乐制作｜高级进阶
          </h3>
          <p className={style['product-description']}>
            如果您已經入門，完成學習《Ableton Live 10 基礎篇
            一切從零開始》課程之後，就可以繼續學習這套進階課程了。這套教程會幫助您提升到另一個水平，深化您的技能，讓您更加精通
            Ableton Live，掌握更多專業的音樂製作技巧。
          </p>
          <p className={style['product-teacher']}>SteveGlazer</p>
          <p className={style['product-price']}>$ 700</p>
        </div>
      </div>
    </>
  )
}
