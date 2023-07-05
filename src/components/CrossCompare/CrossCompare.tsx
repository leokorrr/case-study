'use client'
import React, { useEffect, useState } from 'react'
import { ICrossCompare } from './types'
import { getTestDates } from '@/utils/getTestDates'
import { DATA_KEYS } from '@/utils/constants'
import { getCrossCompareChartData } from '@/utils/getCrossCompareChartData'
import { CrossCompareChart } from '../CrossCompareChart/CrossCompareChart'
import { IBiomarkersUnit, IChartData, IDataKey } from '../../../types'

export const CrossCompare: React.FC<ICrossCompare> = (props) => {
  const { data } = props

  const dates = getTestDates(data)

  const [activeDate, setActiveDate] = useState(dates[0])

  const [activeBiomarkers, setActiveBiomarkers] = useState<IDataKey[]>([])

  const [crossCompareChartData, setCrossCompareChartData] = useState<IChartData | {}>({})

  const handleActiveDateChange = (date: string) => () => setActiveDate(date)

  const handleActiveBiomarkersChange = (biomarker: IDataKey) => () => {
    const isBiomarkerActive = activeBiomarkers.map(it => it.label).includes(biomarker.label)

    if (isBiomarkerActive) {
      const newActiveBiomarkers = activeBiomarkers.filter((activeBiomarker: IDataKey) => activeBiomarker.value !== biomarker.value)

      setActiveBiomarkers(newActiveBiomarkers)
    } else {
      setActiveBiomarkers([
        ...activeBiomarkers,
        {
          ...biomarker,
          unit: data[0][`${biomarker.value}_unit` as IBiomarkersUnit]
        }])
    }
  }

  useEffect(() => {
    const testingResults = getCrossCompareChartData(data, activeDate, activeBiomarkers)

    setCrossCompareChartData(testingResults)
  }, [activeBiomarkers, activeDate, data])

  return (
    <div className='flex justify-center'>
      <div className='bg-white rounded-[20px] py-[28px] py-[40px] px-[32px] max-w-[1200px] w-full flex justify-between grid grid-cols-6 gap-[20px] min-h-[500px] shadow-card'>
        <div>
          <div className='font-semibold text-[20px] mb-[12px]'>Dates:</div>
          <div className='flex flex-col gap-[8px]'>
            {dates.map((date: string) => (
              <div
                key={date}
                onClick={handleActiveDateChange(date)}
                className={`select-none text-[18px] hover:cursor-pointer ${date === activeDate ? 'text-black font-semibold' : 'text-grey-500'}`}>
                {date}
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-4'>
          <CrossCompareChart data={crossCompareChartData} dataKeys={activeBiomarkers} />
        </div>
        <div>
          <div className='font-semibold text-[20px] mb-[12px]'>Biomarkers:</div>
          <div className=' flex flex-col gap-[8px]'>
            {DATA_KEYS.map((key: IDataKey) => (
              <div
                key={key.label}
                onClick={handleActiveBiomarkersChange(key)}
                className={`select-none text-[18px] hover:cursor-pointer
                  ${activeBiomarkers.map(it => it.label).includes(key.label) ? 'text-black font-semibold' : 'text-grey-500'}`}>
                {key.label}
              </div>))}
          </div>
        </div>
      </div>
    </div>
  )
}
