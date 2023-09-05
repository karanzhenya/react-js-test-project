import {useNavigate} from "react-router-dom";
import './PassengerList.css'

function PassengersList(props) {
    const navigate = useNavigate();
    return (
        <section className='listContainer'>
            <h2 onClick={() => navigate(-1)} className='backButton'>&lArr; Назад</h2>
            {props.passengers.map(p => <ul key={p.id} className='passengersList'>
                    <li>Имя: {p.firstName}</li>
                    <li>Фамилия: {p.surname}</li>
                    <li>Отчество: {p.middleName}</li>
                    <li>Гражданство: {p.nationality}</li>
                    <li>Пол: {p.gender}</li>
                    <li>Дата рождения: {p.birthday}</li>
                    <li>Возрастной тариф: {p.ageRate}</li>
                    <li>Тип документ: {p.document}</li>
                    <li>Номер документ: {p.documentNumber}</li>
                    <hr/>
                </ul>
            )}
        </section>
    );
}

export default PassengersList;