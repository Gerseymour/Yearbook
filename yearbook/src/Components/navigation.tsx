import { Link, useParams } from 'react-router-dom'

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
        <div className='backwardSection' style= {{width:'20%',display:'flex', alignContent: 'center', justifyContent: 'space-evenly'}}>
          <div >
            <h3>first</h3>
          </div>
          <div>
            <h3>no prev</h3>
          </div>
        </div>
      )}
    return ( 
    <div className='backwardSection' style= {{width:'20%',display:'flex', alignContent: 'center', justifyContent: 'space-evenly'}}>
    <Link to={`/${props.first}`}>
      <div >
        <h3>first</h3>
      </div>
    </Link>
    <Link to={`/${+page-1}`}>
      <div>
        <h3>prev</h3>
      </div>
    </Link>
  </div>      
    )
  }

  const next = () => {
    if (+page === 10) {
      return (
        <div className='forwardSection' style= {{width:'20%',display:'flex', alignContent: 'center', justifyContent: 'space-evenly'}}>
          <div>
            <h3>no next</h3>
          </div>
          <div>
          <h3>last page</h3>
          </div>
        </div>
      )}
    return (   
    <div className='forwardSection' style= {{width:'20%',display:'flex', alignContent: 'center', justifyContent: 'space-evenly'}}>    
      <Link to={`/${+page+1}`}>
        <div>
          <h3>next</h3>
        </div>
      </Link>
      <Link to={`/${props.last}`}>
        <div>
          <h3>last</h3>
        </div>
      </Link>
    </div>
    )
  }


  return (
    <div style= {{display:'flex', alignContent: 'center', justifyContent: 'space-evenly'}}>
      {prev()}
      <Link to='/'>
        <div className='homeSection'>
          <h3>Home</h3>
        </div>
      </Link>
     {next()} 
    </div>
  )
}

export default Navigation