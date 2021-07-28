import {useEffect, useState} from 'react'
import '../App.css'
import Loading from '../Components/loading'
import Thumbnail from '../Components/thumbnail'

const Dashboard = () => {
  const [pageArray, setPageArray] = useState<Number[]>([])

  useEffect(() => {
    getAllPages()
  }, [])

  const getAllPages = async () => {
        const res = await fetch('https://ybm-technical-exercise-api.s3.eu-west-1.amazonaws.com/api/pages')
        const data = (await res.json()) as Number[]
       setPageArray(data)
  }


  if (pageArray.length===0) {
    return <Loading/>
  }

  const thumbnailList = pageArray.map((item) => 
  <Thumbnail id={item}/>) 

  return (
    <div>
      <h1>The YearBook Machine</h1>
      <div className='dashboard-page'>
        {thumbnailList}
      </div>
    </div>
  )
}

export default Dashboard