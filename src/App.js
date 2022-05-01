import { useEffect, useState } from 'react';
import Axios from 'axios'
import Coin from './components/Coin';

const App = () => {

  const [listOfCoins, setListOfCoins] = useState([])
  const [searchWord, setSearchWord] = useState("")

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
      .then(
        (res) => {
          setListOfCoins(res.data.coins)
          console.log(res.data.coins)
        }
      )
  }, [])

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase())
  })

  return (
    <div>
      <div className='cryptoHeader'>
        <input
          type="text"
          placeholder='Search coins......'
          onChange={(e) => { setSearchWord(e.target.value) }}
        />
      </div>
      <div className='cryptoDisplay'>
        {filteredCoins.map((coin) => {
          return (<Coin coin={coin} />)
        })}
      </div>
    </div>
  );
}

export default App;
