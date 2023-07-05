'use client'
import React from 'react'
import { ITabs } from './types'

const tabsData = [
  {
    label: 'All data',
    value: 'all'
  },
  {
    label: 'Compare data',
    value: 'compare'
  }
]

export const Tabs: React.FC<ITabs> = (props) => {
  const { onActiveTabChange, activeTab } = props

  return (
    <div className='my-[20px]'>
      <div className='flex gap-[16px]'>
        {tabsData.map(tab =>
          <div
            key={tab.value}
            onClick={onActiveTabChange(tab.value)}
            className={`select-none font-semibold text-[20px] hover:cursor-pointer ${tab.value === activeTab ? 'text-black' : 'text-grey-500'}`}>
            {tab.label}
          </div>
        )}
      </div>
    </div>
  )
}
