import moment from 'moment'

const getMockMoment = (minYear = 1950) => {
  const years = _.range(minYear, 2016)
  const months = _.range(1, 12)
  const days = _.range(1, 30)
  const hours = _.range(1, 12)
  const minutes = _.range(1, 59)

  let hour = _.sample(hours)
  hour = _.sample([true, false]) ? hour * 2 : hour
  const year = _.sample(years)
  const month = _.sample(months)
  const day = _.sample(days)
  const minute = _.sample(minutes)

  const date = moment([year, month, day, hour, minute])

  if (!date.isValid()) {
    return getMockMoment()
  }

  return date 
}

const patients = [
  {
    name: 'Dennis Hogan',
    gender: 'male',
    updated: getMockMoment(2011),
    dob: getMockMoment(),
    status: 'pending',
    trf: 'TRF123456789.1'
  },
  {
    name: 'Ian Norris',
    gender: 'male',
    updated: getMockMoment(2011),
    dob: getMockMoment(),
    status: 'pending',
    trf: 'TRF34958394599'
  },
  {
    name: 'Lulu Swanson',
    gender: 'female',
    updated: getMockMoment(2011),
    dob: getMockMoment(),
    status: 'pending',
    trf: 'TRF45949459493'
  },
  {
    name: 'Claudia Adkins',
    gender: 'female',
    updated: getMockMoment(2011),
    dob: getMockMoment(),
    status: 'complete',
    trf: 'TRF20394350394'
  },
  {
    name: 'Charlotte Garza',
    gender: 'female',
    updated: getMockMoment(2011),
    dob: getMockMoment(),
    status: 'pending',
    trf: 'TRF19234932420'
  },
  {
    name: 'John Silva',
    gender: 'male',
    updated: getMockMoment(2011),
    dob: getMockMoment(),
    status: 'pending',
    trf: 'TRF34923904132'
  },
  {
    name: 'Blanche Adams',
    gender: 'female',
    updated: getMockMoment(2011),
    dob: getMockMoment(),
    status: 'pending',
    trf: 'TRF12349823493'
  },
  {
    name: 'Winnie Houston',
    gender: 'female',
    updated: getMockMoment(2011),
    dob: getMockMoment(),
    status: 'pending',
    trf: 'TRF23424323445'
  },
  {
    name: 'Clara Barker',
    gender: 'female',
    updated: getMockMoment(2011),
    dob: getMockMoment(),
    status: 'pending',
    trf: 'TRF32402439499'
  }
]

module.exports = patients
