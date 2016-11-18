import _ from 'lodash'
import DiagnosisStore from './DiagnosisStore'

describe('# DiagnosisStore', () => {
  let store

  beforeEach(() => {
    store = new DiagnosisStore()
  })

  it('defaults to having 0 diagnoses', () => {
    expect(store.diagnoses.length).toBe(0)
  })

  it('adds a diagnosis', () => {
    const dummyData = {
      disease: 'Cooties',
      stage: 5,
      complete: true
    }
    store.add(dummyData)
    expect(store.diagnoses.length).toBe(1)
    store.add()
    expect(store.diagnoses.length).toBe(2)
    expect(_.first(store.diagnoses).disease).toBe(dummyData.disease)
  })

  it('gets the number of completed diagnoses', () => {
    store.add()
    store.add()
    expect(store.complete.length).toBe(0)
    store.add({ complete: true })
    expect(store.complete.length).toBe(1)
  })

  it('knows if all diagnoses are complete', () => {
    store.add({ complete: false })
    store.add({ complete: true })
    expect(store.allComplete).toBe(false)
    _.first(store.diagnoses).complete = true
    expect(store.allComplete).toBe(true)
  })

  it('can mark all diagnoses complete', () => {
    store.add()
    store.add()
    store.add()
    expect(store.complete.length).toBe(0)
    store.markAllComplete()
    expect(store.complete.length).toBe(3)
  })

  it('can mark all diagnoses incomplete', () => {
    store.add()
    store.add()
    store.add()
    store.markAllComplete()
    expect(store.complete.length).toBe(3)
    store.resetComplete()
    expect(store.complete.length).toBe(0)
  })
})
