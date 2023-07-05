import { IApiItem } from "../../types"
import { formatDate } from "./formatDate"

export const getTestDates = (data: IApiItem[]) => {
  const dates = data.map((item: IApiItem) => formatDate(item.date_testing))

  return dates
}