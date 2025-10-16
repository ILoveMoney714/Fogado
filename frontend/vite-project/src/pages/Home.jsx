import React, { useState } from 'react';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Napraforgo from '../components/Napraforgo';
import Szallas from '../components/Szallas';
import { Tab } from 'bootstrap';
import Tablazat from '../components/tablazat';
import Parameteres from "../components/parameteres";
import Kihasznaltsag from "../components/Kihasznaltsag";

function Home() {

  return (
    <>
        <div className="home">
            <div className='fej'>
                <Header />
            </div>
            <br />
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 napraforgo">
              <Napraforgo />
            </div>
            <div className="col-md-4 col-sm-6">
              <Szallas />
            </div>
            <div className="col-md-4 col-sm-6 napraforgo">  
              <Tablazat />
            </div>
          </div> 
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Parameteres />
            <Kihasznaltsag />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;