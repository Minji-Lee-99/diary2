import React, { useEffect, useState } from "react"
import MyButton from "./MyButton"
import { useNavigate } from "react-router-dom"
import DiaryItem from './DiaryItem'

const ControllMenu = React.memo(({value, onChange, optionList}) => {
  useEffect(() => {
    console.log("menu")
  })
  return (<select value={value} onChange={(e) => onChange(e.target.value)} className="controllMenu">
    {optionList.map((it, idx) => (
      <option value={it.value} key={idx} >{it.name}</option>
    ))}
  </select>)
})

const sortOptionList = [
  {
    value: "latest",
    name: "최신순"
  },
  {
    value: "oldest",
    name: "오래된 순"
  }
]

const filterOptionList = [
  {
    value: "all",
    name: "전부다"
  },
  {
    value: "good",
    name: "좋은 감정만"
  },
  {
    value: "bad",
    name: "나쁜 감정만"
  },
]

const DiaryList = ({diaryList}) => {
  const navigate = useNavigate()

  const [sortType, setSortType] = useState('latest')
  const [filter, setFilter] = useState('all')

  // 정렬, 감정필터 적용하기
  const getProcessedDiaryList = () => {
    const copyList = JSON.parse(JSON.stringify(diaryList))
    const cmp = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date)
      } else {
        return parseInt(a.date) - parseInt(b.date)
      }
    }
    // 감정 filter 적용하기
    let filteredList = []
    if (filter === 'all') {
      filteredList = copyList
    } else if (filter === 'good') {
      filteredList = copyList.filter((it) => it.emotion <= 3)
    } else {
      filteredList = copyList.filter((it) => it.emotion > 3)
    }

    const sortedList = filteredList.sort(cmp)
    return sortedList
  }

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
        <ControllMenu
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
        <ControllMenu
          value={filter}
          onChange={setFilter}
          optionList={filterOptionList}
        />
        </div>
        <div className="right_col">
        <MyButton type={"positive"} text={"새 일기 쓰기"} onClick={() => navigate('/new')} />
        </div>
      </div>
      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it}/>
      ))}
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: [],
}

export default DiaryList