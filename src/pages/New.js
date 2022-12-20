import { useEffect } from "react"
import DiaryEditor from "../components/DiaryEditor"

const New = () => {
  useEffect(() => {
    const titleTag = document.getElementsByTagName('title')[0]
    titleTag.innerHTML = `감정 일기장 - 새일기`
  }, [])
  return <DiaryEditor/>
}

export default New