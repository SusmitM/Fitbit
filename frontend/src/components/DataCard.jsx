import React from 'react'

const DataCard = ({title,data}) => {
  return (
    <div className='flex flex-col bg-white p-2 m-2 rounded-lg h-[220px]  text-center gap-4 border-2 border-zinc-400'>
        <h1 className='text-3xl text-slate-600 text-serif font-semibold'>{title}</h1>
        <p className='mt-12 text-2xl text-mono font-bold text-blue-600'>{data} kcal</p>
    </div>
  )
}

export default DataCard