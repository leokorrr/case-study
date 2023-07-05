export interface IApiItem {
  client_id: string
  date_testing: string
  date_birthdate: string
  gender: number
  ethnicity: number
  creatine: number
  chloride: number
  fasting_glucose: number
  potassium: number
  sodium: number
  total_calcium: number
  total_protein: number
  creatine_unit: string
  chloride_unit: string
  fasting_glucose_unit: string
  potassium_unit: string
  sodium_unit: string
  total_calcium_unit: string
  total_protein_unit: string
}

export interface IDataKey {
  label: string
  value: IBiomarkers
  color: string
  unit?: string
  range?: number[]
}

export interface IChartData {
  chloride?: number
  creatine?: number
  fasting_glucose?: number
  potassium?: number
  sodium?: number
  total_calcium?: number
  total_protein?: number
}


export type IBiomarkers = 'fasting_glucose' | 'potassium' | 'sodium' | 'creatine' | 'chloride' | 'total_calcium' | 'total_protein'

export type IBiomarkersUnit = 'fasting_glucose_unit' | 'potassium_unit' | 'sodium_unit' | 'creatine_unit' | 'chloride_unit' | 'total_calcium_unit' | 'total_protein_unit'