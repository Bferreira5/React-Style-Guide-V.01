import { extendObservable, computed, action, reaction } from 'mobx'
import _ from 'lodash'

import DiagnosisStore from './DiagnosisStore'

export default class PatientStore {
  static model = {
    name: '',
    gender: '',
    updated: '', // moment date string
    status: 'pending',
    trf: ''
  }

  static statuses = ['pending', 'complete']
  static dateFormats = {
    datetime: 'MM/DD/YY hh:mm a',
    simple: 'MM/DD/YY'
  }

  constructor (patient = PatientStore.model) {
    extendObservable(this, patient)
    this.diagnoses = new DiagnosisStore()
  }

  formattedDate (date, format = PatientStore.dateFormats.datetime) {
    const formatted = date.format(format)
    if (_.includes(formatted, 'nvalid')) {
      console.log('formatted', formatted, date)
    } 
    return formatted
  }

  get dateFormats () {
    return PatientStore.dateFormats
  }

  @computed get empty () {
    return _.isUndefined(this.trf) || _.isEmpty(this.trf)
  }

  @action changeStatus (toStatus = '') {
    const status = toStatus.toLowerCase()

    if (!_.includes(PatientStore.statuses, status)) {
      const errorMessage = ```
        You called PatientStore.changeStatus() with ${status}, 
        but only the following are valid choices: ${PatientStore.statuses.join(', ')}
      ```
      throw new Error(errorMessage)
    }

    this.status = status
  }
}
