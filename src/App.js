import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Character from './components/Character'
import Pagination from './components/Pagination'

function App() {

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})

  const apiUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(apiUrl);
  }, [])

  return (
    <>
      <Navbar brand="Rick And Morty"/>

      <div className="container mt-5">
        <Pagination ant={info.prev} sig={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Character characters={characters} />
        <Pagination ant={info.prev} sig={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </>  
  );
}

export default App;
