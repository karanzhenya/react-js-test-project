import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useFieldArray, useForm} from "react-hook-form";
import {v1} from 'uuid';
import Settings from "../../components/Settings/Settings";
import {ageRate, document, errorsMessage, gender, nationality} from "../../constants/constants";
import './FormPage.css'
import {SelectOptions} from "../../assets/SelectOptions";

function FormPage({changePassengersData}) {
    const [passengersCount, setPassengersCount] = useState(1)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        control,
        formState: {errors}
    } = useForm({
        defaultValues: {
            passengers: [{
                id: v1(),
                nationality: '',
                ageRate: '',
                gender: '',
                surname: '',
                firstName: '',
                middleName: '',
                birthday: '',
                document: '',
                documentNumber: ''
            }]
        },
        mode: "onSubmit"
    });
    const {fields, append, remove} = useFieldArray({
        name: 'passengers',
        control
    });
    const onSubmit = (data) => {
        changePassengersData(data[`passengers`])
        navigate('/passengers')
    };
    const addPassenger = () => {
        append({
            id: v1(),
            nationality: '',
            ageRate: '',
            gender: '',
            surname: '',
            firstName: '',
            middleName: '',
            birthday: '',
            document: '',
            documentNumber: ''
        })
        setPassengersCount(passengersCount + 1)
    }
    const removePassenger = () => {
        if (passengersCount > 1) {
            remove(fields.length - 1)
            setPassengersCount(passengersCount - 1)
        }
    }
    return (
        <div className='formPage'>
            <Settings passengersCount={passengersCount} addPassenger={addPassenger} removePassenger={removePassenger}/>
            <section className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {fields.map((field, index) => {
                        return (
                            <div key={field.id} className="formContainer">
                                <h3>Данные о пассажире {index + 1}</h3>
                                <section className={"formFields"} key={field.id}>
                                    <label className='itemForm'>
                                        <select
                                            placeholder="Гражданство"
                                            {...register(`passengers.${index}.nationality`, {
                                                required: errorsMessage.required
                                            })}
                                            className={errors?.passengers?.[index]?.nationality ? "error" : ""}
                                        >
                                            <SelectOptions array={nationality} initialText='Выберите гражданство'/>
                                        </select>
                                        {errors?.passengers && <p>{errors?.passengers[index]?.nationality?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <select
                                            placeholder="Возрастной тариф"
                                            {...register(`passengers.${index}.ageRate`, {
                                                required: errorsMessage.required
                                            })}
                                            className={errors?.passengers?.[index]?.ageRate ? "error" : ""}
                                        >
                                            <SelectOptions array={ageRate} initialText='Выберите возрастной тариф'/>
                                        </select>
                                        {errors.passengers && <p>{errors?.passengers[index]?.ageRate?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <div className="genderToggle">
                                            <div className="genderToggleItem male">
                                                <input {...register(`passengers.${index}.gender`, {
                                                    required: errorsMessage.requiredMaleFemale
                                                })} id={`${index} + male`} type="radio" value={gender.male}/>
                                                <label htmlFor={`${index} + male`}>М</label>
                                            </div>
                                            <div className="genderToggleItem female">
                                                <input {...register(`passengers.${index}.gender`, {
                                                    required: errorsMessage.requiredMaleFemale
                                                })} id={`${index} + female`} type="radio" value={gender.female}/>
                                                <label htmlFor={`${index} + female`}>Ж</label>
                                            </div>
                                        </div>
                                        {errors?.passengers && <p>{errors?.passengers[index]?.gender?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <input
                                            placeholder="Фамилия"
                                            {...register(`passengers.${index}.surname`, {
                                                required: errorsMessage.required
                                            })}
                                            className={errors?.passengers?.[index]?.surname ? "error" : ""}
                                            defaultValue={''}
                                        />
                                        {errors.passengers && <p>{errors?.passengers[index]?.surname?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <input
                                            placeholder="Имя"
                                            {...register(`passengers.${index}.firstName`, {
                                                required: errorsMessage.required
                                            })}
                                            className={errors?.passengers?.[index]?.firstName ? "error" : ""}
                                            defaultValue={''}
                                        />
                                        {errors.passengers && <p>{errors?.passengers[index]?.firstName?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <input
                                            placeholder="Отчество"
                                            {...register(`passengers.${index}.middleName`, {
                                                required: errorsMessage.required
                                            })}
                                            className={errors?.passengers?.[index]?.middleName ? "error" : ""}
                                            defaultValue={''}
                                        />
                                        {errors.passengers && <p>{errors?.passengers[index]?.middleName?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <input type='text'
                                               onFocus={(e) => (e.target.type = "date")}
                                               placeholder="Дата рождения"
                                               {...register(`passengers.${index}.birthday`, {
                                                   required: errorsMessage.required
                                               })}
                                               className={errors?.passengers?.[index]?.birthday ? "error" : ""}
                                        />
                                        {errors.passengers && <p>{errors?.passengers[index]?.birthday?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <select
                                            {...register(`passengers.${index}.document`, {
                                                required: errorsMessage.required
                                            })}
                                            className={errors?.passengers?.[index]?.document ? "error" : ""}
                                        >
                                            <SelectOptions array={document} initialText='Выберите вид документа'/>
                                        </select>
                                        {errors.passengers && <p>{errors?.passengers[index]?.document?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <input
                                            placeholder="Номер документа"
                                            {...register(`passengers.${index}.documentNumber`, {
                                                required: errorsMessage.required
                                            })}
                                            className={errors?.passengers?.[index]?.documentNumber ? "error" : ""}
                                        />
                                        {errors.passengers && <p>{errors?.passengers[index]?.documentNumber?.message}</p>}
                                    </label>
                                </section>
                            </div>
                        );
                    })}
                    <div className='submitButton'>
                        <input type="submit" value='Отправить' name='Отправить'/>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default FormPage;
