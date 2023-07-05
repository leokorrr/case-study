import React from 'react'
import { IPatientHeader } from './types'
import { formatDate } from '@/utils/formatDate'

export const PatientHeader: React.FC<IPatientHeader> = (props) => {
  const { id, gender, ethnicity, dateOfBirth } = props

  const patientData = [
    {
      label: 'Gender',
      value: gender
    },
    {
      label: 'Ethnicity',
      value: ethnicity
    },
    {
      label: 'Date of birth',
      value: formatDate(dateOfBirth)
    },
  ]

  return (
    <div>
      <div className='font-semibold text-[24px] mb-[8px]'>Patient: {id}</div>
      <div className='font-medium flex gap-[8px]'>
        {patientData.map(item => <div key={item.label}>
          <span className='text-grey-500 '>{item.label}: {' '}</span>
          {item.value}
        </div>)}
      </div>
    </div>
  )
}
