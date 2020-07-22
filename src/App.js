import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from './baseUrl'

import { AppContainer, Button } from './styles'

import Profile from './components/Home/Profile';
import Matches from './components/Matches/Matches';

const App = props => {

  const [changeScreen, setChangeScreen] = useState(true)

  const screen = () => {
    setChangeScreen(!changeScreen)
  }

  const clearMatches = async () => {
    try {
      await axios.put(`${baseUrl}/clear`)

      window.location.reload()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <AppContainer>
      {changeScreen === true ? <Profile screen={screen}/> : <Matches screen={screen}/>}
      <Button onClick={clearMatches}>Limpar swipes e matches</Button>     
    </AppContainer>
  );
}

export default App;
