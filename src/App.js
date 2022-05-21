import React from 'react';
import {Routes,Route} from "react-router-dom";
import Index from "./components/pages/index";
import Profile from "./components/pages/profile";
import Registration from "./components/pages/registration";
import New from "./components/pages/new";
import Search from "./components/pages/search";
import Edit_pets from "./components/pages/edit_pets";
import Autification from "./components/pages/autification";
import Pet from "./components/pages/pet";
import Orders from "./components/pages/orders";


function App() {
  return (
    <div>
        <Routes>
            <Route path={'/index'} element={<Index/>}/>
            <Route path={'/registration'} element={<Registration/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/new'} element={<New/>}/>
            <Route path={'/orders'} element={<Orders/>}/>
            <Route path={'/search'} element={<Search/>}/>

            <Route path={'/edit_pets'} element={<Edit_pets/>}/>
            <Route path={'/autification'} element={<Autification/>}/>
            <Route path={'/pet'} element={<Pet/>}/>
        </Routes>
    </div>
  );
};

export default App;
