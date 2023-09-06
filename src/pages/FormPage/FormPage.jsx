import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useFieldArray, useForm} from "react-hook-form";
import {v1} from 'uuid';
import Settings from "../../components/Settings/Settings";
import {ageRate, document, errorsEnum, gender, nationality} from "../../enum/enum";
import './FormPage.css'

function FormPage(props) {
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
        props.changePassengersData(data[`passengers`])
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
        remove(fields.length - 1)
        setPassengersCount(passengersCount - 1)
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
                                                required: errorsEnum.required
                                            })}
                                            className={errors?.passengers?.[index]?.nationality ? "error" : ""}
                                            defaultValue={nationality.Belarus}
                                        >
                                            <option value='' disabled selected>Выберите Гражданство</option>
                                            <option value={nationality.Belarus}>{nationality.Belarus}</option>
                                            <option value={nationality.Russian}>{nationality.Russian}</option>
                                            <option value={nationality.Ukraine}>{nationality.Ukraine}</option>
                                            <option value={nationality.French}>{nationality.French}</option>
                                        </select>
                                        {errors.passengers && <p>{errors?.passengers[index]?.nationality?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <select
                                            placeholder="Возрастной тариф"
                                            {...register(`passengers.${index}.ageRate`, {
                                                required: errorsEnum.required
                                            })}
                                            className={errors?.passengers?.[index]?.ageRate ? "error" : ""}
                                            defaultValue={ageRate.children}
                                        >
                                            <option value='' disabled selected>Выберите возрастной тариф</option>
                                            <option value={ageRate.children}>{ageRate.children}</option>
                                            <option value={ageRate.teenager}>{ageRate.teenager}</option>
                                            <option value={ageRate.adult}>{ageRate.adult}</option>
                                        </select>
                                        {errors.passengers && <p>{errors?.passengers[index]?.ageRate?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <div className="genderToggle">
                                            <div className="genderToggleItem male">
                                                <input {...register(`passengers.${index}.gender`, {
                                                    required: errorsEnum.requiredMaleFemale
                                                })} id={`${index} + male`} type="radio" value={gender.male}/>
                                                <label htmlFor={`${index} + male`}>М</label>
                                            </div>
                                            <div className="genderToggleItem female">
                                                <input {...register(`passengers.${index}.gender`, {
                                                    required: errorsEnum.requiredMaleFemale
                                                })} id={`${index} + female`} type="radio" value={gender.female}/>
                                                <label htmlFor={`${index} + female`}>Ж</label>
                                            </div>
                                        </div>
                                        {errors.passengers && <p>{errors?.passengers[index]?.gender?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <input
                                            placeholder="Фамилия"
                                            {...register(`passengers.${index}.surname`, {
                                                required: errorsEnum.required
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
                                                required: errorsEnum.required
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
                                                required: errorsEnum.required
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
                                                   required: errorsEnum.required
                                               })}
                                               className={errors?.passengers?.[index]?.birthday ? "error" : ""}
                                               defaultValue={''}
                                        />
                                        {errors.passengers && <p>{errors?.passengers[index]?.birthday?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <select
                                            {...register(`passengers.${index}.document`, {
                                                required: errorsEnum.required
                                            })}
                                            className={errors?.passengers?.[index]?.document ? "error" : ""}
                                            defaultValue={document.passport}
                                        >
                                            <option value='' disabled selected>Выберите вид документа</option>
                                            <option value={document.passport}>{document.passport}</option>
                                            <option
                                                value={document.birthCertificate}>{document.birthCertificate}</option>
                                            <option value={document.driverLicense}>{document.driverLicense}</option>
                                            <option value={document.residentCard}>{document.residentCard}</option>
                                            <option
                                                value={document.internationalPassport}>{document.internationalPassport}</option>
                                        </select>
                                        {errors.passengers && <p>{errors?.passengers[index]?.document?.message}</p>}
                                    </label>
                                    <label className='itemForm'>
                                        <input
                                            placeholder="Номер документа"
                                            {...register(`passengers.${index}.documentNumber`, {
                                                required: errorsEnum.required
                                            })}
                                            className={errors?.passengers?.[index]?.documentNumber ? "error" : ""}
                                            defaultValue={''}
                                        />
                                        {errors.passengers &&
                                            <p>{errors?.passengers[index]?.documentNumber?.message}</p>}
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
