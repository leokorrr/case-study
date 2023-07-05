import { IChartData, IDataKey } from '../../../types'

export interface ICrossCompareChart {
  data: IChartData | {}
  dataKeys: IDataKey[]
}