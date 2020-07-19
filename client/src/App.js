import React from 'react';
import { NewsPage } from './pages/news-page/news-page'
import './App.css';
import { Appbar } from './components/appbar/appbar'

class App extends React.Component{
  constructor() {
    super()
  
    this.state = {
      text : "Hello"
    }
  }
  render(){
    return(
      <div>
        <Appbar />
        <NewsPage />
      </div>
    )
  }

  
}

export default App;

