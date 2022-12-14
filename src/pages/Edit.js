import { useNavigate, useSearchParams } from "react-router-dom"

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')
  const mode = searchParams.get('mode')

  const navigate = useNavigate()
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지입니다.</p>
      <button onClick={() => {
        setSearchParams({who: "lmj"})
      }}>Qs 바꾸기</button>
      <button onClick={() => {
        navigate("/")
      }}>home</button>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  )
}

export default Edit