import React from 'react'

const DataCard = ({title,data}) => {
  return (
    <div className='flex flex-col'>
        <h1>{title}</h1>
        <p>{data}</p>
    </div>
  )
}

export default DataCard