/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const Cat = ({ data: { title, subtitle, totalCats, average } }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <p>There are {totalCats} cat breeds.</p>
      <p>On Average a cat can live {average} years.</p>
    </div>
  );
};

function App() {
  const [data, setData] = useState([]);

  const fetchCatData = () => {
    const API_URL = "https://api.thecatapi.com/v1/breeds";

    axios
      .get(API_URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  const avgLifeSpan = [];

  data.map((cat) => {
    const avgArray = cat.life_span.split(" "); // convert the object into array
    avgArray.splice(1, 1); // remove the - from the array

    //looping into life_span array
    let sum = 0;
    let count = 0;
    for (let i = parseInt(avgArray[0]); i <= avgArray[1]; i++) {
      sum += i;
      count++;
    }
    // calculating avg life_span of individual cats
    const avgLifeSpanInd = sum / count;
    avgLifeSpan.push(avgLifeSpanInd); // pushing avg
  });

  // looping into all cats average array
  let sum = 0;
  let count = 0;
  for (const average of avgLifeSpan) {
    sum += average;
    count++;
  }

  // calulating average life_span of all cats
  const catAvgLifeSpan = (sum / count).toFixed(2);

  const catData = {
    title: "30 Days of React",
    subtitle: "Cats Paradise",
    totalCats: data.length,
    average: catAvgLifeSpan,
  };

  return (
    <div>
      <Cat data={catData}/>
    </div>
  );
}

export default App;
