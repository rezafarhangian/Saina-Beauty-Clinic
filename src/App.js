import React from 'react'
import {useRoutes} from "react-router-dom"
import routs from './Routes';


export default function App() {
  
  const router = useRoutes(routs)

  return (
    <div className='font-Saina'>
      {router}
    </div>
  );
}
