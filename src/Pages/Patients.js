import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Patients() {
    const[API, setAPI] = useState({
        items: [],
        isLoaded: false
    });

    const componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                setAPI({
                    isLoaded: true,
                    items:json
                })
            })
    };

    componentDidMount();

    var { isLoaded, items } = API;

    // if (!isLoaded) {
    //     return <div>Loading...</div>
    // }

    return(
        <>
                <div className='search-box'>
                    <input className='search-txt' type='text' placeholder="Search patient's name, ID" />
                    <Link className='search-btn' to='#'></Link>
                </div>
                <div className='buttonPatients'>
                    <button type='submit'>Add Patient</button>
                </div>
                
                <div className='patients'>
                    <div className='cardStat'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/visits.png"} />
                        <h4>17</h4><p>Average Visits</p>
                    </div>
                    <div className='cardStat'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/patient.png"} />
                        <h4>45</h4><p>Patients</p>
                    </div>
                    <div className='cardStat'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/doctor.png"} />
                        <h4>15</h4><p>Nurses</p>
                    </div>
                    <div className='cardStat'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/doctor.png"} />
                        <h4>15</h4><p>Doctors</p>
                    </div>
                    <div className='cardBottomPatients'>
                        <h4>Patient list</h4><p></p>
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    Name: {item.FirstName} | Email: {item.Email}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <div className='cardStat'>
                        Calender
                    </div> */}
                    {/* <h1>Dashboard</h1> */}
                </div>
        </>
    );
}

export default Patients;