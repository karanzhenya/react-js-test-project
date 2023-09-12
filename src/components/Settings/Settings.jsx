import {wordEnding} from "../../assets/wordEnding";
import './Settings.css'

export default function Settings({removePassenger, passengersCount, addPassenger}) {
    return (
        <section className='settings'>
            <div className='settingsContainer'>
                <div className='countSettings'>
                    <h4>Количество пассажиров</h4>
                    <div className='settingsControllers'>
                        <button onClick={removePassenger}>-</button>
                        <span>{passengersCount}</span>
                        <button onClick={addPassenger}>+</button>
                    </div>
                </div>
                <div className='priceBlock'>
                    <span>стоимость</span>
                    <h4>{passengersCount*849} RUB</h4>
                    <span className='ticketsCountInfo'>за {passengersCount} {wordEnding('билет', passengersCount)}</span>
                </div>
            </div>
        </section>
    )
}