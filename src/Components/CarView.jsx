import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered,restore } from '../Features/car/carShowroom'
import  Cars from '../Image/pexels-wavyvisuals-18748235.jpg'

const CarView = () => {

    const numOfCar = useSelector((state) => state.car.numOfCar)

    const dispatch =useDispatch()
  return (
    <>
    <div className='font-bold text-2xl mb-5 bg-slate-700 text-white'>Number Of Car - {numOfCar}</div>

    <button onClick={()=>{dispatch (ordered())}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Order Car</button>
    <button onClick={()=>{dispatch (restore())}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Return Car</button>
<div>
  <img src={Cars} alt="carShowroom" className='h-screen w-screen'/>
</div>
    </>
  )
}

export default CarView 