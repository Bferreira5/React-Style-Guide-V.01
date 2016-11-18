import PatientListStore from './PatientListStore'
import mockPatients from '../mocks/patients-mock'

describe('# PatientListStore', () => {
  let store
  const sampleTrf = 'TRF20394350394'

  beforeEach(() => {
    store = new PatientListStore(mockPatients, sampleTrf)
  })

  it('sets a default, empty PatientStore if no trf is passed in', () => {
    store = new PatientListStore(mockPatients)
    const patient = store.activePatient
    expect(patient.empty).toBe(true)
  })

  it('finds the default patient when a TRF is supplied', () => {
    const patient = store.activePatient
    expect(patient.empty).toBe(false)
    expect(patient.name).toBe('Claudia Adkins')
  })

  it('resets the patient list to ', () => {
    store.replacePatients([])
    const patient = store.activePatient
    expect(patient.empty).toBe(true)
    expect(store.patients.length).toBe(0)
  })

  it('gets the active patient index ', () => {
    expect(store.activePatientIndex).toBe(3)
  })

  it('changes the status for the active patient', () => {
    expect(store.activePatient.status).toBe('complete')
    store.changeStatus('pending')
    expect(store.activePatient.status).toBe('pending')
  })

  it('sets the active patient based on a given trf', () => {
    store.setActivePatient('TRF32402439499')
    expect(store.activePatient.name).toBe('Clara Barker')
  })
})
