import React from 'react';

function Passenger({passenger}) {
    return (
        <ul key={passenger.id} className='passengersList'>
            <li>Имя: {passenger.firstName}</li>
            <li>Фамилия: {passenger.surname}</li>
            <li>Отчество: {passenger.middleName}</li>
            <li>Гражданство: {passenger.nationality}</li>
            <li>Пол: {passenger.gender}</li>
            <li>Дата рождения: {passenger.birthday}</li>
            <li>Возрастной тариф: {passenger.ageRate}</li>
            <li>Тип документ: {passenger.document}</li>
            <li>Номер документ: {passenger.documentNumber}</li>
            <hr/>
        </ul>
    );
}

export default Passenger;