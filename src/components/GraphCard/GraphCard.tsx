import React from 'react'
import { IGraphCard } from './types'

export const GraphCard: React.FC<IGraphCard> = (props) => {
  const { title, graph } = props

  return (
    <div className='bg-white rounded-[20px] py-[28px] px-[24px] w-full max-w-[776px] shadow-card'>
      <h3 className='text-[20px] font-semibold mb-[12px]'>{title}</h3>
      <div className='w-full h-[300px]'>
        {graph}
      </div>
    </div>
  )
}
