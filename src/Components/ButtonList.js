import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'

function ButtonList() {
  const list=["All","Gaming","Mixes","TSeries","Dramedy","Bhojpuri","C++","News","Bollybood","Apple","Rajpal","Pakistan","Apple","All","Gaming","Mixes","TSeries","Dramedy","Bhojpuri","C++","News","Bollybood","Apple","Rajpal","Pakistan","Apple"];
   
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  const isContainerOpen=useSelector((store)=>store.Butt.isContainerOpen);
  if(!isContainerOpen) return null;
  
  // let classname=" flex  fixed bg-white ml-64  top-14 overflow-x-hidden snap-proximity snap-x ... ";
  // if(!isMenuOpen){
  //   classname="flex fixed bg-white left-0   top-14 overflow-x-clip snap-proximity snap-x ... "
  // }
  let classname="flex mt-16  overflow-x-auto no-scrollbar p-2 space-x-4 ml-64 w-100% bg-white  ";
  if(!isMenuOpen){
    classname="flex mt-16  overflow-x-auto no-scrollbar  p-2 space-x-4  w-100% bg-white  "
  }
 
  return (
   
   
    <div className={classname}>
      

      {
        list.map((item,index) => {
            return <div key={index}><Button name={item}/> </div>
        })
      }
      
      {/* <Button name="Gaming"/>
       <Button name="Mixes"/>
      <Button name="Music"/>
       <Button name="Tseries"/>
       <Button name="Dramedy"/>
       <Button name="Bhojpuri-Cinema"/>
       <Button name="News"/> */}
     </div>
  )
}

export default ButtonList

