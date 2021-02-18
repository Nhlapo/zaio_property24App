import React from "react"
import { BrowserRouter } from 'react-router-dom'
import propertyHouse from './img/propertyHouse.jpg';


function Search() {
    return (
        <BrowserRouter>
            <div className="container card-panel blue darken-2">
                <br></br>
                <form id="input">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="input-group">
                                <input size="50" type="white-text" style={{ fontSize: 19, textAlign: "center" }} class=" " placeholder="Search for your home"></input>
                                <span class="input-group-btn"></span>
                                <button id="searchbtn" type="button" class="waves-effect red darken-10 col s5 m2 btn">Search</button>
                            </div>
                        </div>
                    </div>
                </form>


                <h6>Find by:</h6>

                <button id="findbytbn" type="button" class="waves-effect waves-red btn-small btn-dark">Aria</button>
                <button id="findbytbn" type="button" class="waves-effect waves-red btn-small btn-dark">Agency</button>
                <button id="findbytbn" type="button" class="waves-effect waves-red btn-small btn-dark">Address</button>

            </div>

            <div className="container">
                <div class="row">
                    <div class="col s12 m7 ">
                        <div class="card" style={{ width: '40rem' }}>
                            <div class="card-image">

                                <img className="photo" src={propertyHouse} alt="Property24"></img>
                            </div>
                        </div>
                    </div>
                    <di class="col s12 m7">
                        <div class="card" id="join" >
                            <h2 className="blue-text" style={{ fontWeight: 'bold' }}>R 1 650 000</h2>
                            <h7>3 bedroom house</h7><br></br>
                            <h8 style={{ fontWeight: 'bold' }}>Maridana Da Gama</h8><br></br>
                            <h9 className="blue-text">6 conifer close</h9>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </di>
                </div>

                <p>Welcome to Property24</p>
            </div>

            <div className="container">

            </div>
        </BrowserRouter>

    );
}

export default Search