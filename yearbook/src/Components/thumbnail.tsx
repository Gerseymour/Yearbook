
interface Prop { 
  id: Number
}

const Thumbnail = (props:Prop) => {

  return (
    <button style={{background:'purple', width: '20%',height:'30%', margin:'2%'}} >
      <p>{props.id}</p>
    </button>
  )
}

export default Thumbnail