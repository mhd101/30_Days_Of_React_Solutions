/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import "./App.css";
import Country from "./Country";
import axios from "axios";

// function App() {
//   const [countryData, setCountryData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       const API_URL = "https://restcountries.com/v3.1/all";
//       try {
//         const response = await fetch(API_URL);
//         const data = await response.json();
//         setLoading(true);
//         setCountryData(data);
//       } catch (error) {
//         console.log(error)
//       }
//     };
//     // fetchData()
//     setTimeout(() => {
//       fetchData();
//     }, 2000);
//   }, []);

//   const formattedData = countryData.map((country) => (
//     <Country country={country} />
//   ));

//   const loadingAnimation = (
//     <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47567eslww025j0h2etrrs23p0r8x2tc7kyan51j2o&ep=v1_gifs_search&rid=giphy.gif&ct=g"></img>
//   );

//   return <div>{loading ? formattedData : loadingAnimation}</div>;
// }

function App() {
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const API_URL = await "https://restcountries.com/v3.1/all";

    axios
      .get(API_URL)
      .then((response) => {
        setLoading(true)
        setCountryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formattedData = countryData.map((country) => (
    <Country country={country} />
  ));

  const loadingAnimation = (
    <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47567eslww025j0h2etrrs23p0r8x2tc7kyan51j2o&ep=v1_gifs_search&rid=giphy.gif&ct=g"></img>
  );

  return <div>
    {loading ? formattedData : loadingAnimation}
  </div>;
}

export default App;
