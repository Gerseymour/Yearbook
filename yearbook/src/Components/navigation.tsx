import { Link, useParams } from 'react-router-dom'
import '../App.css'
import { ImFirst, ImLast, ImPrevious2, ImNext2, ImHome } from "react-icons/im";

interface INavigation {
  current:Number;
  last:Number;
  first:Number;
}
type pageParams = {
  page:string;
}

const Navigation = (props:INavigation) => {
  const {page} = useParams<pageParams>()

  function prev () {
    console.log(+page,'infunction')
    if (+page === 1) {
      return (
        <div className='nav-section' >
          <div >
            <ImFirst  className='nav-button-disabled'/>
          </div>
          <div>
            <ImPrevious2 className='nav-button-disabled'/>
          </div>
        </div>
      )}
    return ( 
    <div className='nav-section' >
    <Link to={`/${props.first}`}>
      <div >
        <ImFirst  className='nav-button'/>
      </div>
    </Link>
    <Link to={`/${+page-1}`}>
      <div>
       <ImPrevious2 className='nav-button'/>
      </div>
    </Link>
  </div>      
    )
  }

  const next = () => {
    if (+page === 10) {
      return (
        <div className='nav-section' >
          <div>
            <ImNext2  className='nav-button-disabled'/>
          </div>
          <div>
            <ImLast  className='nav-button-disabled'/>
          </div>
        </div>
      )}
    return (   
    <div className='nav-section' >    
      <Link to={`/${+page+1}`}>
        <div>
          <ImNext2  className='nav-button'/>
        </div>
      </Link>
      <Link to={`/${props.last}`}>
        <div>
          <ImLast  className='nav-button'/>
        </div>
      </Link>
    </div>
    )
  }


  return (
    <div className='nav-bar'>
      {prev()}
      <Link to='/'>
        <div className='homeSection'>
          <ImHome  className='nav-button'/>
        </div>
      </Link>
     {next()} 
    </div>
  )
}

export default Navigation