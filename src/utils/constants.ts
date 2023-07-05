import { IDataKey } from "../../types"

export const GENDERS = ['M', 'F']

export const DATA_KEYS: IDataKey[] = [
  {
    label: 'Fasting Glucose',
    value: 'fasting_glucose',
    color: '#9693d5',
    range: [60, 100]
  },
  {
    label: 'Potassium',
    value: 'potassium',
    color: '#ca9721',
    range: [4, 8]
  },
  {
    label: 'Sodium',
    value: 'sodium',
    color: '#3fc86d',
    range: [60, 100]
  },
  {
    label: 'Creatine',
    value: 'creatine',
    color: '#2e7c38',
    range: [0.5, 1]
  },
  {
    label: 'Chloride',
    value: 'chloride',
    color: '#b7b5a8',
    range: [80, 110]
  },
  {
    label: 'Total Calcium',
    value: 'total_calcium',
    color: '#2ca2a7',
    range: [6, 12]
  },
  {
    label: 'Total Protein',
    value: 'total_protein',
    color: '#d89aab',
    range: [6, 10]
  },
]
