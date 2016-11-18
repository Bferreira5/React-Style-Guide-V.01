import _ from 'lodash'
import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer(['PatientListStore', 'PatientStore'])
export default class Workspace extends Component {
  static propTypes = {
    PatientStore: React.PropTypes.object.isRequired,
    PatientListStore: React.PropTypes.object.isRequired
  }

  onCompleteClick () {
    const { PatientStore } = this.props
    PatientStore.status = 'complete'
  }

  onPendingClick () {
    const { PatientStore } = this.props
    PatientStore.status = 'pending'
  }

  render () {
    const { PatientStore, PatientListStore } = this.props
    const DiagnosisStore = PatientStore.diagnoses
    
    const math = `${PatientListStore.complete.length}/${PatientListStore.patients.length}`
    let contents

    if (PatientStore.empty) {
      contents = (
        <section className='hero non-ideal is-fullheight'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
                <strong>{math}</strong> Patient data requests completed
              </h1>
              <h2 className='subtitle'>
                Please select another patient to begin adding clinical data
              </h2>
            </div>
          </div>
        </section>
      )
    } else {
      const buttons = (
        <div className='control is-grouped'>
          <a className='button is-medium is-primary' onClick={this.onCompleteClick.bind(this)}>Complete</a>
          <a className='button is-medium is-warning' onClick={this.onPendingClick.bind(this)}>Pending</a>
        </div>
      )
      
      contents = (
        <div className='patient__overview hero is-fullheight'>
          <div className='container'>
              <div className='title is-1'>{PatientStore.name}</div>
              <div className='subtitle is-5'>{PatientStore.trf}</div>
              {buttons}
            </div>
        </div>
      )
    }

    return (
      <div className='workspace'>
        {contents}
      </div>
    )
  }
}
