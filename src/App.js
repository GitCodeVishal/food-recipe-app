import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Layout from "./components/Layout";
import Details from "./components/Details";

function App() {

  const [input, setInput] = useState('');
  const [fetchData, setFetchData] = useState(null);

  const getRecipe = async (value) => {
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${input}`);
      if (!response.ok) throw Error('Error occured while fetching data')
      const data = await response.json();
      setFetchData(data);

    } catch (err) {
      console.log(err.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipe(input);
  }



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout handleSubmit={handleSubmit} setInput={setInput} />}>
          <Route path="favorites" element={<Favorites />} />
          <Route path="details/:recipeID" element={<Details/>}/>
          <Route index element={<Home fetchData={fetchData} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
