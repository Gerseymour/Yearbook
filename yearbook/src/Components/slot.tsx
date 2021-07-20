import './slot.css'

const Slot = (props:any) => {

  const randomColor = Math.floor(Math.random()*16777215).toString(16)
  const propStyle = {height: `${props.height*100}%`, width: `${props.width*100}%`,top: `${props.top*100}%`, left: `${props.left*100}%`, background: `#${randomColor}`}

  return (
    <div className='slot'style={propStyle}> 

    <p>{props.id}</p>
    </div>
  )
}

export default Slot