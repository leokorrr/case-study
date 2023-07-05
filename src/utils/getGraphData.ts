import { IApiItem, IBiomarkers } from "../../types"
import { formatDate } from "./formatDate"

export const getGraphData = (dataKey: IBiomarkers, data: IApiItem[]) => {
  const graphData = data.map((item: IApiItem) => ({
    name: formatDate(item.date_testing),
    [dataKey]: item[dataKey],
  }))

  return graphData
}