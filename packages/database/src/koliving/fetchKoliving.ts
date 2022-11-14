import { fetch } from 'undici'
import { writeFile } from 'node:fs/promises'
import Promise from 'bluebird'
import path from 'node:path'

const propertyIds = [
  { _id: '62e254a591e5420016746836', propertyIdNumber: 19614 },
  { _id: '633f358dff804b0016971ac6', propertyIdNumber: 22516 },
  { _id: '634817709fe2dcb5b4a8f800', propertyIdNumber: 22563 },
  { _id: '634816129fe2dcb5b4a8f725', propertyIdNumber: 22558 },
  { _id: '63481d3f9fe2dcb5b4a9070f', propertyIdNumber: 22575 },
  { _id: '634817289fe2dcb5b4a8f7cc', propertyIdNumber: 22562 },
  { _id: '63481e289fe2dcb5b4a907bd', propertyIdNumber: 22579 },
  { _id: '6356eeca4931dd001681b8c0', propertyIdNumber: 22619 },
  { _id: '62ce7c73c71895001605c1e5', propertyIdNumber: 18299 },
  { _id: '633f3496ff804b00169719f8', propertyIdNumber: 22512 },
  { _id: '634812a99fe2dcb5b4a8f429', propertyIdNumber: 22538 },
  { _id: '6358408873378300162cab18', propertyIdNumber: 22621 },
  { _id: '6345cb99dcc3130016ba7cab', propertyIdNumber: 22531 },
  { _id: '63699ea705e74e00168f007b', propertyIdNumber: 22721 },
  { _id: '63606277dd8b5f0016bf6d60', propertyIdNumber: 22668 },
  { _id: '6348157d9fe2dcb5b4a8f6c0', propertyIdNumber: 22557 },
  { _id: '63481ec09fe2dcb5b4a90829', propertyIdNumber: 22581 },
  { _id: '63606299dd8b5f0016bf6d90', propertyIdNumber: 22672 },
  { _id: '633f34d3ff804b0016971a2c', propertyIdNumber: 22513 },
  { _id: '63481be49fe2dcb5b4a9060b', propertyIdNumber: 22569 },
  { _id: '636062bcdd8b5f0016bf6dae', propertyIdNumber: 22673 },
  { _id: '63699e7e05e74e00168f0057', propertyIdNumber: 22720 },
  { _id: '63481bbb9fe2dcb5b4a905ea', propertyIdNumber: 22568 },
  { _id: '635c6d00e66b0a00164c89a3', propertyIdNumber: 22627 },
  { _id: '621684672413b57e22ac9a48', propertyIdNumber: 7540 },
  { _id: '6363074f795ba400166299ac', propertyIdNumber: 22691 },
  { _id: '6352fa5b5a2b550016279981', propertyIdNumber: 22614 },
  { _id: '634a665fb7ed53001610f188', propertyIdNumber: 22584 },
  { _id: '62685309707e140016248e15', propertyIdNumber: 7734 },
  { _id: '626a6c22c3c4100016d4cb9f', propertyIdNumber: 7749 },
  { _id: '6366c9d10b158d0016c10710', propertyIdNumber: 22711 },
  { _id: '62ec3377cae9970016f87351', propertyIdNumber: 20108 },
  { _id: '61a9fbb68f0d95001659ad73', propertyIdNumber: 4064 },
  { _id: '61c45930e5bed20016dcbea2', propertyIdNumber: 5781 },
  { _id: '61c4540be5bed20016dcb007', propertyIdNumber: 5679 },
  { _id: '61c458bbe5bed20016dcbd80', propertyIdNumber: 5766 },
  { _id: '61c458eae5bed20016dcbdfe', propertyIdNumber: 5772 },
  { _id: '61c4587be5bed20016dcbcf0', propertyIdNumber: 5759 },
  { _id: '634585d5dcc3130016ba6ba3', propertyIdNumber: 22529 },
  { _id: '63451b26e434770016374d3b', propertyIdNumber: 22528 },
  { _id: '62e4f4c6c0fbba00161f3009', propertyIdNumber: 19758 },
  { _id: '61c98f5fedf2fb0016ad5499', propertyIdNumber: 6571 },
  { _id: '61c98f57edf2fb0016ad5484', propertyIdNumber: 6570 },
  { _id: '61c98e08edf2fb0016ad514d', propertyIdNumber: 6551 },
  { _id: '61c98dd5edf2fb0016ad5138', propertyIdNumber: 6550 },
  { _id: '61c987aeedf2fb0016ad50be', propertyIdNumber: 6547 },
  { _id: '61c98690edf2fb0016ad50bc', propertyIdNumber: 6546 },
  { _id: '618a8fbf87ea7b0016cddeba', propertyIdNumber: 4004 },
  { _id: '616eb91385e27000160b4a08', propertyIdNumber: 3936 },
  { _id: '618b8ecc68fe310016536d05', propertyIdNumber: 4008 },
  { _id: '618a8e7587ea7b0016cddeb8', propertyIdNumber: 4003 },
  { _id: '618a9f0a87ea7b0016cde498', propertyIdNumber: 4006 },
  { _id: '618a9c5287ea7b0016cde48a', propertyIdNumber: 4005 },
  { _id: '618bcb5c68fe31001653a73e', propertyIdNumber: 4010 },
  { _id: '618aa6f187ea7b0016cde50d', propertyIdNumber: 4007 },
  { _id: '618bc50068fe31001653a36c', propertyIdNumber: 4009 },
]

const GET_PROPERTY_QUERY = `query GetProperty($propertyId: String!) {
  property: getProperty(propertyId: $propertyId) {
    _id
  propertyIdNumber
  pictures {
      _id
    url
    position
    __typename
  }
  videos {
      _id
    url
    __typename
  }
  isDeactivated
  isPublished
  type
  landlord
  floor
  nbFloors
  nbBedrooms
  nbRooms
  nbUnavailableRooms
  hasUnavailableRooms
  announceValidationStatus
  isDeactivated
  surface
  surfaceTotal
  virtualVisitUrl
  title
  description
  addressObj {
      street
    city
    zip
    neighborhood
    __typename
  }
  address
  address2
  country
  locality
  neighborhood
  place
  postcode
  region
  department
  latitude
  longitude
  amenities
  hasElevator
  isKolivingPlus
  isCrushed
  createdAt
  updatedAt
  includesCoOwnershipUtilities
  company {
      _id
    name
    description
    logoUrl
    rentType
    areVisitsEnabled
    __typename
  }
  rentType
  rentInfos {
      state
    price
    rentPrice
    utilities
    deposit
    availableAt
    isAvailable
    utilities
    minimumRentalDuration
    __typename
  }
  tenant {
      _id
    socialStatus
    gender
    age
    firstname
    lastname
    phone
    bookingStartDate
    __typename
  }
  pendingBooking {
      _id
    state
    __typename
  }
  rooms {
      _id
    roomIdNumber
    surface
    pendingBooking {
        _id
      state
      __typename
    }
    rentInfos {
        price
      rentPrice
      utilities
      deposit
      availableAt
      isAvailable
      state
      utilities
      minimumRentalDuration
      __typename
    }
    tenant {
        _id
      socialStatus
      gender
      age
      firstname
      lastname
      phone
      bookingStartDate
      __typename
    }
    isDeactivated
    hasPrivateBathroom
    typeOfBed
    pictures {
        _id
      url
      position
      __typename
    }
    __typename
  }
  __typename
}
}
`

async function getProperty(id: number) {
  return fetch('https://kg-backend-prod.herokuapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      operationName: 'GetProperty',
      variables: { propertyId: id.toString() },
      query: GET_PROPERTY_QUERY,
    }),
  })
    .then((res) => {
      console.log(`Fetched ${id}`)
      return res.json()
    })
    .catch((err) => console.error(err))
}

async function getParisianProperties() {
  return Promise.map(propertyIds, (ids) => getProperty(ids.propertyIdNumber), { concurrency: 1 })
}

;(async function () {
  const properties = await getParisianProperties()
  writeFile(path.join(__dirname, 'data.json'), JSON.stringify(properties, null, 2))
})()
