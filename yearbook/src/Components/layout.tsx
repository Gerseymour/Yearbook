import Slot from './slot';
import data from '../Services/APIservice'

const Layout = () => { 

  const slotList = data.slots.map((item) => 
    <Slot height={item.height} width={item.width} top={item.y} left={item.x} id={item.id}/>
  )

  return (
    <div style={{height:`${data.height}mm`, width:`${data.width}mm`, background:'white', position: 'relative'}}>
      <h1>{data.title}</h1> 
        {slotList}
    </div>


  )
}

export default Layout