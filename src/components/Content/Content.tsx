'use client'
import React, { useState } from 'react'
import { Tabs } from '../Tabs'
import { Grid } from '../Grid'
import { DATA_KEYS } from '@/utils/constants'
import { IContent, TabsValuesType } from './types'
import { CrossCompare } from '../CrossCompare'

export const Content: React.FC<IContent> = (props) => {
  const { patientData } = props

  const [activeTab, setActiveTab] = useState('all')

  const handleActiveTabChange = (tab: string) => () => setActiveTab(tab)

  const tabsContent = {
    all: <Grid data={patientData} dataKeys={DATA_KEYS} />,
    compare: <CrossCompare data={patientData} />
  }

  return (
    <div className='pb-[40px]'>
      <Tabs onActiveTabChange={handleActiveTabChange} activeTab={activeTab} />
      {tabsContent[activeTab as TabsValuesType]}
    </div>
  )
}
