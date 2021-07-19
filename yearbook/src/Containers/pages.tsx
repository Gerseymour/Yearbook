import Layout from '../Components/layout'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import data from '../Services/APIservice'

const Page = () => {


  return (
    <div> 
      <h1>Page {data.id}</h1>
      <Layout />
    
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