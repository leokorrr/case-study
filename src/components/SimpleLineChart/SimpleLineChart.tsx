'use client'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from "recharts"
import { ISimpleLineChart } from "./types"
import { getGraphData } from "@/utils/getGraphData"

const CustomizedDot = (props: any) => {
  const { cx, cy, value, color, minValue, maxValue } = props

  if (value < minValue || value > maxValue) {
    return (
      <svg height="120" width="120" x={cx - 10} y={cy - 10}>
        <circle cx="10" cy="10" r="4" stroke="#CC0000" stroke-width="2" fill="#FFFFFF" />
      </svg>
    )
  }

  return (
    <svg height="120" width="120" x={cx - 10} y={cy - 10}>
      <circle cx="10" cy="10" r="4" stroke={color} stroke-width="2" fill="#FFFFFF" />
    </svg>
  )
}

export const SimpleLineChart: React.FC<ISimpleLineChart> = (props) => {
  const { dataKey, data, name, color, range = [] } = props

  const graphData = getGraphData(dataKey, data)

  const minValue = range[0]
  const maxValue = range[1]

  const flagsCount = graphData.map((it) => Number(it[dataKey]) < minValue || Number(it[dataKey]) > maxValue).filter(Boolean).length

  return (
    <>
      {flagsCount > 0 ? (
        <div className="mb-[12px] flex items-center">
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.6667 2.5H8.33337V12.5H11.6667V2.5ZM8.33337 15.8333C8.33337 14.9129 9.07957 14.1667 10 14.1667C10.9205 14.1667 11.6667 14.9129 11.6667 15.8333C11.6667 16.7538 10.9205 17.5 10 17.5C9.07957 17.5 8.33337 16.7538 8.33337 15.8333Z" fill="#CC0000" />
          </svg>
          {flagsCount} flags
        </div>) : null}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={graphData}
          width={500}
          height={300}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={maxValue} label="Max" stroke={color} strokeDasharray="3 3" />
          <ReferenceLine y={minValue} label="Min" stroke={color} strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey={dataKey}
            name={name}
            stroke={color}
            strokeWidth={2}
            dot={<CustomizedDot color={color} minValue={minValue} maxValue={maxValue} />}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
