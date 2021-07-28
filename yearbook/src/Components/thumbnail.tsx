import { Link } from 'react-router-dom'
interface Prop { 
  id: Number
}

const Thumbnail = (props:Prop) => {

  return (
    <Link to={`/${props.id}`} style={{background:'purple', width: '20%',height:'30%', margin:'2%'}} >
      <p>{props.id}</p>
    </Link>
  )
}

export default Thumbnail