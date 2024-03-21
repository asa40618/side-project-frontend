import React, { useEffect, useState } from 'react'
import styles from './course.module.scss'
import FrameworkLeftRight from '@/components/share/framework/framework-left-right'
import EventAsideContentMo from '@/components/share/product/event-management/EventAsideContent/EventAsideContent'
import RightContent from '@/components/share/product/event-management/FrameworkListPage-right/frameworkListPageRight'
import Custompagination from '@/components/evaluate/custompagination'
import CourseCard from '@/components/product/course/course-card/course'
import { useCourseCart } from '@/hooks/use-cart-course'

export default function EventManagement() {
  const [courseData, setCourseData] = useState([])
  const [currentPage, setCurrentPage] = useState(1) // 当前页码
  const coursesPerPage = 4 // 每页显示的课程数量
  const [selectedCourses, setSelectedCourses] = useState([])
  const [sortType, setSortType] = useState('dateDesc') // 默认排序类型
  const [startDate, setStartDate] = useState(null) // 开始日期筛选
  const [endDate, setEndDate] = useState(null) // 结束日期筛选
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 }) // 价格范围筛选

  const { addCourse } = useCourseCart()
  const data = [
    {
      "course_id": 1,
      "img": "gutier1.jpg",
      "name": "馬叔叔搖滾吉他課程",
      "directions": "在跟馬叔叔一起搖滾學吉他課程裡馬叔叔很貼心的安排了１８個單元，共３３０分鐘的完整的吉他數位DVD教學系統，內容超過１００個練習與範例示範說明, 循序漸進的課程，不分年齡，想學就學，讓學音樂不再只是夢想，現在就趕快跟馬叔叔一起搖滾學吉他吧!  在跟馬叔叔一起搖滾學吉他課程裡馬叔叔很貼心的安排了１８個單元，共３３０分鐘的完整的吉他數位DVD教學系統，內容超過１００個練習與範例示範說明, 循序漸進的課程，不分年齡，想學就學，讓學音樂不再只是夢想，現在就趕快跟馬叔叔一起搖滾學吉他吧! ",
      "price": 1980,
      "up_date": "2023-07-12",
      "shelf_time": "2023-08-24",
      "valid": 1,
      "teacher_id": 1,
      "teacher_name": "馬叔叔UncleMa"
    },
    {
      "course_id": 2,
      "img": "gutier2.jpg",
      "name": "馬叔叔電吉他課程",
      "directions": "母胎沒節奏感？沒音感？你可以不再與音樂絕緣！流行音樂教學霸主馬叔叔，打造任何人都能學會的電吉他課！你從來沒想過的音樂潛能，跟著馬叔叔的十二堂課程，從搞懂電吉他與它的快樂夥伴們，到最後一堂竟能自己彈出充滿節奏感的放克，捧著吉他在台上帥氣演奏真的不是夢!母胎沒節奏感？沒音感？你可以不再與音樂絕緣！流行音樂教學霸主馬叔叔，打造任何人都能學會的電吉他課！你從來沒想過的音樂潛能，跟著馬叔叔的十二堂課程，從搞懂電吉他與它的快樂夥伴們，到最後一堂竟能自己彈出充滿節奏感的放克，捧著吉他在台上帥氣演奏真的不是夢!",
      "price": 990,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-26",
      "valid": 1,
      "teacher_id": 1,
      "teacher_name": "馬叔叔UncleMa"
    },
    {
      "course_id": 3,
      "img": "logic.jpg",
      "name": "Logic Pro X音乐制作快速入门",
      "directions": "你曾经纠结过，怎样将你的音乐灵感快速的从脑中转化为数字音乐吗？  你知道有一些技巧，可以让完全不懂乐理知识的音乐小白，在短短2个小时内自己制作，包括和弦、混音在内的乐曲吗？  本课将向您展示如何成为一名电子音乐制作人，学习如何开始使用Logic pro x 软件，从头开始进入音乐制作。",
      "price": 1170,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 19,
      "teacher_name": "HongenZhu"
    },
    {
      "course_id": 4,
      "img": "garage.jpg",
      "name": "GarageBand音樂音效製作設計入門",
      "directions": "大家好！  我是Yu-Han Wu (Rainnie),這堂課是免費的GarageBand入門課！  主要目的是為您建立使用這套app前該有的系統觀,也會跟您分享音樂創作跟設計基本概念,  帶您透過實際操作GarageBand,了解如何建立使用樂器,和弦,人聲等工具創作,透過多個音樂軌道的自由安排,享受音樂創作的樂趣。  一起來學習用GarageBand創作屬於你自己的旋律吧!",
      "price": 670,
      "up_date": "2023-07-12",
      "shelf_time": "2023-08-24",
      "valid": 1,
      "teacher_id": 15,
      "teacher_name": "EmmaLai"
    },
    {
      "course_id": 5,
      "img": "piano.jpg",
      "name": "30天學會流行鋼琴伴奏",
      "directions": "鋼琴作為樂器之王，在很多人眼中它是很難學會的。雖然壹直有個鋼琴夢，卻總是望而卻步。然而事情真的是這樣嗎？    在古典鋼琴領域，有壹套完整的刻意練習體系，但在流行鋼琴中卻很少見。小冰老師在教學中發現，通過創作的方式可以很好的學習流行鋼琴。    所以《30天學會流行鋼琴》（零基礎入門篇）教程的理念，就是通過創作來學習流行鋼琴，精心設計的課程，沒有枯燥深奧的理論，實操中壹步壹步帶妳發現音樂的樂趣。30天，每天30分鐘，給自己一個機會吧！",
      "price": 900,
      "up_date": "2023-07-12",
      "shelf_time": "2023-08-24",
      "valid": 1,
      "teacher_id": 5,
      "teacher_name": "IYAMUSIC 哎呀音樂"
    },
    {
      "course_id": 6,
      "img": "sing.jpg",
      "name": "學會自信開口唱！溫蒂老師的歌唱小教室",
      "directions": "《木曜四超玩》阿部瑪利亞配唱老師、政大金旋獎創作大賞得主、專業廣告配唱歌手、江靜和溫妮等藝人的和聲－溫蒂老師的線上課程開課啦！",
      "price": 1690,
      "up_date": "2023-07-21",
      "shelf_time": "2023-08-04",
      "valid": 1,
      "teacher_id": 2,
      "teacher_name": "存在音樂團隊"
    },
    {
      "course_id": 7,
      "img": "band.jpg",
      "name": "GarageBand库乐队音乐制作完全教程",
      "directions": "《GarageBand库乐队Mac教程》将带领众音乐小白学习并掌握库乐队以及制作出两首全轨乐曲。    库乐队是一款高质量的免费音乐制作软件。我们的课程面向音乐小白以及想要提高音乐制作技能的资深用户，涵盖了音乐大咖们在音乐创作中使用到的所有软件功能。    本课程包含了您所需要的一切音乐制作知识点，帮助您在库乐队实现您的音乐创作理念—您只需准备Mac和联网就好了。    目前市面上有许多音乐制作课程，侧重点也各有不同。我们这门课将重点放在音乐制作平台以及如何通过库乐队快速实现自己的音乐理念上，而不是学一堆在软件上完全用不着的花架子。    我们的课程专为音乐小白而设，即使您从未使用过库乐队这个软件，也没有关係。本课程包含Mac应用商店的软件下载说明以及建立库乐队大型免费音乐库的教程。",
      "price": 1200,
      "up_date": "2023-07-12",
      "shelf_time": "2023-08-24",
      "valid": 1,
      "teacher_id": 8,
      "teacher_name": "八拍葛格"
    },
    {
      "course_id": 8,
      "img": "create.jpg",
      "name": "【創作從0-1】新手詞曲創作的勇者修煉之路！",
      "directions": "經過 #吉他創作與演奏、#詞曲創作以及 #人聲舞台共三個關卡  每個關卡都有該領域的專業老師＋表演者擔任專屬角色，你將會與關卡角色們過招，獲得各關卡滿滿的寶貴知識與經驗  線上就能完成課程，不論你是被報告追著跑的學生或是被主管盯死死的上班族，都能自己分配零碎時間上課充實自己！  最終你將能用自己的歌曲、純熟的彈唱，閃耀舞台、迷倒眾人！",
      "price": 1900,
      "up_date": "2023-07-12",
      "shelf_time": "2023-08-24",
      "valid": 1,
      "teacher_id": 9,
      "teacher_name": "ScottSu"
    },
    {
      "course_id": 9,
      "img": "dj.jpg",
      "name": "從零開始學習DJ",
      "directions": "我們跳脫以往的教學型態，特別使用分割畫面，讓學員感覺老師就在面前般的教學，即便是透過線上教學的模式，也能讓你一步步了解什麼是 DJ、DJ 器材、DJ 是如何放歌，以及怎麼當個好 DJ，最後教你錄出屬於自己的第一個 \"Mixtape\" 作品。  （Mixtape 簡稱為混音帶、混音集，可以視為是 DJ 的作品集，不同於一般歌曲，Mixtape 通常由數十首歌接在一起，長度從半小時到兩小時都有，一切隨著 DJ 想表達情緒與意涵而有所變動。好的 Mixtape 會加入 DJ 的想法與巧思，讓聽眾在短時間內完全進入音樂 \"情緒\" 且無法自拔，這也是最直接可以看出 DJ 功力的途徑之一！）。  ",
      "price": 1980,
      "up_date": "2023-07-12",
      "shelf_time": "2023-08-24",
      "valid": 1,
      "teacher_id": 12,
      "teacher_name": "DJFelix"
    },
    {
      "course_id": 10,
      "img": "guiter3.jpg",
      "name": "吉他音符&音階密技記憶法",
      "directions": "這門課由不拘時老師提供了一個新的，神奇的，快速的方法來一次記憶指板上的全部音符。透過這個方法，你可以在10分鐘內完成音階位置圖。這個方法也已經幫助了許許多多的吉他新手，或是對吉他音符位置感到困擾的朋友。現在你也可以在Udemy上透過影音版課程學習到了。  對於我們的大腦來說，最好的學習記憶法毫無疑問的是「圖像記憶法」。不拘時在吉他指板上發現了神奇又簡單的規則，同樣也是屬於圖像記憶的神奇方法。用這個方法，你只需要記下５個簡單的圖案，你就記下了吉他指板上的所有音符位置了。  除此之外，這門課也教你另一種簡單的圖像記憶，可以快速的記下對於獨奏速彈來說非常好用的「一弦三音」音階指型。  如果你有興趣，現在就加入這門可以提升你的彈奏能力，並且成為引領你進入更深領域前跳板的神奇記憶課程吧！",
      "price": 1320,
      "up_date": "2023-07-12",
      "shelf_time": "2023-08-24",
      "valid": 1,
      "teacher_id": 21,
      "teacher_name": "ErichAndreas"
    },
    {
      "course_id": 11,
      "img": "voice.lead.jpg",
      "name": "給編曲者的基礎鍵盤和聲與Voice Lead",
      "directions": "編曲者的基礎鍵盤和聲與Voice Lead是專門設計給想輕鬆按出專業和弦聲響的夥伴 ，想在裡按出厲害又合理的和絃聲響一直是編曲入門者的夢想，尤其像我這樣非鍵盤類出身的樂手，看到那些厲害的聲響與銜接上的Voice Lead 是一直想搞懂的項目。課程裡集結了多年的研究整理，有條裡地分配每一堂課，從順階和弦以及轉位開始，一路講到和弦走法的原理以及Voice Lead，每節課都有可以跟著一起練的小練習，練習裡附有簡單的五線譜加簡譜，適合各種階段想要學習的人 ，趕快加入我們一起效率的學吧!",
      "price": 670,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 48,
      "teacher_name": "LaciMorgan"
    },
    {
      "course_id": 12,
      "img": "piano4.jpg",
      "name": "流行鋼琴/電子琴即興伴奏入門",
      "directions": "妳將會學習\r\n\r\n1、左手怎麽彈、怎麽配和弦\r\n\r\n2、運用伴奏技巧，不需要看譜就能彈奏流行歌曲\r\n\r\n3、三和弦、轉位和弦、掛留和弦、七和弦、增減和弦等彈法\r\n\r\n4、豐富的節奏型與和弦彈奏模型，根據歌曲情感自由選擇演奏方法\r\n\r\n5、為自己演唱伴奏，邊彈邊唱\r\n\r\n6、學習《大魚》、《知足》、《這就是愛嗎》等眾多熱門流行歌曲，並拓展到更多歌曲",
      "price": 470,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 11,
      "teacher_name": "牙牙学琴YaYaPiano"
    },
    {
      "course_id": 13,
      "img": "piano2.jpg",
      "name": "如何彈鋼琴的和弦？從零開始的訓練",
      "directions": "您想要學會彈流行歌嗎？您喜歡敬拜歌，想加入敬拜團嗎？\r\n\r\n鋼琴其實不是很難的樂器，只需要了解一些基本的結構，就可以很快就開始彈您最喜歡的流行歌和敬拜歌。\r\n\r\n本課程會帶您從零開始了解鋼琴的鍵盤，所有的音名和順序。新樂手也不用擔心技巧不足，老師會教您如何訓練手指頭有能力和獨立彈鋼琴。了解一些基本的規法就可以認識所有大調的音階順序。黑鍵也不用怕，連黑鍵都有順序可以幫助學員背起來。大調和小調的和弦只需要知道大調的音階就可以彈出來了。\r\n\r\n老師教的結構和順序不會很難，但是建議學員重複看幾次，下載學習單寫功課，坐在鋼琴前一起彈。鋼琴是一個技巧，一定要動手，動腦才可以學會。如果學員有任何的問題，很歡迎與老師留言。老師會儘量快速回答。宛音老師希望所有的學員可以儘快進入音樂的喜樂和幸福。\r\n\r\n",
      "price": 670,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 13,
      "teacher_name": "宛音Clara董Rhoden"
    },
    {
      "course_id": 14,
      "img": "child.jpg",
      "name": "【Joy老師的親子音樂教室】",
      "directions": "課程各堂半⼩時，⼀共分為四堂，總時⻑約兩⼩時。課程中，除了名曲介紹、⾳樂家⼩故事之外，還有實⽤的英語⼩教學！讓⼩朋友在學習⾳樂外也能落實雙語⽣活化的願景！\r\n",
      "price": 570,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 17,
      "teacher_name": "声音教练金小鑫"
    },
    {
      "course_id": 15,
      "img": "piano3.jpg",
      "name": "超細致！零基礎流行鋼琴教程（簡譜教學）",
      "directions": "課程特點\r\n\r\n1、不用學五線譜；\r\n\r\n2、從手型、坐姿零基礎教起\r\n\r\n3、800分鐘總教學時長，超細致講解。具體到每壹步的練習方法，只要跟著課程壹壹操作即可。\r\n\r\n4、通過掌握六種基本伴奏節奏型，能夠壹通百通應用到絕大部分的流行歌曲中。\r\n\r\n\r\n\r\n學完能做到\r\n\r\n1、能夠彈奏“簡譜兒歌鋼琴曲集”裏的101首歌曲（課程資料提供下載）；\r\n\r\n2、學會簡譜，能夠彈奏大部分的流行歌曲與鋼琴曲（C調）；\r\n\r\n3、了解和弦級數，能夠自主改變或創作伴奏節奏型；\r\n\r\n4、了解音階構成，能夠自主摸索各個調的原調彈法；\r\n\r\n",
      "price": 1280,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 18,
      "teacher_name": "I-FangSu"
    },
    {
      "course_id": 16,
      "img": "hiphop.jpg",
      "name": "Hip-Hop Trap Beat | 完整制作",
      "directions": "我们来探索Hip-Hop的律动，了解黑人音乐的根基，文化，Trap音乐风格的演变，Drums鼓组的制作，如何制作快速的Hi-Hats、808 Sub Bass的滑音方法，以及在Trap音乐中很常见的调式，还有如何对低频KICK&BASS的混音方法等等。\r\n\r\n学习采样的技巧，现代音频技术，结合科技的方法，编配乐器，以及实现灵感创造音乐氛围，在此课程中完整的展现了，一首HIP-HOP风格的音乐制作从头到尾。跟着我的步骤来，你也可以制作属于自己的Beat啦！现在我们就来制作一首TRAP BEAT!",
      "price": 2690,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 14,
      "teacher_name": "陈佳楠Chillen"
    },
    {
      "course_id": 17,
      "img": "china.jpg",
      "name": "黎采薇的中國古典音樂賞析",
      "directions": "中國古典音樂的學院風入門課程，認識吹拉彈打的代表樂器。\r\n\r\n以考古作主題，依據時間軸，論述樂器的起源和發展，提供各種考古文物和歷史圖片，從一種新穎的角度重新認識傳統樂器。\r\n\r\n課程包括：\r\n\r\n音樂的起源\r\n\r\n打擊樂器概述、揚琴、鼓類樂器、鑼與鐃鈸類樂器\r\n\r\n吹管樂器概述、笛子、嗩吶、簫、笙\r\n\r\n彈撥樂器概述、古琴、古箏、阮、琵琶、柳琴、三弦\r\n\r\n拉弦樂器概述、二胡、高胡與京胡\r\n\r\n完成課程後，學生可以認識不同樂器的音色，以及其背景、歷史、演變過程和在現代的運用。",
      "price": 470,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 19,
      "teacher_name": "HongenZhu"
    },
    {
      "course_id": 18,
      "img": "piano5.jpg",
      "name": "流行鋼琴/電子琴即興伴奏進階",
      "directions": "妳將會學習\r\n\r\n1、色彩和弦——掛留和弦、七和弦、增減和弦等構建方法與演奏方法\r\n\r\n2、琶音、倚音、加花等進階伴奏技巧，豐富歌曲情感\r\n\r\n3、學習設計尾奏部分，完整地完成壹首歌曲的鋼琴改編\r\n\r\n\r\n\r\n學習要求\r\n\r\n1、設備：鋼琴、電鋼琴或61鍵以上電子琴，不建議使用手卷鋼琴；\r\n\r\n2、基礎：零基礎學員可參加免費前置課，練習壹周左右，能夠演奏單音旋律即可學習本課程；有鋼琴基礎，但不熟悉流行歌曲演奏的學員可以直接開始學習。\r\n\r\n3、時間：學習進度可自由安排，不限時，每節課後作業需要花1-2小時練習，因人而異。\r\n\r\n",
      "price": 470,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 18,
      "teacher_name": "I-FangSu"
    },
    {
      "course_id": 19,
      "img": "drum.jpg",
      "name": "初級鼓課程:踏上成為鼓手之路",
      "directions": "初級鼓課程 入門以及基本功教學\r\n這個課程一共有14部影片可以收看\r\n隨時隨地 方便你學習 足不出門也能學打鼓\r\n本課程針對有興趣學打鼓的人 從來沒有接觸過音樂和打鼓\r\n看完之後一定能幫助你成位一個初級鼓手 \r\n所有影片相等於2-3個月的正規鼓課程\r\n讓你對打鼓,節拍,音符有基礎的認識\r\n還有打鼓必須要學的基本功以及需要練習的地方\r\n影片也會有加上一些練習pdf給大家去練\r\n如果有任何關於課程的問題 我都會全力幫你解決 為你解答\r\n希望大家有個愉快的音樂學習體驗",
      "price": 500,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 39,
      "teacher_name": "BillyBaker"
    },
    {
      "course_id": 20,
      "img": "guiter4.jpg",
      "name": "【吉他編曲大解析】流行抒情全攻略",
      "directions": "如果你有以下問題\r\n\r\n學了一陣子的吉他，記得一些和弦的按法，看著網路上的和弦譜都可以大略彈出來，卻不知道如何再進步\r\n\r\n對於樂理缺乏較全面性的理解\r\n\r\n不知道自己彈在哪一個調上，也不知道調跟調之間該如何切換\r\n\r\n\r\n\r\n這堂課要教你\r\n\r\n要彈好琴，要先知道到底在彈什麼！談大調、音程、和弦、順階和弦、和弦級數\r\n\r\n在不同調性中自由轉換：吉他上 C、G、D、A、E 五個調的順階和弦\r\n\r\n每一個調的特色：美麗的和弦及實際練習",
      "price": 570,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 37,
      "teacher_name": "TrueFireGuitarLesson"
    },
    {
      "course_id": 21,
      "img": "course11.jpg",
      "name": "零基础学习普通话播读发声",
      "directions": "本课程将为初学者系统讲解科学发声训练方法，改善声音质量，扭转发音问题，提高普通话播音能力！\r\n\r\n我将从气息控制开始讲起，让大家学会胸腹呼吸，气沉丹田，以及合理的使用气息变化，之后将说明口腔状态对于声音的影响，学习打开口腔增加唇舌力度，避免吐字不清，配合喉部控制的讲解，学会自如声区的运用，掌握三腔共鸣联合发音。并且会系统讲解普通话发音要领，纠正普通话问题！\r\n\r\n适合所有人进行发声训练出血阶段的学习与练习，更多深入的学习计划可以随时咨询我进行后续的课程沟通～",
      "price": 670,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 40,
      "teacher_name": "EricArceneaux"
    },
    {
      "course_id": 22,
      "img": "course7.jpg",
      "name": "Music Theory｜音乐理论｜电子与流行音乐",
      "directions": "音乐基础理论会帮助你飞的更高，帮助你对音乐有更深的理解，最后超越乐理本身，并不被所谓的“乐理知识”框架所束缚。\r\n\r\n乐理像是音乐的数学几何，也像是语言里面的语法，任何一种我们常听到的电子音乐风格都离不开他，他会帮助你对编曲和混音的直接提升；所以这是一名合格的、专业的音乐人必修的技能。\r\n\r\n本课程的设计以简单、通俗易懂、实用的方式讲解，结合常见电子音乐风格：Hip-Hop、R&B、Trance、Deep House、Pop中的调式，和声，和声走向，旋律等知识结构进行分析，是很好的初学者入门的选择。",
      "price": 3789,
      "up_date": "2023-07-11",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 15,
      "teacher_name": "EmmaLai"
    },
    {
      "course_id": 23,
      "img": "course9.jpg",
      "name": "Chillout Lounge｜完整制作｜沙发驰放",
      "directions": "“Chillout”\r\n\r\n一种生活方式，对生活的态度；“放松，舒适，现代，大自然，物质与精神并存，冷静，深邃，并专注享受当下”\r\n\r\nChillout和Lounge音乐是由多种风格元素组合而成的；爵士乐，电子乐，氛围音乐，拉丁，世界音乐，嘻哈，R&B，House，新世纪，古典等等；是他们的融合体。\r\n\r\n这是一套完整的电子音乐制作教程，从作曲阶段，到编曲，到混音，到最后的母带处理，所有制作的知识全覆盖，如果您想学习一首驰放沙发音乐如何制作，这套教程一定非常适合您！",
      "price": 2690,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 35,
      "teacher_name": "KarleenHeong"
    },
    {
      "course_id": 24,
      "img": "course10.jpg",
      "name": "关于混响的一切（上篇）MIXING 混音系列课",
      "directions": "这次我们精选了几款最好用，品质最佳的混响插件 - Fabfilter Pro-R、Reverb (原生自带）、Valhalla Vintage Verb、Valhalla Room、Brainworx rooMS、UAD Pure Plate。\r\n\r\n通过不同的类型与设计理念，结合彼此互相的一起的学习与了解，接下来你会独自清晰明了的使用任何一款混响插件。使用它们为你的音乐增加漂亮的空间、光环、与浪漫。\r\n\r\n课程分为（上篇）、（中篇）、（下篇）三套设计，在此（上篇）中会讲到Fabfilter Pro-R这款经典的实际使用与原理。另外5款混响插件会出现在（中篇）与（下篇）课程中。",
      "price": 780,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 19,
      "teacher_name": "HongenZhu"
    },
    {
      "course_id": 25,
      "img": "course8.jpg",
      "name": "电子音乐制作｜高级进阶",
      "directions": "如果您已经入门，完成学习《Ableton Live 10 基础篇 一切从零开始》课程之后，就可以继续学习这套进阶课程了。这套教程会帮助您提升到另一个水平。\r\n\r\n深度探索ableton的高级功能；平行效果链，Automation 自动化，采样切片，Remix修正速度，音频包络等，为您的编曲与混音全面提升。专业的制作技巧与多种制作逻辑实现方法讲解。\r\n\r\n学习完本教程之后，可达到软件使用的精通级别，基本可满足常见电子音乐风格的制作需求。意思就是只要学完这两套课程《Ableton Live 10 基础篇 一切从零开始》和《Ableton Live 10 Advanced｜进阶篇高级精通》就可以很好的掌握并精通Ableton Live 10 对常见电子音乐风格制作的需求了。",
      "price": 700,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-27",
      "valid": 1,
      "teacher_id": 33,
      "teacher_name": "SteveGlazer"
    },
    {
      "course_id": 26,
      "img": "course3.jpg",
      "name": "60/106 | 系列合成器基础使用与音色设计",
      "directions": "此教程结合 Juno 60 、Juno106、Jupiter8、三款系列合成器讲解。出现在那个时代的经典声音，比如 Michael Jackson, Daft Punk, The Chemical Brothers, Madonna, Enya, Mr. Fingers, Moby, The Future Sound Of London, The Prodigy...等无数的唱片中。\r\n\r\n此合成器适用所有音乐风格制作。但尤其适合：SYNTHWAVE、RETROWAVE、AMBIENT、DEEP HOUSE、复古电子。\r\n\r\n我们在课程中掌握合成器基础原理，模拟合成器VCO、VCA、VCF，学习每一个参数旋钮，彻底掌握JUNO系列，制作属于我们自己的音色。",
      "price": 990,
      "up_date": "2023-07-18",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 34,
      "teacher_name": "MartinCohen"
    },
    {
      "course_id": 27,
      "img": "piano6.jpg",
      "name": "鋼琴Do Re Mi 入門課程",
      "directions": "提供給初級學習者，彈奏鋼琴的必備樂理、彈奏技巧，以及如何擁有正確的姿勢、維持手型。\r\n奠基於這些知識，練習音階：Ｃ大調、a小調，及樂曲的詮釋與演奏。\r\n\r\n課程共分為四個單元，從識譜、樂理開始建立觀念，循序漸進地講解至演奏技巧，並在影片中附上譜例供學生練習。",
      "price": 1700,
      "up_date": "2023-07-05",
      "shelf_time": "2023-07-28",
      "valid": 1,
      "teacher_id": 35,
      "teacher_name": "KarleenHeong"
    },
    {
      "course_id": 28,
      "img": "howto.jpg",
      "name": " 大气合成器基础与声音设计",
      "directions": "Omnisphere 绝对是全球音乐人TOP10最喜爱的合成器其一。据官方统计超过10000多个音色预制，效果器多达50多种经典模拟效果器，聚集几乎所有现代合成器的合成法，包括FM、环形调制、粒子合成调制、多谐波生成器、强大的ARP琶音效果，完美胜任任何一种音乐风格的制作！\r\n\r\n\r\n\r\n非常丰富的Soundsoures加上经典的声音波形，8通道最多达到32个音色层，足以实现你的任何天马行空的音色设计！\r\n\r\n尤其您对制作氛围类音乐，迷幻Pad，在电子音乐风格中常见类似Ambient、Drone、Chillout、Deep等音乐类型，Omnisphere将会非常棒，本课程将会非常适合您！",
      "price": 890,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 36,
      "teacher_name": "RomaWaterman"
    },
    {
      "course_id": 29,
      "img": "course4.jpg",
      "name": "波表合成器基础原理及音色制作",
      "directions": "Wavetable 合成器是 Ableton Live 10 以上的版本，原生自带的波表合成器，界面UI十分，操作十分，直观，极简，且非常之强大。无论你制作任何风格音乐，wavetable的声音设计可能无限，我们深入合成器原理，入门操作全解析；这一次，完全透彻搞懂合成器吧！\r\n\r\n我们从发声源头振荡器；到正弦方三角锯齿波；滤波器所有常见种类；LFO低频振荡器；ADSR声音包络状态；Matrix矩阵调制 ；And More！\r\n\r\n我们使用非常易懂并且，非常好理解的举例，加深学者的学习印象。让您灵活并且熟练深入合成器原理并且操作他们。",
      "price": 1200,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 37,
      "teacher_name": "TrueFireGuitarLesson"
    },
    {
      "course_id": 30,
      "img": "course6.jpg",
      "name": "FM合成器基础使用与音色制作",
      "directions": "音乐基础理论会帮助你飞的更高，帮助你对音乐有更深的理解，最后超越乐理本身，并不被所谓的“乐理知识”框架所束缚。\r\n\r\n乐理像是音乐的数学几何，也像是语言里面的语法，任何一种我们常听到的电子音乐风格都离不开他，他会帮助你对编曲和混音的直接提升；所以这是一名合格的、专业的音乐人必修的技能。\r\n\r\n本课程的设计以简单、通俗易懂、实用的方式讲解，结合常见电子音乐风格：Hip-Hop、R&B、Trance、Deep House、Pop中的调式，和声，和声走向，旋律等知识结构进行分析，是很好的初学者入门的选择。",
      "price": 2100,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 38,
      "teacher_name": "LessonPros"
    },
    {
      "course_id": 31,
      "img": "piano7.jpg",
      "name": "流行鋼琴演奏零基礎入門課程（五線譜教學）",
      "directions": "零基礎鋼琴自學教程\r\n\r\n基於西方通用五線譜教學藍本開發，循序漸進，30課時掌握基礎演奏；\r\n\r\n練習選曲貼合當代聽眾愛好，《卡農》、《夢中的婚禮》、《夜的鋼琴曲》、《雨的印記》、《菊次郎的夏天》……彈妳所愛，告別枯燥學習。\r\n\r\n\r\n妳將會學習\r\n\r\n1、五線譜記認，初步做到有譜就能彈；\r\n\r\n2、踏板、跳音、琶音、八度雙音等常用鋼琴演奏技巧；\r\n\r\n3、流行歌曲雙手和弦伴奏方法；\r\n\r\n4、音階、音程、和弦構成、和弦轉位等基礎樂理知識；",
      "price": 990,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 34,
      "teacher_name": "MartinCohen"
    },
    {
      "course_id": 32,
      "img": "course1.jpg",
      "name": "R&B Trapsoul｜完整制作｜灵魂陷阱",
      "directions": "Trap into your 灵魂.\r\nTrap into your 身体.\r\nTrap into your 脑海.\r\nTrap into your 空.\r\n\r\nR&B的和声经常使用Maj7 /Min11 /Add2 /Sus246，并且添加转位与省略。使其Sexy！在加上Drake很喜欢用的Reese Bass，Trap中常会出现的Flying Hats & Dope Snare，充满欲望与灵魂陷阱的氛围就被创造出。",
      "price": 1200,
      "up_date": "2023-07-06",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 22,
      "teacher_name": "JasonAllen"
    },
    {
      "course_id": 33,
      "img": "course2.jpg",
      "name": "FM合成器基础使用与音色设计",
      "directions": "”一款非常有品味的合成器“\r\n\r\nOperator是一款Ableton原生自带的合成器，具有极高的声音品质、逻辑算法、细节处理。\r\n\r\n拥有多种；FM合成、减法合成、加法合成集聚一身的Operator，也受非常多Sound Designer和大牌电子音乐人的喜爱。\r\n\r\n适合所有音乐风格。\r\n\r\n我们从每一个参数开始，了解控制逻辑与改变FM调制或者减法合成，使用算法创造不同声音感觉。内置波形制图，可以自己画出不同的基数与偶数谐波，可能简单的一个小动作就会改变整体的声音。再重复一次，这是一款非常品质的合成器哦！",
      "price": 1500,
      "up_date": "2023-07-06",
      "shelf_time": "2023-07-26",
      "valid": 1,
      "teacher_id": 23,
      "teacher_name": "MakeProMusic"
    },
    {
      "course_id": 34,
      "img": "course15.jpg",
      "name": "合成器基础使用与音色设计",
      "directions": "戴夫·史密斯（Dave Smith)）出生于美国加州的旧金山，这位被许多人称为 \"MIDI之父 \"的人在他24岁的时候就开始了Sequential Circuits的工作。1977年，他设计并发布了世界上第一个可编辑的复音合成器Prophet-5，也是第一个在微处理器上运行的乐器，这将改变世界。  Prophet v3的声音品质极佳，适合制作Ambient氛围音乐，电子舞曲，House Music，经典的模拟界面控制起来非常的舒适。我们了解他的每一次参数与旋钮，当然如果您有Prophet的硬件真家伙，看完这套教学，你将会彻底使用它！",
      "price": 1200,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 48,
      "teacher_name": "LaciMorgan"
    },
    {
      "course_id": 35,
      "img": "course12.jpg",
      "name": "合成器基础使用与音色制作",
      "directions": "Arturia公司以Minimoog建模，为大家模拟了70年代那种独特复古的声音，从标志的放克LEAD、到90年代中期匪帮说唱的嗡鸣声（Whistle Synth Lead)，无处不在的 MiniMoog一直以其肥厚的存在而闻名超过4个十年。\r\n\r\n通过与鲍勃·穆格（Bob Moog）的合作，Arturia公司重新创建了他70年代初合成器的传奇界面，这一传奇界面受到了几代音乐家的喜爱。\r\n\r\n我们能想到的风格像是Hiphop、G-funk、Funk等音乐中出现的经典moog bass。或是清晰有力浑厚的氛围，这都是来自moog的声音。",
      "price": 2100,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 49,
      "teacher_name": "JakobPuchmayr"
    },
    {
      "course_id": 36,
      "img": "course13.jpg",
      "name": "2300",
      "directions": "从Uplifting和Progressive，到嬉皮的Goa、再到酸性的Acid和迷幻的Psy；在广阔的Trance音乐宇宙中分类非常丰富。\r\n\r\n这次我们带来了融合Trance、Trap、Pop三种元素的最新教程。从作曲、到编曲、混音以及母带制作，完整体现。\r\n\r\n如何巧妙的将三种风格融入成一首音乐中？Intro段落的设计、Build-Up风格转换、音乐感觉的连接与递进。在这套课程中将会全部的展示给大家！\r\n\r\n注意：本套教程中包含工程采样音频文件可下载，供学习使用。",
      "price": 1300,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 50,
      "teacher_name": "JonathanPeters"
    },
    {
      "course_id": 37,
      "img": "course14.jpg",
      "name": "合成器使用与音色制作",
      "directions": "Ana就像她的名字一样：一种冰冷、迷幻、充满神秘、黑暗、自由、在地平线、带有曙光的声音。适用风格：全部EDM电子音乐风格性格偏好：Trance、Psy Trance、Chillout、Progressive House、Deep House。我们了解每一个参数、旋钮，从振荡器、到Filter、多段包络控制、效果器。ANA2内置3台OSC和3台Sampler，提供非常多的预制音色与波形。进入ANA2的世界，你会爱上这款合成器。",
      "price": 2000,
      "up_date": "2023-07-05",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 43,
      "teacher_name": "FuadMurad"
    },
    {
      "course_id": 38,
      "img": "course16.jpg",
      "name": "Pianoforall - Incredible New Way To Learn Piano &amp; Keyboard",
      "directions": "Pianoforall is one of the most popular online piano courses with over 400,000 students worldwide  Now ANYONE Can Learn Piano or Keyboard               Imagine being able to sit down at a piano and just PLAY - Ballads,  Pop, Blues, Jazz, Ragtime, even amazing Classical pieces? Now you can...  and you can do it in months not years without wasting money, time and  effort on traditional Piano Lessons.   An Incredible Set of Videos and ebooks (25 hours of video, 10 carefully structured ebooks)               Pianoforall is specially designed to take complete beginners to an  intermediate level faster than any other method. You start with popular  rhythm style piano (think of artists like Lennon & McCartney, Elton  John, Billy Joel,  Barry Mannilow, Lionel Ritchie, Coldplay and so on) which means you get to sound like a pro right from the  start.                You then expand step-by-step into Ballad style, Blues, Jazz, Ragtime,  Improvisation and creating your own melodies. You will even learn how to  read music AS you learn how to ‘play-by-ear’ and eventually you will be  able to play some amazing Classical pieces. ",
      "price": 1170,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-24",
      "valid": 1,
      "teacher_id": 40,
      "teacher_name": "EricArceneaux"
    },
    {
      "course_id": 39,
      "img": "course17.jpg",
      "name": "Complete Guitar Lessons System - Beginner to Advanced",
      "directions": "Would You Like to Eliminate Every Struggle That You Are Faced With When Starting to Play Guitar?         This course is your \"Ticket\" to playing guitar.  It is the most direct and to the point complete online guitar course.   Follow the Videos in the Exact Same Order and You Will See a Huge Positive Change in Your Playing  306 Lectures/Videos with PDF Attachments  Over 40 hours of video  It's available on a PC or MAC and there is a iPad, iPhone and Android app ready to go!   Keeping track of which videos(lectures) you have already watched is a breeze.  Udemy has a great way of keeping track of your completed lessons(lectures).  The entire course is organized in step-by-step easy to follow layout         The more you practice the better you will get.  With the Right Practice style you will be able to witness fast results!          Erich's teachings are different than all of the other online teachers.  He has made it super easy to be successful at playing guitar.  All you have to do is follow the videos in order and put together some good practice habits.   Here is what Renee Martin had to say about Erich's Course: See reviews at the bottom.    \"WOW! 0 to 60 in 306 Lessons! ",
      "price": 1300,
      "up_date": "2023-07-13",
      "shelf_time": "2023-08-01",
      "valid": 1,
      "teacher_id": 41,
      "teacher_name": "RajivNarang"
    },
    {
      "course_id": 40,
      "img": "course18.jpg",
      "name": "Music Theory Comprehensive Complete! (Parts 1, 2, & 3)",
      "directions": "** UDEMY BESTSELLER **\r\n\r\nThis course is \"5-Star Certified\" by the International Association of Online Music Educators and Institutions (IAOMEI). This course has been independently reviewed by a panel of experts and has received a stellar 5-star rating.\r\n\r\n100% Answer Rate! Every single question posted to this class is answered within 24 hours by the instructor.\r\n\r\n\r\nWelcome to the COMPLETE Music Theory Guide!\r\n\r\nThis is a class designed for the average person who is ready to take music theory (or music interest) and turn it into a usable skill. Whether you are an active musician or an aspiring musician, this class is perfect for you.\r\n\r\nFor years I've been teaching Music Theory in the college classroom. These classes I'm making for Udemy use the same syllabus I've used in my college classes for years, at a fraction of the cost. I believe anyone can learn Music Theory - and cost shouldn't be a barrier.\r\n\r\nMy approach to music theory is to minimize memorization. Most of these concepts you can learn by just understanding why chords behave in certain ways. Once you understand those concepts, you can find any scale, key, or chord that exists. Even invent your own. If you've tried to learn music theory before, or if you are just starting out - this series of courses is the perfect fit.",
      "price": 1500,
      "up_date": "2023-07-06",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 42,
      "teacher_name": "MusiciansInspired"
    },
    {
      "course_id": 41,
      "img": "course19.jpg",
      "name": "Music + Audio Production in Logic Pro X - The Complete Guide",
      "directions": "Want to produce professional quality music and audio using Logic Pro X?\r\n\r\nUPDATED FOR VERSION 10.4\r\n\r\nBy the end of this course, you will be able to use every feature of Logic Pro X with confidence. This will allow you to quickly and easily write, edit, mix and produce great music that sounds professional, polished and impressive.\r\n\r\nEverything you need to know about music production in Logic Pro X\r\n\r\nSpend less time fighting with the DAW and more time focusing on the music.\r\n\r\nDiscover the quickest and easiest ways to write music in Logic Pro.\r\n\r\nConsistently produce mixes that sound clear, powerful, and professional by following my step-by-step mixing system using stock plugins.\r\n\r\nLearn how to put together a song in under 120 seconds using Apple Loops and MIDI (even if you don’t know how to write music).\r\n\r\nStay in the creative flow and prevent mistakes from ruining your workflow and inspiration (by avoiding the common pitfalls that most people fall into when producing music in Logic Pro).\r\n\r\nWrite more music and edit more audio in less time by learning the little-known features of Logic Pro that will significantly speed up your workflow.\r\n\r\nLearn how to record and edit audio to a professional standard in less time than any other DAW (because Logic Pro is super easy to use).",
      "price": 1300,
      "up_date": "2023-07-04",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 43,
      "teacher_name": "FuadMurad"
    },
    {
      "course_id": 42,
      "img": "course20.jpg",
      "name": "Music Production in Logic Pro X - The Complete Course!",
      "directions": "Start Creating and Producing Music with Logic Pro X!\r\n\r\nThis course is all about Music Production in Logic Pro X, which is software for music composition and production for OS X\r\n\r\nWith over 50 hours of video, this music course is JAM PACKED with information to help you learn Logic Pro X and help you improve at Music Production\r\n\r\nLogic Pro X is the leading Digital Audio Work Station for Apple Mac users and it's used across professional studios and bedrooms worldwide. Learning how to use your DAW correctly will dramatically improve the quality of your music and the speed you create it\r\n\r\n\r\n\r\nBROUGHT TO BY BEST-SELLING MUSIC PRODUCTION INSTRUCTOR TOMAS GEORGE\r\n\r\nIf you are looking for a course that will show you Music Production in Logic Pro X then this is the course for you!\r\n\r\n\r\n\r\nWhat makes me qualified to teach you?\r\n\r\nMy name is Tomas and I have an MMus Masters Degree in Music Production and a BA(Hons) Degree in Music Composition. I’m also the creator of some of the world's most popular music production courses - with over 290,000 students and thousands of 5-star reviews like these ones:\r\n\r\nQuick efficient, to the point. Solid information fed fast. Good work! - Mark C.\r\n\r\nThis is an amazing course that provided much-needed clarification on what production is all about. The instructions were clear and Tomas is very engaging. Thank you - Catherine P.\r\n\r\nTomas was clear and concise, really useful information for me to write down before I buy Logic Pro X so now I feel a lot less intimidated when opening logic for the first time tomorrow - Simon B.\r\n\r\nVery clear and concise, exactly what I was looking for. I also appreciate that I can watch things being done while they're being explained. - Nikki G.",
      "price": 670,
      "up_date": "2023-07-05",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 44,
      "teacher_name": "TomWorth"
    },
    {
      "course_id": 43,
      "img": "course21.jpg",
      "name": " Learn to play HARMONICA, the easiest instrument to pick up!",
      "directions": "*updated February 2023*  Udemy's BEST SELLING ultimate and complete harmonica course - with over 40,000 students.\r\n\r\nNo harmonica experience? No problem, I'll walk you through nice and slow.\r\n\r\n\r\n\r\nDid you ever fool around with a harmonica as a kid?\r\n\r\nWould you like to learn to play the harmonica better now?\r\n\r\nDo you play guitar, piano, ukulele or are you a singer and want to add harmonica into your act?\r\n\r\nDo you want an instrument that's easy to pick up, store and carry?\r\n\r\nDid you inherit a harmonica and want to pay respect to the original owner??\r\n\r\nWhere you inspired by Bob Dylan, Sonny Terry, Little Walter, Mick Jagger?\r\n\r\nWould you like to play in a church, campfire, band or jam session?\r\n\r\nDo you think harmonica will help with COPD or other health issues?\r\n\r\nIs this a retirement 'bucket-list' project?",
      "price": 1690,
      "up_date": "2023-07-04",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 45,
      "teacher_name": "ArthurBird"
    },
    {
      "course_id": 44,
      "img": "course22.jpg",
      "name": "Read Music FAST!",
      "directions": "\"I just learned in 2.5 hours what I have been shying away from for 15 years.\" - Aleister\r\n\r\n\"Don't even think about any other course, this is the one. I would gladly give more stars if available.\" - Adam Robson\r\n\r\n\"WOW! The instructor's method and exercises meant I was nailing five octaves of note reading in just a day! ... Excellent production quality, excellent graphics, clear explanation. ... I'd give it ten stars if I could.\" - Mark S A Smith\r\n\r\n\"After the course, I can assure you that you will not be seeing a music sheet the same way again.\" - Kathleen Rosario\r\n\r\n\"I really can't say enough good things about this class.\" - Jim Thomason\r\n\r\n\"Incredible.\" - Dadang Setiawan\r\n\r\n\"... can't believe how easy that was!\" - Bryan\r\n\r\n\"He makes it stupid easy\" - Alex Kilker\r\n\r\n\"His technique works!\" - Jason Cooksey\r\n\r\n\"10/10 would recommend to a friend.\" - Sheila Vega\r\n\r\n\"Helpful even for non beginners\" - Nikola\r\n\r\nSight reading is one of the hardest aspects of learning to play the piano, and it's universally badly taught. This course uses a unique method to teach you how to read any note on the piano keyboard quickly and easily, so that you can then tackle any piano course with confidence. It will also help if you've already started learning piano but are struggling to read the notes (e.g in the bass clef).",
      "price": 570,
      "up_date": "2023-07-04",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 46,
      "teacher_name": "PatrickOMalley"
    },
    {
      "course_id": 45,
      "img": "guitar11.jpg",
      "name": "The Professional Guitar Masterclass",
      "directions": "Want the very best guitar lessons on the web?  With pro instructor feedback??I am an award-winning GIT grad, a 15+ year professional guitarist with 70k+ students, and the founder of Guitargate - sponsored by Paul Reed Smith Guitars. ",
      "price": 1200,
      "up_date": "2023-07-07",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 47,
      "teacher_name": "IliyaRyakhovskiy"
    }
  ]
  // useEffect(() => {

  //   // 获取课程数据
  //   // fetch('https://nodal-buckeye-404908.de.r.appspot.com/api/course')
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     setCourseData(data)
  //   //     const sortedData = sortCourseData(data, sortType)
  //   //     const filteredData = filterCourseData(
  //   //       sortedData,
  //   //       startDate,
  //   //       endDate,
  //   //       priceRange
  //   //     )
  //   //     setSelectedCourses(filteredData)
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error('发生错误：', error)
  //   //   })
  // }, [sortType, startDate, endDate, priceRange])

  // 處理排序
  const sortCourseData = (data, type) => {
    let sortedData = [...data]
    switch (type) {
      case '日期由新到舊':
        sortedData.sort((a, b) => new Date(b.up_date) - new Date(a.up_date))
        break
      case '日期由舊到新':
        sortedData.sort((a, b) => new Date(a.up_date) - new Date(b.up_date))
        break
      case '價錢由高到低':
        sortedData.sort((a, b) => b.price - a.price)
        break
      case '價錢由低到高':
        sortedData.sort((a, b) => a.price - b.price)
        break
      default:
        break
    }
    return sortedData
  }

  // 處理篩選
  const filterCourseData = (data, start, end, priceRange) => {
    let filteredData = [...data]

    if (start && end) {
      const startTimestamp = Number(new Date(start))
      const endTimestamp = Number(new Date(end))

      filteredData = filteredData.filter((courseData) => {
        return (
          Number(new Date(courseData.up_date)) <= endTimestamp &&
          Number(new Date(courseData.up_date)) >= startTimestamp
        )
      })
    }

    filteredData = filteredData.filter(
      (courseData) =>
        courseData.price >= priceRange.min && courseData.price <= priceRange.max
    )

    return filteredData
  }

  const handleSort = (type) => {
    setSortType(type)
  }

  const handleStartDateChange = (date) => {
    setStartDate(date)
  }

  const handleEndDateChange = (date) => {
    setEndDate(date)
  }

  const handlePriceRangeChange = (min, max) => {
    setPriceRange({ min, max })
  }

  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = selectedCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  )
  useEffect(() => {
    setCourseData(data)
    const sortedData = sortCourseData(data, sortType)
    const filteredData = filterCourseData(
      sortedData,
      startDate,
      endDate,
      priceRange
    )
    setSelectedCourses(filteredData)
  }, [sortType, startDate, endDate, priceRange])


  const cards = (
    <>
      <div className="row row-cols-2 w-150">
        {currentCourses.map((course, index) => (
          <div key={index} className="col d-flex justify-content-center">
            <div className={`${styles.productcard}`} key={course.course_id}>
              <CourseCard
                course_id={course.course_id}
                name={course.name}
                teacher={course.teacher_name}
                price={course.price}
                img={course.img}
                directions={course.directions}
              />
            </div>
          </div>
        ))}
      </div>
      <Custompagination
        product={courseData}
        perPage={coursesPerPage}
        setPage={setCurrentPage}
        page={currentPage}
      />
    </>
  )

  return (
    <FrameworkLeftRight
      leftContent={
        <EventAsideContentMo
          type={'課程'}
          subtitle={'所有課程'}
          choice={[]}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
          onPriceRangeChange={handlePriceRangeChange}
        />
      }
      rightContent={
        <RightContent
          headerText="全部課程"
          eventType="課程"
          subtitle="所有課程"
          regionChoices={[]}
          allEvents={coursesPerPage}
          perPage={coursesPerPage}
          setPage={setCurrentPage}
          page={currentPage}
          cards={cards}
          onSortSelect={handleSort}
        />
      }
    />
  )
}
