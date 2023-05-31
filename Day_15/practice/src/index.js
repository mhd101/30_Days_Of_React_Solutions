import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { TiArrowShuffle, TiBusinessCard, TiDelete, TiDocumentDelete, TiEdit, TiInputChecked, TiSocialFacebookCircular } from 'react-icons/ti'
import moment from 'moment'
import styled from 'styled-components'


// Fetching Data Using Axios

// const App = () => {

//   const [data, setData] = useState([])

//   useEffect(() => {

//     const fetchData = async () => {
//       const API_URL = await 'https://rescountries.com/v3.1/all'
//       axios
//         .get(API_URL)
//         .then((response) => {
//           setData(response.data)
//         })
//         .catch(error => {
//           console.log(error) // handling errors
//         })
//     }

//     fetchData()
//   }, [])

//   const formattedData = data.map((country) => (<div key={country.name.official}>
//     <p>{country.name.common}</p>
//   </div>))

//   return (
//     <div>
//       {formattedData}
//     </div>
//   )

// }

// Using React-Icons

// const App = () => {
//   return (
//     <div>
//       <span>
//         <TiDelete size={'200px'} color='red' />
//       </span>
//       <span>
//         <TiEdit size={'200px'} />
//       </span>
//       <span>
//         <TiInputChecked size={'200px'} />
//       </span>
//     </div>
//   )
// }

// Using Moment (Data & Time)

// const App = () => {
//   return(
//     <div>
//       <p>This challenge was started {moment("01-04-2023").fromNow()}</p>
//       <p>Today is {moment(new Date()).format('MMMM DD, YYYY HH:mm')}</p>
//     </div>
//   )
// }

// Using Styled-Components

const Title = styled.h1`
  font-size: 70px;
  font-weight: 300;
  color: red;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: blue;
  }
`

const App = () => {
  return(
    <div>
      <Title>30 Days of React</Title>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

