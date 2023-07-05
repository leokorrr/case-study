'use strict'
import React, { useEffect, useState } from 'react'
import { Bar, CartesianGrid, Legend, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { ICrossCompareChart } from './types'
import { IChartData, IDataKey } from '../../../types'

export const CrossCompareChart: React.FC<ICrossCompareChart> = (props) => {
  const { data, dataKeys } = props

  const [chartData, setChartData] = useState<IChartData[]>([])

  useEffect(() => {
    setChartData([data])
  }, [data])

  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className='flex justify-center w-full'>
        <BarChart
          width={700}
          height={500}
          data={chartData}
          margin={{ right: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Biomarkers" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((dataKey: IDataKey) => (
            <Bar
              key={dataKey.value}
              dataKey={dataKey.value}
              name={`${dataKey.label} (${dataKey.unit})`}
              fill={dataKey.color}
            />)
          )}
        </BarChart>

      </div>
    </ResponsiveContainer>
  )
}
