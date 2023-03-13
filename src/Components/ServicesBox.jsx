import React from 'react'

export default function ServicesBox({ src , title, margin, children}) {
  return (
    <div className={`${margin ? "lg:-mt-24" : ""} rounded-xl bg-Saina h-52 w-[200px] shrink-0 relative mx-6 lg:mx-1 shadow-[-11px_36px_43px_5px_rgba(0,0,0,0.15)]`}>
        <div className='absolute -top-8 right-9 flex items-center justify-center w-32 bg-[#c4a0e1fd]  text-white rounded-xl  p-1 '>
            <img className='w-11'  src={src} alt="" />
            <p className='mr-1 font-bold'>{title}</p>
        </div>
          {children}
    </div>
  )
}
