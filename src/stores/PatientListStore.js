import { observable, action, computed } from 'mobx'
import _ from 'lodash'
import mockPatients from '../mocks/patients-mock'
import PatientStore from './PatientStore'

export default class PatientListStore {
  @observable activePatientTrf = ''
  @observable patients = []
  default = new PatientStore()

  constructor (patients, defaultTrf) {
    if (_.isEmpty(patients)) {
      // TODO this setTimeout is just a stub for now since this API call will be async
      setTimeout(function mockAsyncCall () {
        this.replacePatients(mockPatients, defaultTrf)
      }.bind(this), 200)
    } else {
      this.replacePatients(mockPatients, defaultTrf)
    }
  }

  @computed get activePatient () {
    const found = _.find(this.patients, (patient) => patient.trf === this.activePatientTrf)
    return found || this.default
  }

  @computed get activePatientIndex () {
    return _.findIndex(this.patients, (patient) => patient.trf === this.activePatient.trf)
  }

  @computed get complete () {
    return _.filter(this.patients, (patient) => patient.status === 'complete')
  }

  @action setActivePatient (patientTrf) {
    const found = _.find(this.patients, (patient) => patient.trf === patientTrf)
    if (!found) return
    this.activePatientTrf = found.trf
  }

  @action replacePatients (list, defaultPatientTrf) {
    this.patients = _.map(list, (patient) => {
      return new PatientStore(patient)
    })

    if (defaultPatientTrf) {
      const found = _.find(this.patients, (patient) => patient.trf === defaultPatientTrf)
      this.activePatientTrf = found.trf
      this.setActivePatient(defaultPatientTrf)
    }
  }

  @action changeStatus (status = 'pending') {
    this.activePatient.status = status
  }
}
