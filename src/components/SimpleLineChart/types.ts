import { IApiItem, IBiomarkers } from '../../../types'

export interface ISimpleLineChart {
  dataKey: IBiomarkers
  data: IApiItem[]
  name: string
  color: string
  range?: number[]
}
