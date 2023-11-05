import React from "react";
import "./app.css";
import { Routes, Route} from "react-router-dom"
import Sidebar from "./Sidebar";
import RecommandedVideos from "./Recommandedvideos";

export default function RenderPage(){
    return(
        <>
            <Routes>
                <Route path='/' element={
                  <div className="app__body">
                   <Sidebar />
                   <RecommandedVideos />        
                  </div>
                  }>
                   
                </Route>
            </Routes>
        </>
    )
}