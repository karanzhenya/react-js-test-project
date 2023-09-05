import {wordEnding} from "../../assets/wordEnding";
import './Settings.css'

export default function Settings(props) {
    return (
        <section className='settings'>
            <div className='settingsContainer'>
                <div className='countSettings'>
                    <h4>Количество пассажиров</h4>
                    <div className='settingsControllers'>
                        <button onClick={props.removePassenger}>-</button>
                        <span>{props.passengersCount}</span>
                        <button onClick={props.addPassenger}>+</button>
                    </div>
                </div>
                <div className='priceBlock'>
                    <span>стоимость</span>
                    <h4>{props.passengersCount*849} RUB</h4>
                    <span className='ticketsCountInfo'>за {props.passengersCount} {wordEnding('билет', props.passengersCount)}</span>
                </div>
            </div>
        </section>
    )
}