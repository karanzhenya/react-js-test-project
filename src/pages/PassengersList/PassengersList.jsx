import {useNavigate} from "react-router-dom";
import './PassengerList.css'
import Passenger from "./Passenger/Passenger.jsx";

function PassengersList({passengers}) {
    const navigate = useNavigate();
    return (
        <section className='listContainer'>
            <h2 onClick={() => navigate(-1)} className='backButton'>&lArr; Назад</h2>
            {passengers.map(passenger => <Passenger passenger={passenger} key={passenger.id}/>
            )}
        </section>
    );
}

export default PassengersList;