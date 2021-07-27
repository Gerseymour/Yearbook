import {useEffect, useState} from 'react'
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
    <div style={{height:`210mm`, width:`170mm`, background:'white', position: 'relative', display: 'flex', flexWrap:'wrap'}}>
      {thumbnailList}
  </div>

  )
}

export default Dashboard