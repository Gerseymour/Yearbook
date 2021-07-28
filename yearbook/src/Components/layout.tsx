import Slot from './slot';
import Loading from './loading'
import '../App.css'

interface ISlot{
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
  slots:ISlot[]
}

interface IProp { 
  data:PageAPI;
}
const Layout = (props:IProp) => { 
  const data:PageAPI = props.data

  if (data.title === undefined) {
    return <Loading/>
  }

  const slotList = data.slots.map((item) => 
    <Slot height={item.height} width={item.width} top={item.y} left={item.x} id={item.id}/>
  )

  return (
    <div style={{height:`${data.height}mm`, width:`${data.width}mm`}} className='page'>
        {slotList}
    </div>

  )
}

export default Layout