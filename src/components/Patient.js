import _ from 'lodash'
import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer class Patient extends Component {
  static propTypes = {
    PatientStore: React.PropTypes.shape({
      gender: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      status: React.PropTypes.string.isRequired,
      trf: React.PropTypes.string.isRequired,
      updated: React.PropTypes.object.isRequired,
      diagnoses: React.PropTypes.object.isRequired
    }).isRequired,
    active: React.PropTypes.bool.isRequired
  }

  static defaultProps = {
    PatientStore: {},
    active: false
  }

  render () {
    const { PatientStore, active } = this.props
    const isComplete = _.lowerCase(PatientStore.status) === 'complete'

    const css = {
      container: active ? 'patient patient--active' : 'patient',
      name: 'patient__name title is-5',
      status: isComplete ? 'patient__status tag is-primary' : 'patient__status tag is-warning'
    }

    return (
      <div className={css.container}>
        <div className='top'>
          <span className='patient__icon'>
            <p>as</p>
          </span>
          <div className='patient__details'>
            <span className={css.name}>{PatientStore.name}</span>

            <p className='subtitle is-6'>
              <span className='patient__dob'>{PatientStore.formattedDate(PatientStore.dob, PatientStore.dateFormats.simple)}</span>
              <span className='patient__gender'>{_.capitalize(PatientStore.gender)}</span>
            </p>
          </div>
        </div>

        <div className='patient__updated'>
          Updated | <span>{PatientStore.formattedDate(PatientStore.updated)}</span>
        </div>

        <div className='patient__status'>
          <span className={css.status}>{PatientStore.status}</span>
        </div>
      </div>
    )
  }
}

export default Patient
