import Layout from '../Components/layout'
import Loading from '../Components/loading'
import Navigation from '../Components/navigation'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

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
  nextId:Number;
  prevId:Number;
  slots:Slot[]
}

type pageParams = {
  page:string;
}

const Page = () => {
  const [data, setData] = useState({} as PageAPI)
  const [first, setFirst] = useState<Number>(0)
  const [last, setLast] = useState<Number>(0)


  const {page} = useParams<pageParams>();
  useEffect(()=> {
    getPage(+page)
  }, [page]) 

  const getPage = async (page:Number) => {
    try {
        const resPages = await fetch('https://ybm-technical-exercise-api.s3.eu-west-1.amazonaws.com/api/pages')
        const pages = (await resPages.json()) as Number[]
        setFirst(pages[0])
        setLast(pages[pages.length-1])
        const res = await fetch(`https://ybm-technical-exercise-api.s3.eu-west-1.amazonaws.com/api/pages/${page}`)
        const data = (await res.json()) as PageAPI
        console.log(data)
        setData(data)
    } catch (e) {
        console.log(e)
    }
  }

  if (data.title === undefined) {
    return <Loading/>
  }
  return (
    <div> 
      <h1>Page {data.title}</h1>
      <h2>Page {data.id}</h2>
      <Navigation current={data.id} first={first} last={last}/>
      <Layout data={data} /> 
    
     
     </div> 
  )
}

export default Page