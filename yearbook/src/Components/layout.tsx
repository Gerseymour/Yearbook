import Slot from './slot';

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

  const slotList = data.slots.map((item) => 
    <Slot height={item.height} width={item.width} top={item.y} left={item.x} id={item.id}/>
  )

  return (
    <div style={{height:`${data.height}mm`, width:`${data.width}mm`, background:'white', position: 'relative'}}>
        {slotList}
    </div>

  )
}

export default Layout