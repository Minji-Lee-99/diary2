import MyHeader from './../components/MyHeader'
import { DiaryStateContext } from '../App'
import {useContext, useEffect, useState} from 'react'
import DiaryList from './../components/DiaryList'

const Home = () => {
  const diaryList = useContext(DiaryStateContext)
  const [data, setData] = useState([])  // 현재 날짜의 일기 리스트
  const [curDate, setCurDate] = useState(new Date())  // 현재 날짜 state
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`  // header의 문구

  useEffect(() => {
    const titleTag = document.getElementsByTagName('title')[0]
    titleTag.innerHTML = `감정 일기장`
  }, [])

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime()
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime()
      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      )
    }
  }, [diaryList, curDate])

  // const increaseMonth = () => {
  //   setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()))
  // }

  // const decreaseMonth = () => {
  //   setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()))
  // }

  const chooseMonth = (date) => {
    const year = date.slice(0, 4)
    const month = date.slice(5, 7)
    setCurDate(new Date(parseInt(year), parseInt(month) - 1, 1))
  }

  return (
    <div>
      <MyHeader 
        headerText={headText}
        rightChild={<input type="month" onChange={(e) => chooseMonth(e.target.value)}/>}
        // leftChild={<MyButton text={"<"} onClick={decreaseMonth}/>}
        // rightChild={<MyButton text={">"} onClick={increaseMonth}/>}
      />
      <DiaryList diaryList={data}/>
    </div>
  )
}

export default Home