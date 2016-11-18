import React, { Component } from 'react'
import _ from 'lodash'
import { observer } from 'mobx-react'
import { Link } from 'react-router'

import Patient from './Patient'

@observer class PatientList extends Component {
  static propTypes = {
    PatientListStore: React.PropTypes.object.isRequired
  }

  static defaultProps = {
    PatientListStore: []
  }

  onPatientClicked (PatientStore) {
    const { PatientListStore } = this.props
    PatientListStore.setActivePatient(PatientStore.trf)
  }

  render () {
    const { PatientListStore } = this.props

    return (
      <ol className='patient-list'>
        {_.map(PatientListStore.patients, (PatientStore, index) => {
          const active = PatientStore.trf === PatientListStore.activePatient.trf
          const props = {
            className: 'patient-container',
            key: `patient-${index}`,
            onClick: this.onPatientClicked.bind(this, PatientStore)
          }
          return (
            <li {...props}>
              <Link to={`/patient/${PatientStore.trf}`}>
                <Patient active={active} PatientStore={PatientStore} index={index} />
              </Link>
            </li>
          )
        })}
      </ol>
    )
  }
}

export default PatientList
