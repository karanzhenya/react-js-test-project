import {useState} from "react";
import {Route, Routes} from 'react-router-dom'
import FormPage from "./pages/FormPage/FormPage";
import PassengersList from "./pages/PassengersList/PassengersList";

function App() {
    const [passengers, setPassengers] = useState([])
    const changePassengersData = (newPassengers) => {
        setPassengers(newPassengers)
    }
    return (
            <Routes>
                <Route path={'/'} element={<FormPage changePassengersData={changePassengersData}/>}/>
                <Route path={'/passengers'} element={<PassengersList passengers={passengers}/>}/>
            </Routes>
    )
}

export default App;
