import React, { useState, useEffect } from 'react'
import List from '../list'
import MbList from '../mb-list'
import Framework from '@/components/share/framework/framework-left-right'
import Card from './card'
// 取得會員資料並傳給list用
import { useAuthJWT } from '@/hooks/use-auth-jwt'
import axios from 'axios'
// 清單
import { ConfigProvider, Tabs, Empty } from 'antd'

export default function Collect() {
  const { authJWT, setAuthJWT } = useAuthJWT()
  // 讀取中狀態
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState({
    "message": "success",
    "code": "200",
    "user": {
      "id": 1,
      "name": "Emma",
      "account": "emma_lee123",
      "password": "12345",
      "gender": "male",
      "birthday": "1990-09-12",
      "email": "emma_lee@example.com",
      "address": "台北市中山區林森北路123號",
      "phone": "0912355555",
      "created_at": "2023-04-20 19:53:21",
      "status": "1",
      "photo": "boy_avatar_icon_148455.png"
    }
  })
  // 取的user資料
  // const getUserData = async (id) => {
  //   const res = await axios.get('https://nodal-buckeye-404908.de.r.appspot.com/api/users/' + `${id}`)

  //   if (res.data.message === 'success') {
  //     // console.log(res.data.user)
  //     setUserData(res.data.user)
  //   }
  // }
  // useEffect(() => {
  //   const id = authJWT.userData.id
  //   // console.log(id)
  //   getUserData(id).then(() => {
  //     setIsLoading(false)
  //     getAlbumCollect(id)
  //     getCollectEvent(id)
  //     getCollectCourse(id)
  //   })
  // }, [authJWT.userData])
  const [albumData, setAlbumData] = useState([
    {
      "id": 1,
      "member_id": 1,
      "album_id": 7,
      "title": "倔強",
      "artist": "五月天",
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
      "id": 2,
      "member_id": 1,
      "album_id": 24,
      "title": "Curtain Call: The Hits",
      "artist": "Eminem",
      "label": "Interscope Records",
      "format": "CD",
      "country": "US",
      "language_id": 2,
      "released_date": "2005-12-06",
      "year": 2005,
      "cover_image": "R-576533-1393826662-6945.jpg",
      "discogs_id": 576533,
      "description": "哈傳奇上演精采大結局?! 精選阿姆聽了再說!!  流行史上最暢銷的嘻哈藝人 全球逼近6700萬張的唱片銷售紀錄  網羅\"Lose Yourself\"、\"Without Me\"、\"Stan\"、\"The Real Slim Shady\"、\"Just Lose It\"、\"Like Toy Soldiers\"等6首英國金榜冠軍曲  同時收錄\"When I’m Gone\"等3首2005歲末全新創作曲   原本是黑人歌手最拿手的嘻哈音樂，竟然在一個白人歌手手中創造了巔峰盛世?一個嘻哈歌手可以成為主宰流行樂壇的超級巨星?阿姆做到了!這位底特律白人小子創造了嘻哈音樂的當代傳奇，但是，就在這段傳奇熱烈上演時，他老兄卻端出精選輯【Curtain Call-The Hits】，是覺得該見好就收?還是已經倦勤?這段嘻哈傳奇現在就要上演精采大結局了嗎?這些問題，尚未揭曉，但是，可以確定的是，當代樂壇要是少了他，絕對會變得粉無趣!!   阿姆把超上口的流行音樂創作模式套用在硬式饒舌/嘻哈風格中，將饒舌/嘻哈變成全球化的音樂，並進而興起所謂的阿姆現象、痞子文化，在他時而嘻笑怒罵、憤世嫉俗、屌兒啷噹、玩世不恭，忽而卯起來嚴詞痛批的唱作中，常會讓人不知該用怎樣的心情去切入，他自己都常說，別把他的歌曲聽得太深入，更不要對號入座，大家只要聽得開心就好。  從阿姆99年晉升主流樂壇以來，總計創造了『The Marhsall Mathers LP』、『The Eminem Show』、『Encore』等3張冠軍與1張亞軍專輯『Slim Shady LP』，累積獲得30張金唱片與311張白金唱片銷售認證，連同他與哥兒們所組的D-12的2張專輯以及領銜主演的電影「街頭痞子」原聲帶，總計締創了全球逼近6700萬張銷售紀錄。他的創作才華更為他獲得1座奧斯卡、9座葛萊美、4座全英與全美音樂獎、9座MTV音樂錄影帶大獎與6座MTV歐洲音樂獎。  精選大碟【Curtain Call-The Hits】網羅阿姆歷年來13首暢銷曲以及包括最新單曲\"When I’m Gone\"在內的3首全新創作曲，其中包括蟬聯全美流行榜12週冠軍，榮獲奧斯卡最佳電影主題曲的\"Lose Yourself\";勇奪英、美冠、亞軍，2002年榮獲4座MTV音樂錄影帶大獎的搞笑作\"Without Me\";深度刻劃歌迷瘋狂崇拜偶像心理的英國冠軍曲\"Stan\";對布蘭妮、克莉絲汀等藝人大開炮，勇奪2000年2座MTV音樂錄影帶大獎作\"The Real Slim Shady\";MV中演出柯林頓總統偷情事件之作\"My Name Is\";描述個人走出成長傷痕，獲英、美Top4的感人好歌\"Cleanin’ Out My Closet\";惹毛麥可傑克森的英國冠軍曲\"Just Lose It\"，還有分別精采取樣Aerosmith招牌作\"Dream On\"、流行女歌手Martika成名曲\"Toy Soldiers\"的勵志小品\"Sing For The Moment\"、痛陳嘻哈恩怨亂象的\"Like Toy Soldiers\"。   不管阿姆到底要不要退休，這張精選大碟先聽了再說!",
      "price": 426,
      "stock_num": 1,
      "created_at": "2023-07-12 09:09:48",
      "valid": 1
    },
    {
      "id": 3,
      "member_id": 1,
      "album_id": 33,
      "title": "Up!",
      "artist": "Shania Twain",
      "label": "Mercury",
      "format": "CD",
      "country": "US",
      "language_id": 2,
      "released_date": "2002-11-19",
      "year": 2002,
      "cover_image": "R-6134813-1504021393-7209.jpg",
      "discogs_id": 6134813,
      "description": "　　隨著音樂旅程的延續，仙妮亞唐恩不斷創造出傲人的傳奇，而最新的一頁就記載在「UP!」這張專輯裡。繼上張專輯「回到我身邊Come On Over」創造出全球三千四百萬張的銷售佳績後，「UP!」這張全新美聲專輯終於在萬眾矚目下現身。\r\n　　新專輯會延續上一張的好成績嗎？當然。對仙妮亞迷來說，最大的福音莫過於看到她又征服了一個令人心動且未經發掘的音樂版圖，單曲「Im Gonna Getcha Good!」為這張不凡專輯先聲奪人，讓歌迷在聽新歌的同時，也能重溫對過去每張專輯的記憶。與過去的聲音相比，新專輯中仙妮亞的歌唱技巧有了很大的突破，即使仙妮亞在音樂世界已經擁有無可撼動的天后級地位，對她來說，她仍然試圖創新求變、自我突破。在這張專輯完成的同時，仙妮亞也達成一個深具挑戰性的里程碑。\r\n(https://www.books.com.tw/products/0020086262)",
      "price": 479,
      "stock_num": 2,
      "created_at": "2023-07-12 09:42:04",
      "valid": 1
    },
    {
      "id": 4,
      "member_id": 1,
      "album_id": 45,
      "title": "Fly",
      "artist": "Dixie Chicks",
      "label": "Monument",
      "format": "CD",
      "country": "US",
      "language_id": 2,
      "released_date": "1999-08-31",
      "year": 1999,
      "cover_image": "R-927614-1451595365-4438.jpg",
      "discogs_id": 927614,
      "description": "★13座葛萊美獎肯定，全球銷售突破3000萬，流行/鄉村樂史最暢銷女子樂團，1999年第5張錄音室專輯，\r\n★美國&加拿大告示牌流行、鄉村榜冠軍專輯，全球超過千萬銷售\r\n(https://www.books.com.tw/products/0020192385)",
      "price": 319,
      "stock_num": 1,
      "created_at": "2023-07-12 10:21:35",
      "valid": 1
    },
    {
      "id": 5,
      "member_id": 1,
      "album_id": 60,
      "title": "Licensed to Ill",
      "artist": "Beastie Boys",
      "label": "Def Jam Recordings",
      "format": "Vinyl",
      "country": "US",
      "language_id": 2,
      "released_date": "1986-11-15",
      "year": 1986,
      "cover_image": "R-708787-1202592368.jpg",
      "discogs_id": 708787,
      "description": "采樣自重量級搖滾樂隊 Led Zeppelin 和 Black Sabbath 的作品，融入 Hip-Hop 的節奏，搭配製作人 Rick Rubin 經驗豐富的製作——Beastie Boys 的首張錄音室專輯《Licensed to Ill》將搖滾、 Punk 與 Hip-Hop 結合，定義了 80 年代晚期最前衛的音樂作品。在簡單的擊打節奏中，Beastie Boys 訴說的是紐約青少年的日常生活，正是他們對於流行文化的熱情與令人陶醉的文字遊戲，使這張專輯更加獨一無二。\r\n(https://music.apple.com/hk/album/licensed-to-ill/1440912031)",
      "price": 258,
      "stock_num": 1,
      "created_at": "2023-07-12 11:34:14",
      "valid": 1
    },
    {
      "id": 6,
      "member_id": 1,
      "album_id": 68,
      "title": "Devil Without A Cause",
      "artist": "Kid Rock",
      "label": "Atlantic",
      "format": "CD",
      "country": "US",
      "language_id": 2,
      "released_date": "1998-08-18",
      "year": 1998,
      "cover_image": "R-372960-1119523483.jpg",
      "discogs_id": 372960,
      "description": "Devil Without a Cause is the fourth studio album by American rapper Kid Rock. Released on August 18, 1998, the album saw Kid Rock continuing to develop his sound, and marked the finalization of his stage persona as a \"redneck pimp\". Additionally, the song \"Cowboy\" is seen as being instrumental in the development of the fusion genre country rap.\r\n\r\nDevil Without a Cause was a major commercial success. Spurred by the popularity of the single \"Bawitdaba\", the album sold over 14 million copies, and was certified diamond. The album also received critical acclaim for its genre-mixing sound.\r\n(wiki)",
      "price": 768,
      "stock_num": 1,
      "created_at": "2023-07-12 12:08:02",
      "valid": 1
    },
    {
      "id": 7,
      "member_id": 1,
      "album_id": 82,
      "title": "...Baby One More Time",
      "artist": "Britney Spears",
      "label": "Jive",
      "format": "CD",
      "country": "US",
      "language_id": 2,
      "released_date": "1999-01-12",
      "year": 1999,
      "cover_image": "R-495845-1207023608.jpg",
      "discogs_id": 495845,
      "description": "流行樂史上首支單曲和首張專輯同時獲得冠軍的第一位女藝人，銷售突破一千三百萬張首張個人專輯，加收台灣地區從未發行單曲〈Autumn Goodbye〉及原日本版獨家收錄版本〈Baby One More Time〉(Boy Wonder Radio Mix)\r\n\r\n小甜甜布蘭妮可說是九○年代後期偶像流行文化復甦的代表人物，Britney Spears不僅是歌壇上的國際超級巨星，更是流行文化的媒體焦點人物和新世代性感象徵！純真的守貞宣言和她火辣狂野的舞台形象造成的矛盾令她的行為舉止頗受爭議，卻也成為全球少女模仿的對象。自1999年以來，每張專輯都成功地攻上Billboard200的冠軍寶座，報章雜誌爭相報導她的一言一行，又是廣告媒體代言的寵兒，小甜甜的天后聲勢已在全世界引起一陣炫風。\r\n1998年〈...Baby One More Time〉音樂錄影帶中穿著天主教學校制服引誘犯罪的未成年少女形象，立刻引起大眾的矚目和討論，單曲一推出就勢如破竹地衝上Billboard#1，接著首張個人專輯《...Baby One More Time》果然一進榜就坐上冠軍寶座，且蟬聯了六週之久！在一波接一波的單曲〈(You Drive Me) Crazy〉（Top10）、夏日抒情曲〈Sometimes〉（#21）和〈From the Bottom of My Broken Heart〉（#14）的強力宣傳攻勢下，專輯銷售突破了一千三百萬張，Britney成為流行樂史上以首支單曲和首張專輯同時獲得冠軍的第一位女藝人！應邀擔任1999年MTV Europe Music Awards頒獎典禮演出嘉賓的Britney，更風光抱走了Best Female Artist、Best Breakthrough Act、Best Pop Act和Best Song（...Baby One More Time）四座大獎。\r\n專輯的成功除Britney的個人魅力外，善於打造偶像的幕後主腦人物Max Martin功不可沒。1999年復古風盛行，Max精準地以加入rap元素變化後的dance-pop為主，自然和諧悅耳的抒情曲為輔，易唱記憶度高的副歌、討喜的旋律和Euro-dance的節奏，融合成一張復古風味獨創性十足的專輯。這張Britney Spears初試啼聲即一鳴驚人的作品，絕對適合喜歡流行的新世代樂迷們收藏！\r\n(https://www.books.com.tw/products/0020090830)",
      "price": 439,
      "stock_num": 1,
      "created_at": "2023-07-12 13:38:03",
      "valid": 1
    },
    {
      "id": 8,
      "member_id": 1,
      "album_id": 84,
      "title": "The Marshall Mathers LP",
      "artist": "Eminem",
      "label": "Aftermath Entertainment",
      "format": "CD",
      "country": "US",
      "language_id": 2,
      "released_date": "2001-06-01",
      "year": 2001,
      "cover_image": "R-142270-1408878908-2467.jpg",
      "discogs_id": 142270,
      "description": "2000年最具話題性、人人必備之饒舌大賤碟！\r\n前無古人後無來者,白人饒舌阿姆出頭天！\r\n\r\n從迷失的青少年荒唐生活被饒舌悍將德瑞博士延攬至旗下，被SPIN、Vibe等雜誌讚為「不凡的饒舌歌手」- -來自底特律的饒舌新聲帶阿姆,挾著以本名為專輯名稱的第2張完全大碟【The Marshall Mathers LP/超級大痞子】 再現個人說唱本事,先在英國金榜空降專輯榜亞軍及舞曲榜冠軍,接著在Billboard流行專輯榜上擠下小甜甜布蘭妮的冠軍寶座並蟬聯8週冠軍。阿姆不只是一個白人饒舌樂手,他是一個現象：儘管圍繞在他身旁的風波不斷、新聞不斷,新輯依舊在英美賣得嚇嚇叫！\r\n\r\n首輯『the Slim Shady LP/微暈』在葛萊美獎上風光囊括「最佳饒舌歌手」、「最\r\n佳饒舌專輯」2項饒舌大獎、毫不領情的阿姆雖然硬是在\"The Real Slim Shady\"歌池中擺明對葛萊美獎百般不屑，卻依舊風光奪得本屆葛萊美獎3項大獎，想必那些被阿姆臭罵卻又得表現出風度的評審委員們，一定是對他又愛又恨。在美國大出鋒頭的阿姆，也在全英音樂獎再獲「最佳國際男歌手」之殊榮！Rap詞間充滿譏諷娛樂圈名人(當紅偶像布蘭妮、克莉絲汀、超級男孩、新好男孩和風波不斷的珍妮佛洛佩茲和吹牛老爹情侶檔都被點名)、鼓吹暴力仇恨、挑釁同性戀族群甚至罵盡所有人(包括自己、老婆、媽媽和上帝)，有人對他恨得牙癢癢、有人則對他的大放厥詞直呼過癮。此輯仍由啟蒙恩師德瑞博士包辦製作(只是,連他也在阿姆的嘲弄名單中),首支單曲\"the Real Slim Shady/超級大痞子\"，被Q、NME、SPIN等專業雜誌評選為2000年「年度最佳單曲」NO.1！犀利的詞彙和針鋒相對的挑釁字眼令眾人爭議不斷! 描寫頭殼壞去、對阿姆神般崇敬的超級歌迷的第3支單曲\"Stan/屎蛋\"，再度空降英國金榜冠軍，並被NME音樂月刊喻為：「..輯中最正點單曲！」！\r\n(https://www.books.com.tw/products/0020110104)",
      "price": 429,
      "stock_num": 2,
      "created_at": "2023-07-12 13:43:40",
      "valid": 1
    },
    {
      "id": 9,
      "member_id": 1,
      "album_id": 90,
      "title": "Jagged Little Pill",
      "artist": "Alanis Morissette",
      "label": "Maverick",
      "format": "CD",
      "country": "US",
      "language_id": 2,
      "released_date": "1995-06-13",
      "year": 1995,
      "cover_image": "R-368023-1444138680-7653.jpg",
      "discogs_id": 368023,
      "description": "Jagged Little Pill is the third studio album by Canadian singer Alanis Morissette, released on June 13, 1995, through Maverick. It was her first album to be released worldwide. It marked a stylistic departure from the dance-pop sound of her first two albums, Alanis (1991) and Now Is the Time (1992). Morissette began work on the album after moving from her hometown Ottawa to Los Angeles, where she met producer Glen Ballard. Morissette and Ballard had an instant connection and began co-writing and experimenting with sounds. The experimentation resulted in an alternative rock album that takes influence from post-grunge and pop rock, and features guitars, keyboards, drum machines, and harmonica. The lyrics touch upon themes of aggression and unsuccessful relationships, while Ballard introduced a pop sensibility to Morissette s angst. The title of the album is taken from a line in the first verse of the song \"You Learn\".\r\n\r\nJagged Little Pill was a worldwide commercial success, topping the charts in thirteen countries. With sales of over 33 million copies worldwide, it is one of the best-selling albums of all time and made Morissette the first Canadian to achieve double diamond sales. Jagged Little Pill was nominated for nine Grammy Awards, winning five, including Album of the Year, making the then 21-year-old Morissette the youngest artist to win the top honor up to that point. Rolling Stone ranked Jagged Little Pill at number 69 on its 2020 list of \"The 500 Greatest Albums of All Time\".\r\n(wiki)",
      "price": 309,
      "stock_num": 2,
      "created_at": "2023-07-12 14:01:39",
      "valid": 1
    },
    {
      "id": 10,
      "member_id": 1,
      "album_id": 107,
      "title": "期待",
      "artist": "林志穎",
      "label": "Forward Music",
      "format": "CD",
      "country": "Taiwan",
      "language_id": 1,
      "released_date": "1996-12-05",
      "year": 1996,
      "cover_image": "R-15757420-1597240316-5228.jpg",
      "discogs_id": 15757420,
      "description": "《期待》為台灣歌手林志穎的第八張個人專輯，同時也是林志穎退伍後自立吉米工作室與豐華唱片合作的首張專輯，於1996年12月5日發行，共有10首曲目 。主打歌為《熱火》及《期待》、《告訴我你還在》。\r\n(wiki)",
      "price": 326,
      "stock_num": 1,
      "created_at": "2023-07-12 15:12:07",
      "valid": 1
    },
    {
      "id": 11,
      "member_id": 1,
      "album_id": 119,
      "title": "我要我們在一起",
      "artist": "范曉萱",
      "label": "Decca 福茂唱片",
      "format": "CD",
      "country": "Taiwan",
      "language_id": 1,
      "released_date": "1999-11-30",
      "year": 1999,
      "cover_image": "R-10833059-1511797313-3135.jpg",
      "discogs_id": 10833059,
      "description": "《我要我們在一起》，為范曉萱第5張華語流行專輯。也是范曉萱與福茂唱片合作的最後一張專輯，並且由范曉萱與其他音樂人擔任製作人，曲風除了有流行元素，還結合了搖滾、爵士等元素，封面還以大量螢光視覺藝術完全顛覆范曉萱出道時的形象，專輯風格前衛。\r\n(wiki)",
      "price": 355,
      "stock_num": 1,
      "created_at": "2023-07-12 16:00:40",
      "valid": 1
    },
    {
      "id": 12,
      "member_id": 1,
      "album_id": 158,
      "title": "Yankee",
      "artist": "米津玄師",
      "label": "Universal Music",
      "format": "CD",
      "country": "Japan",
      "language_id": 3,
      "released_date": "2014-04-23",
      "year": 2014,
      "cover_image": "R-13043011-1548128371-2690.jpg",
      "discogs_id": 13043011,
      "description": "在動漫界聞名已久的米津玄師，一手包辦作詞、作曲、編曲、編程、歌唱、演奏、混音，再加上動畫、專輯設計也獨力製作的驚人才華，第二張原創專輯「YANKEE」，傾聚新世代數位音樂爆發激力，全新組成的樂團形式的搖滾風格完美融合，凝縮米津下個舞台的濃厚15首歌曲，無法超越的流行與正面洋溢極彩色的專輯，風光問世!",
      "price": 650,
      "stock_num": 3,
      "created_at": "2023-07-13 11:32:22",
      "valid": 1
    }
  ])
  const [eventData, setEventData] = useState([
    {
      "id": 1,
      "member_id": 1,
      "event_id": 31,
      "event_management_id": 31,
      "images": "1200px630_large.png",
      "names": "2023 YOUNG BLOOD KILLIN LIVE",
      "dates": "2023-07-22",
      "location_id": 20,
      "price": 300,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "除了精彩表演外，當日的主頭戲亦會放於四隊RAP Crews的表演Battle，  到時每一位觀眾都手持神聖一票，揀出你最愛的隊伍！！  準備好你的耳朵及腳力，來觀賞當日一眾YOUNG BLOOD如何“Kill“現場氣氛！！！！",
      "longitude": 22.324097,
      "latitude": 114.2037757,
      "location_name": "Music Zone @ KITEC",
      "address": "香港九龍灣展貿徑1號",
      "region_id": 5,
      "region": "海外"
    },
    {
      "id": 2,
      "member_id": 1,
      "event_id": 49,
      "event_management_id": 49,
      "images": "YJH_FAN-Concert_KK官網-九宮格-1200x630px_large.png",
      "names": "2023 YONG JUN HYUNG FAN CONCERT",
      "dates": "2023-08-05",
      "location_id": 4,
      "price": 2600,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "出道十六年，與許多歌手一起激盪出抓耳好歌的龍俊亨，去年10月宣布成立新公司BLACK MADE娛樂，11月推出睽違四年的首張音樂作品《LONER》，再度一展傲人音樂創作天賦。為了與許久不見的歌迷共度美好周末，除了聽覺饗宴外，龍俊亨也將帶來更多有趣的互動環節，值得期待！",
      "longitude": 25.05992424,
      "latitude": 121.4494586,
      "location_name": "Zepp New Taipei (新莊宏匯廣場8F)",
      "address": "新北市新莊區新北大道四段3號8樓",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 3,
      "member_id": 1,
      "event_id": 40,
      "event_management_id": 40,
      "images": "0726_1200628_工作區域_1_large.png",
      "names": "凌元耕 / 林依霖&沙沙小樂團",
      "dates": "2023-07-26",
      "location_id": 14,
      "price": 500,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "【凌元耕】  我是機車少女主唱凌元耕將帶來非常特別的演出，用一台鋼琴演出樂團、個人歌曲，同時也將邀請機少團員上台合唱，歡樂氣氛不容錯過！     【林依霖&沙沙小樂團】  實已想不起第一次在小河岸表演是什麼時候了  只知道這十幾年來在小河岸的演出已經數不清  小河岸一路看著我們長大，經歷了我們各個的磨練、成長、認證  也終究到了畫下句點的一刻     7/26陪林依霖回到原點  一起歡送小河岸吧",
      "longitude": 25.01730253,
      "latitude": 121.5313313,
      "location_name": "公館河岸留言",
      "address": "台北市萬華區西寧南路177號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 4,
      "member_id": 1,
      "event_id": 39,
      "event_management_id": 39,
      "images": "S__12304510_large.png",
      "names": "溫蒂漫步 Wendy Wander “Have A Good Dream” Tour Finale in Hong Kong : the dawn",
      "dates": "2023-07-25",
      "location_id": 24,
      "price": 1900,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "破曉劃開新生的未知，  跟著黎明的曙光走，  迎來又是新的一天，全新的起點。  好夢終會清醒，wish you have a nice day.",
      "longitude": 22.31885653,
      "latitude": 114.1728688,
      "location_name": "旺角麥花臣場館",
      "address": "香港旺角奶路臣街38號",
      "region_id": 5,
      "region": "海外"
    },
    {
      "id": 5,
      "member_id": 1,
      "event_id": 33,
      "event_management_id": 33,
      "images": "1200628_large.png",
      "names": "阿丹玩球球 x 勁爆羅雷",
      "dates": "2023-07-22",
      "location_id": 22,
      "price": 600,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "勁爆羅雷是由羅雷，組成的綜藝樂團，秉持著認真做幹事的精神，在恆春的海邊正式成軍，他們的表演大多是喝醉後的即興演出，因此每次表演都是絕無僅有的，面對人生和歲月，他們有自己的風骨，在戲謔與感性間縮放自如，感化許多戒備又疏離的都市人與計程車司機，在各大公園與小吃店留下過無數的好評、啤酒罐與嘔吐物（羅雷有清掉）。  勁爆羅雷的樂手並不是每次都會全員到齊，他們有些是花錢請來的，有從交友App約過來的，也有從酒吧拐來的，還有一個是根本不會樂器上來裝模作樣的。  他們在Gay Bar表演過《少年ㄟ，欲叫無？》，也在黑道大哥的客廳唱過《香腸蒜頭》，在菲律賓、在曼谷、在石垣島，在某一個7-11前，都有可能出現他與團員略帶猥瑣的魚尾紋，他用著一雙打量上等牛肉的眼神盯著你不放，隨口唱起一些下流的黃歌。",
      "longitude": 25.04237216,
      "latitude": 121.5061377,
      "location_name": "河岸留言西門紅樓展演館",
      "address": "台北市萬華區西寧南路177號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 6,
      "member_id": 1,
      "event_id": 15,
      "event_management_id": 15,
      "images": "23_hebe_2cf6235150c51b978cedea919f778d42.jpeg",
      "names": "田馥甄2023一一巡迴演唱會台北最終場",
      "dates": "2023-08-05",
      "location_id": 9,
      "price": 800,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "盛裝時間的容器 滿溢想念的秘密  歷經曲折等待  終於一一相遇  藏在靈魂深處的心意  得來不易相聚的幸運  一期一會 一如我們初次相會  愛會來的  一 一 擁抱  一 一 珍重   一 一 不捨",
      "longitude": 25.05099176,
      "latitude": 121.5502162,
      "location_name": "台北小巨蛋",
      "address": "台北市松山區南京東路四段2號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 7,
      "member_id": 1,
      "event_id": 21,
      "event_management_id": 21,
      "images": "23_flesh_9e5486a89f9329dbe59ad076453a692e.jpeg",
      "names": "2023建宮蓋廟-五星級夜總會 FLESH TEMPLE-FIVE STAR CLUB",
      "dates": "2023-07-22",
      "location_id": 4,
      "price": 1800,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "2023建宮蓋廟-五星級夜總會  FLESH TEMPLE - FIVE STAR CLUB  建 宮 蓋 廟  宮 裡 太 開  蓋 演 多 來  廟 唱 說 大  夜 金 我 開  總 屬 臭 眼  會 樂 美 界   「建宮蓋廟」自 2016 年建立，當天廟門一開便有奇蹟，  感謝各路好漢能手相挺，廟中香火鼎盛無比。  血肉Live的魔力，人神共爽、鬼神和平。  因為有一樣的興趣，我們聚集在這裡；  因為聽一樣的音樂，鬼神都來mosh pit；  血肉五星級夜總會，歡迎您今夜的光臨。",
      "longitude": 25.05992424,
      "latitude": 121.4494586,
      "location_name": "Zepp New Taipei (新莊宏匯廣場8F)",
      "address": "新北市新莊區新北大道四段3號8樓",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 8,
      "member_id": 1,
      "event_id": 32,
      "event_management_id": 32,
      "images": "五周年音樂會_1200x630_large.png",
      "names": "黃奕儒 EZU《ROOM 720》五周年不插電音樂會",
      "dates": "2023-07-22",
      "location_id": 21,
      "price": 1000,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "歡迎來到ROOM 720  找個地方坐下吧  翻翻那些成為了歌詞的書  聽聽那些滋養了旋律的唱片  聽著他拿起木吉他隨意哼唱起  那些始於這個房間的歌…     ————————     Dear My Friend     好久不見。  距離上次專場過了一整年，一切都好嗎？  五年前的7/20，是我與你的起點。  出道五周年的時刻，  想邀請你進到我的創作起點——房間     在這裡，慢慢完成許多的里程碑；  桌上的筆記本填滿了靈感和想法；  有用MIDI音色堆砌出的簡單Demo；  有用舊吉他錄下的手機錄音。     無論如何，在這重要的時刻，  想在和你更近的距離，唱給你聽。",
      "longitude": 25.02191973,
      "latitude": 121.5352223,
      "location_name": "後台 BACKSTAGE CAFE",
      "address": "台北市大安區羅斯福路四段1號台大綜合體育館 2樓",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 9,
      "member_id": 1,
      "event_id": 4,
      "event_management_id": 4,
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
      "id": 10,
      "member_id": 1,
      "event_id": 25,
      "event_management_id": 25,
      "images": "kktix_new_large.png",
      "names": "《冰冰幫幫™ - 台中大型嘻哈聚會》",
      "dates": "2023-07-20",
      "location_id": 15,
      "price": 999,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "【錯過肯定後悔的2023最炸嘻哈演唱會】 本次活動即將獻上超過20位超豪華藝人陣容、完美的舞台活動呈獻，內行的都知道，《新嘻哈蝴蝶夢》三年來締造台北、台中、高雄秒殺Sold Out紀錄，台灣新世代嘻哈的誕生地，禁藥王、栗子、婁峻碩、Finesse'Boy 等人曾聯手掀翻過的舞台，台灣嘻哈的指標性活動，在高雄場結束之後，睽違了將近一年半，只能告訴你們，我們回來了，而這次的我們並不孤單，ICYGANG JEWELRY與BROYA ICEBOX即將締造歷史，首度合作，用嘻哈的力量炸翻台中",
      "longitude": 24.17742672,
      "latitude": 120.6233754,
      "location_name": "Legacy Taichung",
      "address": "台中市西屯區安和路117號",
      "region_id": 2,
      "region": "中部"
    },
    {
      "id": 11,
      "member_id": 1,
      "event_id": 43,
      "event_management_id": 43,
      "images": "台秋祭KKTIX-W1200H630_large.png",
      "names": "台秋祭2023",
      "dates": "2023-07-29",
      "location_id": 25,
      "price": 1800,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "【人不唱秋傲少年】     各位先生、女士  你們期待已久的  你們引頸期盼的  你各位萬眾矚目的「台中愛」，回來了！     不管是去年難忘的cypher  還是中氣十足的陣容  今年只會更大、更秋     不只要chill，更要趴哩趴哩！     2023台秋祭。正式上線  沒有最秋，只有更秋  這是一場秋到爆的音樂盛典     7月29日-7月30日台中驛鐵道文化園區  四舞台｜周邊活動｜市集     #中氣十足#台中愛 #趴哩趴哩  #人不唱秋傲少年",
      "longitude": 24.13703427,
      "latitude": 120.6848537,
      "location_name": "台中驛鐵道文化園區",
      "address": "台中市中區台灣大道一段1段1號",
      "region_id": 2,
      "region": "中部"
    },
    {
      "id": 12,
      "member_id": 1,
      "event_id": 1,
      "event_management_id": 1,
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
      "id": 13,
      "member_id": 1,
      "event_id": 36,
      "event_management_id": 36,
      "images": "yourock_宣傳-01_large.png",
      "names": "【Yourock2023 - 獨立音樂未來模式】無奇圖形",
      "dates": "2023-07-23",
      "location_id": 14,
      "price": 350,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "【Yourock2023 - 獨立音樂未來模式】  栽種音樂創作的新苗，培育表演藝術的嫩芽  河岸留言與河岸音造長年致力於發掘、訓練音樂產業的新晉人才，透過舉辦各式專業課程、講座與演出活動，打磨青澀稚嫩的原石，助長胸懷大志卻缺少機遇的樂人和樂團攬轡澄清、實踐心中的理想與渴望。  踏入 Yourock2023 的表演世界，欣賞初出茅廬而懵懂清新的樂團，在舞台上譜出他們的抱負與夢想，共同見證微小和緩的火苗逐漸茁壯盛大，燃燒、綻放屬於他們的光彩。     【無奇圖形】  感覺投入音樂就像是在判處無期徒刑的牢裡修煉，不知盡頭在何方，我們是一群無奇的音樂愛好者，在都市叢林中只是幾個平凡無奇的形狀，但渴望著我們的音樂在他人心中有著不凡的模樣，我們是無奇圖形，不知道我們的音樂對你來說會是什麼形狀呢？",
      "longitude": 25.01730253,
      "latitude": 121.5313313,
      "location_name": "公館河岸留言",
      "address": "台北市萬華區西寧南路177號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 14,
      "member_id": 1,
      "event_id": 29,
      "event_management_id": 29,
      "images": "20230623_小河岸_1920_1080_large.png",
      "names": "Plutato《太空郵輪》",
      "dates": "2023-07-21",
      "location_id": 14,
      "price": 550,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "一個由管樂、鍵盤和打擊樂手所組成的三重奏，風格以Jazztronia、ECM為主。在真實與合成樂器之間飛展想像力，努力探索音樂不同的可能性。 故事繞著都市光鮮亮麗之下的樸實生活，與太空浪漫又驚險的生活。沒有歌詞的引導，想像的空間如宇宙般寬廣，透過曲名和氛圍，每個人都可以有各自解讀，共鳴著自己的故事。 在建立和打破框架的循環中，用實驗的精神展現了旋律的優美 。我們每一場演出的手法都不一樣，為了帶給聽眾驚喜與溫度。 快跟著PLUTATO 一起去冥王星尋找馬鈴薯吧！",
      "longitude": 25.01730253,
      "latitude": 121.5313313,
      "location_name": "公館河岸留言",
      "address": "台北市萬華區西寧南路177號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 15,
      "member_id": 1,
      "event_id": 48,
      "event_management_id": 48,
      "images": "W1200H630_large.png",
      "names": "babychair: Live In Taipei",
      "dates": "2023-08-01",
      "location_id": 28,
      "price": 1200,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "babychair: Live In Taipei     來自馬來西亞的三人組合 梳理日常的慵懶音樂  沈浸式的復古聲響 創造時髦的浪漫氛圍  午後飄浮的果醬樂團 – babychair     從吉隆坡出發的三人樂團 – babychair ，串流足跡橫跨三大洲，佔據多國樂迷的耳朵。成軍不到三年的他們，默默參與許多主流歌手的幕後製作，低調又神秘的在2021年發行的專輯《Summertime》點聽次數突破千萬，極少出現在螢光幕前的 babychair ，將在2023年8月1日抵台演出，一起乘坐在 babychair 創造的溫潤世界，享聽一晚的悠閒。",
      "longitude": 25.04442466,
      "latitude": 121.5383984,
      "location_name": "NUZONE 展演空間",
      "address": "台北市大安區市民大道三段198號2樓",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 16,
      "member_id": 1,
      "event_id": 41,
      "event_management_id": 41,
      "images": "0727_1200628_工作區域_1_large.png",
      "names": "達卡鬧+桑梅絹《河岸上的排灣調調》",
      "dates": "2023-07-27",
      "location_id": 14,
      "price": 700,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "在排灣族群的部落旁多半會有河流經過，吸引男女老幼時常到河岸邊嬉戲遊玩，他們在河岸邊唱著歌謠，歌聲輕快地娛樂著大家。這樣不經意間，許多部落的歌曲也被傳唱開來，成為流行的旋律。  達卡鬧與桑梅絹，兩位來自排灣部落的創作歌手，也在這音樂的河流中相互扶持、共同成長。此刻，桑梅絹正全力籌備新專輯的發行，而達卡鬧則持續創作琉璃珠系列的音樂作品。然而，這又有何妨呢？  讓達卡鬧與桑梅絹這對排灣兄妹檔，在這都市的河岸上舉辦一場快樂的音樂同樂會吧！讓我們以排灣族的旋律，向那個滋養我們音樂能量的河流─「河岸留言」，表達感謝之情！  快邀請朋友一起來感受排灣調調帶來的力量和歡愉吧！就像那片部落旁的河岸一樣，滋潤著我們的靈魂，讓我們一同共鳴、一同快樂！",
      "longitude": 25.01730253,
      "latitude": 121.5313313,
      "location_name": "公館河岸留言",
      "address": "台北市萬華區西寧南路177號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 17,
      "member_id": 1,
      "event_id": 2,
      "event_management_id": 2,
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
      "id": 18,
      "member_id": 1,
      "event_id": 20,
      "event_management_id": 20,
      "images": "23_slippa12_a006fd9c614b80160d76e5dd2c82b222.png",
      "names": "2023 超犀利趴 12",
      "dates": "2023-07-22",
      "location_id": 13,
      "price": 4800,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "犀利12聲嘯   盛夏12光年 2023 SUPER SLIPPA  超犀利趴 12 12萬分期待  12萬分激動 12級大咖颶風開始躁動！ 7/22  7/23 ＠南港展覽館  今夏最大趴 準備HIGH到怕",
      "longitude": 25.05683516,
      "latitude": 121.6181266,
      "location_name": "南港展覽館",
      "address": "台北市南港區經貿二路1號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 19,
      "member_id": 1,
      "event_id": 46,
      "event_management_id": 46,
      "images": "1200628_large (4).png",
      "names": "Saya張惠春  《原來你一直都在》 小河岸同樂會",
      "dates": "2023-07-30",
      "location_id": 14,
      "price": 1100,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "這裡是我們的青春歲月 幾十年過去了 原來你一直都在... 這次很開心將在小河岸演出 這是我的第一次也是我的最後一次 是一個結束也是一個開始 這二十三年來 小河岸承載了多少哭與笑 更是醞釀出了多少閃亮星星 能成為其中一員 除了感恩的心~還有感謝有你~  七月三十日 我邀請了部落的弟弟妹妹們 一起和我分享小河岸這個舞台 在此也懷著感恩誠摯的心 歡迎大家一起來到小河岸 和我們共度一定是最美的夜晚 我一直都在 你們呢?  同樂會點名簿: - Saya - 原⺠開心男團 - 金曲布農男歌手 - 樂團大賽冠軍女主唱 - 天王天后指定合聲天使 - 金曲樂團吉他手 - 聲林之王御用打擊樂手 - 金曲新人御用貝斯手",
      "longitude": 25.01730253,
      "latitude": 121.5313313,
      "location_name": "公館河岸留言",
      "address": "台北市萬華區西寧南路177號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 20,
      "member_id": 1,
      "event_id": 42,
      "event_management_id": 42,
      "images": "358456472_656173703224092_1331449323565175636_n_large.png",
      "names": "【小河岸熄燈告別 Last Friday Night】守夜人 2023 能量重置唯一專場",
      "dates": "2023-07-28",
      "location_id": 14,
      "price": 800,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "2023 上半年的我們，或許需要一個「結束再重新開始」的能量轉換。  這是小河岸熄燈前的最後一個週末，也是最後的一個能夠珍惜的相遇。     守夜人想送給你們一場特別的演出。  這是2023年唯一的一場全新編制的演出，想帶給你們不同的體驗、重生和新的相遇。     我們將這場表演留給小河岸的百人相聚。  曾經，守夜人在這裡舉行白晝之夜音樂節，那時感受到許多孤單，彼此需要理解和相聚。        7/28星期五，小河岸的 Last Friday Night。  希望你們能來到公館的小巷子，與我們近距離地共度時光。  我們一起聊天、唱歌，回憶那些無法再製的存檔。     在熄燈之後，只有我們會記得的能量。     【守夜人 Night Keepers】  2017 年正式成軍，善於聆聽眾多網友生命經驗的美好與缺憾，並透過雙主唱貼近耳窩的吟唱，在表演中形成一股「枕聊結界」，能陪在流失光與能量的你我身邊、放鬆彼此的自律神經，因而有「淨化系」之稱號。現已發行作品兩張專輯與數首單曲作品。並以 2020 年發行之專輯《使者》奠定樂團知名度，連續入圍第 31、32 屆金曲獎「最佳演唱組合」及第 9 屆金音獎。     守夜人 Night Keepers 是少數擁有不同身份的創作組合，自成團以來便不斷嘗試各種跨界的結合，舉凡時尚領域配樂、電玩主題曲；曾發行結合音樂、圖畫與文字創作的晚安詩集《晚安使用手冊》EP；透過 Facebook 粉絲頁聊天機器人作音樂創作的測試，推出與網友集體創作的活動同名曲〈我睡不著〉，至今已累積超過 520 萬觀看次；亦在戲劇、電影上有多方合作，包含戲劇《四樓的天堂》片尾曲、電影《跟你老婆去旅行》插曲⋯⋯等。與電影《該死的阿修羅》協力製作亦入選「2022 台北電影獎最佳配樂」。上述音樂製作與跨界合作引起廣大紛絲與網友的迴響，讓他們能構思及執行更多有趣的計畫，並開展出全新象限。",
      "longitude": 25.01730253,
      "latitude": 121.5313313,
      "location_name": "公館河岸留言",
      "address": "台北市萬華區西寧南路177號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 21,
      "member_id": 1,
      "event_id": 13,
      "event_management_id": 13,
      "images": "Valley.jpeg",
      "names": "Valley：The Lost In Translation Asia Tour 2023 in Taipei",
      "dates": "2023-08-08",
      "location_id": 3,
      "price": 2300,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "Valley: The Lost In Translation Asia Tour 2023 in Taipei    多倫多獨立流行樂團Valley今年夏天首度登台！  入圍朱諾獎「最佳突破樂團」  以猶如盛夏微風般的清爽曲風席捲獨立音樂圈  這個炎炎夏日，就讓Valley陪你一起過",
      "longitude": 25.04542076,
      "latitude": 121.5309776,
      "location_name": "CLAPPER STUDIO (三創生活園區5F)",
      "address": "台北市中正區市民大道三段2號5 樓",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 22,
      "member_id": 1,
      "event_id": 11,
      "event_management_id": 11,
      "images": "23_lauv_424b4fc778a6769934196a8155bbf1b5.jpeg",
      "names": "Lauv：The Between Albums Tour",
      "dates": "2023-08-31",
      "location_id": 7,
      "price": 1800,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "Lauv: The Between Albums Tour  with Special Guest Alexander 23  全台準備FALL IN LAUV!  終於等到百億串流創作才子台灣專場演唱會!  洗腦的音樂節奏結合共感十足的歌詞 創造令人一聽就愛上的魔力  輕鬆把玩多樣曲風 唱出Z世代青年的心聲  繼2022年來台以音樂祭活動表演大圈粉之後  2023年LAUV將以個人專場演唱會讓你聽好聽滿 徹底FALL IN LAUV",
      "longitude": 25.0568157,
      "latitude": 121.6181159,
      "location_name": "台北南港展覽館1館 (Nangang International Exhibition Center, Hall1)",
      "address": "台北市南港區經貿二路1號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 23,
      "member_id": 1,
      "event_id": 18,
      "event_management_id": 18,
      "images": "23_fujirock_172a471128f5824c47742a674070e32f.jpeg",
      "names": "FUJI ROCK FESTIVAL’23",
      "dates": "2023-07-28",
      "location_id": 11,
      "price": 17000,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "來一起享受盛大的祭典吧！  在令人舒暢的FUJI ROCK度過今年的夏天！  在經歷了2020年的延期，2021年疫情下的特殊FUJI ROCK後，去年我們朝舉辦往常的FUJI ROCK這一目標進行了努力。今年我們將加速實現這一目標。希望能夠讓FUJI ROCK回到往年節日一般的氛圍，使FUJI ROCK成為能讓各位更加樂在其中的音樂節！  今年的主題是「超級舒暢！FUJI ROCK」。 音樂自然不必多說，環境、食物、享受方式，玩法…等等都將體現富士搖滾式的「超級舒暢」。  首先，在出演陣容上我們有請到了超級豪華的海外和國內藝人，在那樣的自然環境中聽著他們的音樂，你一定會忍不住想要大聲喊出「舒暢」兩個字。請務必期待陣容的公布。  另外，為了使FUJI ROCK成為更加乾淨環保，更加美味愉悅，更加能讓人樂在其中的音樂節，我們也準備了許多好玩有趣的內容，今後將會逐一公布，敬請期待。  今年7月，苗場，等候您一起來邂逅一場專屬於富士搖滾音樂節的美妙體驗。祭典的準備正如火如荼地進行中。請務必在這個夏天度過一個超級舒暢的進化版富士搖滾假期！期待您的到來。   FUJI ROCK・FESTIVAL事務局",
      "longitude": 36.84681864,
      "latitude": 138.7988022,
      "location_name": "新潟縣苗場滑雪場（新潟湯澤町）",
      "address": "Mikuni, Yuzawa, Minamiuonuma District, Niigata 949-6212日本",
      "region_id": 5,
      "region": "海外"
    },
    {
      "id": 24,
      "member_id": 1,
      "event_id": 7,
      "event_management_id": 7,
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
      "id": 25,
      "member_id": 1,
      "event_id": 35,
      "event_management_id": 35,
      "images": "確定板5-橫式_large.png",
      "names": "夏夜吻著海風和你采子生日音樂會",
      "dates": "2023-07-23",
      "location_id": 21,
      "price": 800,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "夏夜吻著海風和你  就在這一刻 你是最美的  你眼裡有顆星球  而我正沸騰  采子2023生日音樂會 期待所有采虹齊聚歡樂",
      "longitude": 25.02191973,
      "latitude": 121.5352223,
      "location_name": "後台 BACKSTAGE CAFE",
      "address": "台北市大安區羅斯福路四段1號台大綜合體育館 2樓",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 26,
      "member_id": 1,
      "event_id": 19,
      "event_management_id": 19,
      "images": "23_the1975_c152e8715a79a6130b4611a8d8679866.jpeg",
      "names": "The 1975：At Their Very Best Tour in Taipei",
      "dates": "2023-07-25",
      "location_id": 12,
      "price": 2800,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "The 1975: At Their Very Best Tour in Taipei   敲碗成功再一發！  英國獨立搖滾天團The 1975成軍21年首度攻台  各具魅力的四位成員，主唱Matty Healy、吉他手Adam Hann、貝斯手Ross MacDonald和鼓手George Daniel  以新浪潮和英倫搖滾為骨幹 融合各種新鮮元素 創造屬於The 1975的另類搖滾風格  等待多年終將親身體驗 所有破格與瘋狂引爆在你我眼前",
      "longitude": 25.05230807,
      "latitude": 121.5986373,
      "location_name": "臺北流行音樂中心表演廳 Taipei Music Center",
      "address": "台北市南港區市民大道八段99號",
      "region_id": 1,
      "region": "北部"
    },
    {
      "id": 27,
      "member_id": 1,
      "event_id": 16,
      "event_management_id": 16,
      "images": "23_afkh_0ddb7fc0f9fb3ea4ff480237d8205c0c.jpeg",
      "names": "告五人第一次新世界巡迴演唱會【宇宙的有趣 AROUND THE NEW WORLD】",
      "dates": "2023-07-29",
      "location_id": 6,
      "price": 750,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "ACCUSEFIVE 1st Live Tour 告五人第一次新世界巡迴演唱會 【 宇宙的有趣 】 @高雄巨蛋 AROUND THE NEW WORLD   宇宙的有趣，帶你飛到高雄巨蛋去！ 7月30號，愛在夏天，全宇宙一起愛下去！ 2023/04/02 (日) 12:00 拓元售票 正式開賣   在這座城市… 1. 愛人錯過不要緊 2. 撞到要說對不起 3. 好不容易沒關係 4. 魔法藥水喝下去 告五人帶你去找YA生活   宇宙的有趣 你想用飛的去？還是走的去？   宇宙的有趣 天天去還是有不同的樂趣？   宇宙的有趣 我們，一起去。",
      "longitude": 22.6688989,
      "latitude": 120.3026765,
      "location_name": "高雄巨蛋",
      "address": "高雄市左營區博愛二路757號",
      "region_id": 3,
      "region": "南部"
    },
    {
      "id": 28,
      "member_id": 1,
      "event_id": 6,
      "event_management_id": 6,
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
      "id": 29,
      "member_id": 1,
      "event_id": 8,
      "event_management_id": 8,
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
      "id": 30,
      "member_id": 1,
      "event_id": 26,
      "event_management_id": 26,
      "images": "v2_0603_large.png",
      "names": "王治平&Friends",
      "dates": "2023-07-20",
      "location_id": 16,
      "price": 700,
      "statuss": 1,
      "launch_date": "2023-07-18",
      "descriptions": "好友一堆的王治平老師，這次演出會不會給大家來個彩蛋驚喜呢？  Volcal & GT：王治平 Vocal & harp: 王勃 Volcal & GT：Nick Brown KB：林佩薇 Bass：Ments Olek Sandr Drum：Baron Jan",
      "longitude": 25.01730253,
      "latitude": 121.5313313,
      "location_name": "河岸留言音樂咖啡屋",
      "address": "台北市萬華區西寧南路177號",
      "region_id": 1,
      "region": "北部"
    }
  ])
  const [courseData, setCourseData] = useState([
    {
      "id": 1,
      "member_id": 1,
      "course_id": 34,
      "course_course_id": 34,
      "img": "course15.jpg",
      "name": "合成器基础使用与音色设计",
      "directions": "戴夫·史密斯（Dave Smith)）出生于美国加州的旧金山，这位被许多人称为 \"MIDI之父 \"的人在他24岁的时候就开始了Sequential Circuits的工作。1977年，他设计并发布了世界上第一个可编辑的复音合成器Prophet-5，也是第一个在微处理器上运行的乐器，这将改变世界。  Prophet v3的声音品质极佳，适合制作Ambient氛围音乐，电子舞曲，House Music，经典的模拟界面控制起来非常的舒适。我们了解他的每一次参数与旋钮，当然如果您有Prophet的硬件真家伙，看完这套教学，你将会彻底使用它！",
      "price": 1200,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 48
    },
    {
      "id": 2,
      "member_id": 1,
      "course_id": 12,
      "course_course_id": 12,
      "img": "piano4.jpg",
      "name": "流行鋼琴/電子琴即興伴奏入門",
      "directions": "妳將會學習\r\n\r\n1、左手怎麽彈、怎麽配和弦\r\n\r\n2、運用伴奏技巧，不需要看譜就能彈奏流行歌曲\r\n\r\n3、三和弦、轉位和弦、掛留和弦、七和弦、增減和弦等彈法\r\n\r\n4、豐富的節奏型與和弦彈奏模型，根據歌曲情感自由選擇演奏方法\r\n\r\n5、為自己演唱伴奏，邊彈邊唱\r\n\r\n6、學習《大魚》、《知足》、《這就是愛嗎》等眾多熱門流行歌曲，並拓展到更多歌曲",
      "price": 470,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 11
    },
    {
      "id": 3,
      "member_id": 1,
      "course_id": 20,
      "course_course_id": 20,
      "img": "guiter4.jpg",
      "name": "【吉他編曲大解析】流行抒情全攻略",
      "directions": "如果你有以下問題\r\n\r\n學了一陣子的吉他，記得一些和弦的按法，看著網路上的和弦譜都可以大略彈出來，卻不知道如何再進步\r\n\r\n對於樂理缺乏較全面性的理解\r\n\r\n不知道自己彈在哪一個調上，也不知道調跟調之間該如何切換\r\n\r\n\r\n\r\n這堂課要教你\r\n\r\n要彈好琴，要先知道到底在彈什麼！談大調、音程、和弦、順階和弦、和弦級數\r\n\r\n在不同調性中自由轉換：吉他上 C、G、D、A、E 五個調的順階和弦\r\n\r\n每一個調的特色：美麗的和弦及實際練習",
      "price": 570,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 37
    },
    {
      "id": 4,
      "member_id": 1,
      "course_id": 36,
      "course_course_id": 36,
      "img": "course13.jpg",
      "name": "2300",
      "directions": "从Uplifting和Progressive，到嬉皮的Goa、再到酸性的Acid和迷幻的Psy；在广阔的Trance音乐宇宙中分类非常丰富。\r\n\r\n这次我们带来了融合Trance、Trap、Pop三种元素的最新教程。从作曲、到编曲、混音以及母带制作，完整体现。\r\n\r\n如何巧妙的将三种风格融入成一首音乐中？Intro段落的设计、Build-Up风格转换、音乐感觉的连接与递进。在这套课程中将会全部的展示给大家！\r\n\r\n注意：本套教程中包含工程采样音频文件可下载，供学习使用。",
      "price": 1300,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 50
    },
    {
      "id": 5,
      "member_id": 1,
      "course_id": 22,
      "course_course_id": 22,
      "img": "course7.jpg",
      "name": "Music Theory｜音乐理论｜电子与流行音乐",
      "directions": "音乐基础理论会帮助你飞的更高，帮助你对音乐有更深的理解，最后超越乐理本身，并不被所谓的“乐理知识”框架所束缚。\r\n\r\n乐理像是音乐的数学几何，也像是语言里面的语法，任何一种我们常听到的电子音乐风格都离不开他，他会帮助你对编曲和混音的直接提升；所以这是一名合格的、专业的音乐人必修的技能。\r\n\r\n本课程的设计以简单、通俗易懂、实用的方式讲解，结合常见电子音乐风格：Hip-Hop、R&B、Trance、Deep House、Pop中的调式，和声，和声走向，旋律等知识结构进行分析，是很好的初学者入门的选择。",
      "price": 3789,
      "up_date": "2023-07-11",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 15
    },
    {
      "id": 6,
      "member_id": 1,
      "course_id": 18,
      "course_course_id": 18,
      "img": "piano5.jpg",
      "name": "流行鋼琴/電子琴即興伴奏進階",
      "directions": "妳將會學習\r\n\r\n1、色彩和弦——掛留和弦、七和弦、增減和弦等構建方法與演奏方法\r\n\r\n2、琶音、倚音、加花等進階伴奏技巧，豐富歌曲情感\r\n\r\n3、學習設計尾奏部分，完整地完成壹首歌曲的鋼琴改編\r\n\r\n\r\n\r\n學習要求\r\n\r\n1、設備：鋼琴、電鋼琴或61鍵以上電子琴，不建議使用手卷鋼琴；\r\n\r\n2、基礎：零基礎學員可參加免費前置課，練習壹周左右，能夠演奏單音旋律即可學習本課程；有鋼琴基礎，但不熟悉流行歌曲演奏的學員可以直接開始學習。\r\n\r\n3、時間：學習進度可自由安排，不限時，每節課後作業需要花1-2小時練習，因人而異。\r\n\r\n",
      "price": 470,
      "up_date": "2023-07-17",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 18
    },
    {
      "id": 7,
      "member_id": 1,
      "course_id": 45,
      "course_course_id": 45,
      "img": "guitar11.jpg",
      "name": "The Professional Guitar Masterclass",
      "directions": "Want the very best guitar lessons on the web?  With pro instructor feedback??I am an award-winning GIT grad, a 15+ year professional guitarist with 70k+ students, and the founder of Guitargate - sponsored by Paul Reed Smith Guitars. ",
      "price": 1200,
      "up_date": "2023-07-07",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 47
    },
    {
      "id": 8,
      "member_id": 1,
      "course_id": 30,
      "course_course_id": 30,
      "img": "course6.jpg",
      "name": "FM合成器基础使用与音色制作",
      "directions": "音乐基础理论会帮助你飞的更高，帮助你对音乐有更深的理解，最后超越乐理本身，并不被所谓的“乐理知识”框架所束缚。\r\n\r\n乐理像是音乐的数学几何，也像是语言里面的语法，任何一种我们常听到的电子音乐风格都离不开他，他会帮助你对编曲和混音的直接提升；所以这是一名合格的、专业的音乐人必修的技能。\r\n\r\n本课程的设计以简单、通俗易懂、实用的方式讲解，结合常见电子音乐风格：Hip-Hop、R&B、Trance、Deep House、Pop中的调式，和声，和声走向，旋律等知识结构进行分析，是很好的初学者入门的选择。",
      "price": 2100,
      "up_date": "2023-07-12",
      "shelf_time": "2023-07-31",
      "valid": 1,
      "teacher_id": 38
    }
  ])
  // 取得收藏專輯資料
  // const getAlbumCollect = async (id) => {
  //   const res = await axios.get(
  //     'https://nodal-buckeye-404908.de.r.appspot.com/api/users/collect/album/' + `${id}`
  //   )
  //   // console.log(res.data)
  //   setAlbumData(res.data)
  // }
  // 取得收藏專活動資料
  // const getCollectEvent = async (id) => {
  //   const res = await axios.get(
  //     'https://nodal-buckeye-404908.de.r.appspot.com/api/users/collect/event-management/' + `${id}`
  //   )
  //   // console.log(res.data)
  //   setEventData(res.data)
  // }
  // 取得收藏專課程資料
  // const getCollectCourse = async (id) => {
  //   const res = await axios.get(
  //     'https://nodal-buckeye-404908.de.r.appspot.com/api/users/collect/course/' + `${id}`
  //   )
  //   // console.log(res.data)
  //   setCourseData(res.data)
  // }

  // 頁籤內容
  const items = [
    {
      key: 'album',
      label: '專輯',
      children: (
        <>
          <div className="cards bg-white">
            {albumData.length == 0 ? (
              <>
                <div className="p-5">
                  <Empty description={'沒有資料'} />
                </div>
              </>
            ) : (
              <>
                {albumData.map((v) => (
                  <Card
                    key={v.id}
                    id={v.album_id}
                    img={v.cover_image}
                    title={v.title}
                    price={v.price}
                    product="album"
                  />
                ))}
              </>
            )}
            {/* {albumData.map((v) => (
              <Card
                key={v.id}
                id={v.album_id}
                img={v.cover_image}
                title={v.title}
                price={v.price}
                product="album"
              />
            ))} */}
          </div>
        </>
      ),
    },
    {
      key: 'event-management',
      label: '音樂活動',
      children: (
        <>
          <div className="cards bg-white">
            {eventData.length == 0 ? (
              <>
                <div className="p-5">
                  <Empty description={'沒有資料'} />
                </div>
              </>
            ) : (
              <>
                {eventData.map((v) => (
                  <Card
                    key={v.id}
                    id={v.event_management_id}
                    img={v.images}
                    title={v.names}
                    price={v.price}
                    product="event"
                  />
                ))}
              </>
            )}
          </div>

          {/* <div className="cards bg-white">
            {eventData.map((v) => (
              <Card
                key={v.id}
                id={v.event_management_id}
                img={v.images}
                title={v.names}
                price={v.price}
                product="event"
              />
            ))}
          </div> */}
        </>
      ),
    },
    {
      key: 'course',
      label: '課程',
      children: (
        <>
          <div className="cards bg-white">
            {courseData.length == 0 ? (
              <>
                <div className="p-5">
                  <Empty description={'沒有資料'} />
                </div>
              </>
            ) : (
              <>
                {courseData.map((v) => (
                  <Card
                    key={v.id}
                    id={v.course_id}
                    img={v.img}
                    title={v.name}
                    price={v.price}
                    product="course"
                  />
                ))}
              </>
            )}
            {/* {courseData.map((v) => (
              <Card
                key={v.id}
                id={v.course_id}
                img={v.img}
                title={v.name}
                price={v.price}
                product="course"
              />
            ))} */}
          </div>
        </>
      ),
    },
  ]
  // 手機板List
  const mbList = (
    <>
      <MbList userData={userData} />
    </>
  )
  // 主內容
  const Content = (
    <>
      <div className="container bg-primary mb-3">
        <div className=" row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center  pt-4">
            <h1>我的收藏</h1>
          </div>

          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  cardBg: 'rgba(0, 0, 0, 0.08)',
                  itemColor: 'rgba(255, 255, 255, 1)',
                  itemHoverColor: '#000',
                  itemSelectedColor: '#000',
                  titleFontSize: 16,
                  margin: '0',

                  fontFamily:
                    'Noto Sans TC Regular,Helvetica,Arial,PingFang TC,苹方-繁,Heiti TC,黑體-繁,Microsoft JhengHei,微軟正黑體,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
                },
              },
            }}
          >
            <Tabs
              type="card"
              defaultActiveKey="album"
              items={items}
              className="mb-4"
            />
          </ConfigProvider>
        </div>
      </div>
    </>
  )
  const main = (
    <>
      {mbList}
      {Content}
    </>
  )
  return (
    <>
      <Framework
        leftContent=<>{isLoading ? null : <List userData={userData} />}</>
        rightContent={<>{isLoading ? null : main}</>}
      ></Framework>
    </>
  )
}
