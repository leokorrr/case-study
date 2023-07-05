import { Content } from "@/components/Content"
import { PatientHeader } from "@/components/PatientHeader"
import { GENDERS } from "@/utils/constants"

async function getPatientData() {
  const res = await fetch(process.env.API_URL)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const patientData = await getPatientData()

  const patientId = patientData[0].client_id
  const gender = GENDERS[patientData[0].gender - 1]
  const ethnicity = patientData[0].ethnicity
  const dateOfBirth = patientData[0].date_birthdate

  return (
    <main>
      <div className='w-full flex justify-center'>
        <div className='max-w-[1656px] w-full px-[32px]'>
          <PatientHeader id={patientId} gender={gender} ethnicity={ethnicity} dateOfBirth={dateOfBirth} />
          <Content patientData={patientData} />
        </div>
      </div>
    </main>
  )
}
