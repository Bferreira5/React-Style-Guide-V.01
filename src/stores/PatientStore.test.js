import _ from 'lodash'
import { isObservableObject } from 'mobx'
import PatientStore from './PatientStore'
import DiagnosisStore from './DiagnosisStore'
import mockPatients from '../mocks/patients-mock'

describe('# PatientStore', () => {
  let patient
  const sampleTrf = 'TRF20394350394'
  const samplePatientData = _.find(mockPatients, { trf: sampleTrf })

  beforeEach(() => {
    patient = new PatientStore(samplePatientData)
  })

  it('reports as "empty" if there is no trf value', () => {
    expect(patient.empty).toBe(false)
    patient = new PatientStore()
    expect(patient.empty).toBe(true)
  })

  it('contains a DiagnosisStore', () => {
    const diagnosisStore = patient.diagnoses
    const diagnoses = diagnosisStore.diagnoses
    expect(isObservableObject(diagnosisStore)).toBe(true)
    expect(diagnosisStore).toBeInstanceOf(DiagnosisStore)
    expect(_.size(diagnoses)).toBe(0)
  })

  it('throws an error when changeStatus is called with an invalid value', () => {
    expect(() => patient.changeStatus('brawndo')).toThrow()
  })

  it('changes the status when a valid status value is supplied', () => {
    expect(patient.status).toBe('complete')
    patient.changeStatus('PeNdInG') // case-insensitive
    expect(patient.status).toBe('pending')
  })
})
