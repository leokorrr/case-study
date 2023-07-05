import React from 'react'
import { IGrid } from './types'
import { GraphCard } from '../GraphCard'
import { SimpleLineChart } from '../SimpleLineChart'
import { IBiomarkersUnit, IDataKey } from '../../../types'

export const Grid: React.FC<IGrid> = (props) => {
  const { data, dataKeys } = props

  return (
    <div className="flex flex-wrap gap-[40px]">
      {dataKeys.map((dataKey: IDataKey) => (
        <GraphCard
          key={dataKey.value}
          title={`${dataKey.label} (${data[0][`${dataKey.value}_unit` as IBiomarkersUnit]})`}
          graph={<SimpleLineChart dataKey={dataKey.value} data={data} name={dataKey.label} color={dataKey.color} range={dataKey.range} />}
        />))}
    </div>
  )
}
