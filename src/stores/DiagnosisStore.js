import _ from 'lodash'
import { observable, action, computed } from 'mobx'

export default class DiagnosisStore {
  static percentage = 20
  static model = {
    disease: '',
    stage: 0,
    complete: false
  }

  @observable diagnoses = []

  @computed get complete () {
    return _.filter(this.diagnoses, (diagnosis) => diagnosis.complete)
  }

  @computed get allComplete () {
    return _.size(this.complete) === _.size(this.diagnoses)
  }

  @action add (diagnosis = DiagnosisStore.model) {
    this.diagnoses.push(diagnosis)
  }

  @action markAllComplete () {
    if (this.diagnoses.length === this.complete.length) return

    _.forEach(this.diagnoses, (diagnosis) => {
      diagnosis.complete = true
    })
  }

  @action resetComplete () {
    _.forEach(this.diagnoses, (diagnosis) => {
      diagnosis.complete = false
    })
  }
}
