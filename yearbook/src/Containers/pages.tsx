import Layout from '../Components/layout'
import Loading from '../Components/loading'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from 'react';

interface Slot{
  id:Number;
  x:Number
  y:Number
  width:Number
  height:Number
}

interface PageAPI {
  id: Number;
  title: String;
  width:Number;
  height:Number;
  slots:Slot[]
}

const Page = () => {
  const [data, setData] = useState({} as PageAPI)
  const page =1
  useEffect(()=> {
    getPage(page)
  }, [])

  const getPage = async (page:Number) => {
    try {
        const res = await fetch(`https://ybm-technical-exercise-api.s3.eu-west-1.amazonaws.com/api/pages/${page}`)
        const data = (await res.json()) as PageAPI
        setData(data)
    } catch (e) {
        console.log(e)
    }
  }

  if (!data) {
    return <Loading/>
  }
  return (
    <div> 
      <h1>Page {data.title}</h1>
      <h2>Page {data.id}</h2>
      <Layout data={data} />
    
      <div>
        <FaChevronRight/>
        <FaChevronRight/>


        <FaChevronRight/>

      </div>
      <div>
      <FaChevronLeft />
      <FaChevronLeft color="white"/>


      <FaChevronLeft />
      </div>
    </div>
  )
}

export default Page