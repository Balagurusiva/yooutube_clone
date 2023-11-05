import React from "react";
import "./app.css";
import Header from "./Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from "./Sidebar";
import RecommandedVideos from "./Recommandedvideos";
import SearchPage  from './SearchPage'
 
export default function App(){
  return(
    
    <div>
      <Router>
        <Header />
        <Routes>
          <Route 
          path='/search/:searchterm' 
          element=
          {
            <div className="app__body">
              <Sidebar />
              <SearchPage />        
             </div>
          } /> 
          <Route 
            path='/' 
            element =
            {
             <div className="app__body">
              <Sidebar />
              <RecommandedVideos />        
             </div>
            } />
           
        </Routes>
      </Router>
    </div>
     
  )
}
 