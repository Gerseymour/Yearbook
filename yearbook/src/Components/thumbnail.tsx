import { Link } from 'react-router-dom'
import '../App.css'

interface Prop { 
  id: Number
}

const Thumbnail = (props:Prop) => {

  return (
    <Link to={`/${props.id}`} className='thumbnail' >
      <p >{props.id}</p>
    </Link>
  )
}

export default Thumbnail