import React from 'react';
import { NewsPage } from './pages/news-page/news-page'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DetailedArticle } from './pages/detailed-article/detailed-article'
import './App.css';
import { Appbar } from './components/appbar/appbar'

class App extends React.Component{
  constructor() {
    super()
  
    this.state = {
      
    }
  }
  render(){
    return(
      
      <div>
         <Appbar />
         <BrowserRouter>
         <Switch>
           <Route exact path='/' component={NewsPage}/>
           <Route  path='/article/:title/:description' component={DetailedArticle}/>
         </Switch>
         </BrowserRouter>
      </div>
    )
  }

  
}

export default App;

