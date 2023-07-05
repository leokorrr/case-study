import { IApiItem, IBiomarkers, IChartData, IDataKey } from '../../types'
import { formatDate } from './formatDate'

export const getCrossCompareChartData = (data: IApiItem[], date: string, biomarkers: IDataKey[]) => {
  const testingDateResults = data.find(
    (item: IApiItem) => formatDate(item.date_testing) === date
  )

  const crossCompareChartData = testingDateResults ? biomarkers.reduce(
    (acc: IChartData, biomarker: IDataKey) => ({
      ...acc,
      [biomarker.value]: testingDateResults[biomarker.value as IBiomarkers]
    }),
    {}
  ) : {}

  return crossCompareChartData
}
