import React, { useRef } from 'react';
import './form.css'

export default function Form() {
    const employee = []
    const order_type = useRef()
    const order = useRef()
    const date_order = useRef()
    const last_name = useRef()
    const name = useRef()
    const surname = useRef()
    const birthday = useRef()
    const id_passports = useRef()
    const pinfl = useRef()
    const passport_issue_date = useRef()
    const passport_expiration_date = useRef()
    const passport_issued_by = useRef()
    const place_of_registration = useRef()
    const place_of_living = useRef()
    const phone_number = useRef()
    const position = useRef()

    function send(e) {
        e.preventDefault()
        const newEmployee = {
            order_type: order_type.current.value,
            order: order.current.value,
            date_order: date_order.current.value,
            last_name: last_name.current.value,
            name: name.current.value,
            surname: surname.current.value,
            birthday: birthday.current.value,
            id_passports: id_passports.current.value,
            pinfl: pinfl.current.value,
            passport_issue_date: passport_issue_date.current.value,
            passport_expiration_date: passport_expiration_date.current.value,
            passport_issued_by: passport_issued_by.current.value,
            place_of_registration: place_of_registration.current.value,
            place_of_living: place_of_living.current.value,
            phone_number: phone_number.current.value,
            position: position.current.value
        }
        employee.push(newEmployee)
        console.log(employee);
    }


    return (
        <section>
            <div className='d-flex justify-content-between p-2 title_border'>
                <div>
                    <p className='title_form'>Форма создание нового приказа</p>
                </div>
                <div>
                    <i class="bi bi-x h4 icon_x"></i>
                </div>
            </div>
            <form className='form_new_employee' onSubmit={send}>
                <div className='row p-2 row_border'>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Тип приказа</p>
                        <select required ref={order_type} className='form-control border border-secondary' name="" id="">
                            <option selected disabled value="">О принатии сотрудника</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>№ приказа</p>
                        <input required ref={order} className='form-control border border-secondary' type="number" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Дата приказа</p>
                        <input required ref={date_order} className='form-control border border-secondary' type="date" />
                    </div>
                </div>
                <div className='row p-2'>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Фамилия</p>
                        <input required ref={last_name} className='form-control border border-secondary' type="text" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Имя</p>
                        <input required ref={name} className='form-control border border-secondary' type="text" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Отчество</p>
                        <input required ref={surname} className='form-control border border-secondary' type="text" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Дата рождения</p>
                        <input required ref={birthday} className='form-control border border-secondary' type="date" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Серия и номер паспорта</p>
                        <input required ref={id_passports} className='form-control border border-secondary' type="text" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>ПИНФЛ</p>
                        <input required ref={pinfl} className='form-control border border-secondary' type="text" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Дата выдачи паспорта</p>
                        <input required ref={passport_issue_date} className='form-control border border-secondary' type="date" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Дата оканчание срока  паспорта</p>
                        <input required ref={passport_expiration_date} className='form-control border border-secondary' type="date" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Кем выдан паспорт</p>
                        <input required ref={passport_issued_by} className='form-control border border-secondary' type="text" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Место прописки</p>
                        <input required ref={place_of_registration} className='form-control border border-secondary' type="text" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Место проживание</p>
                        <input required ref={place_of_living} className='form-control border border-secondary' type="text" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Телефон номер</p>
                        <input required ref={phone_number} className='form-control border border-secondary' type="number" />
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3'>
                        <p className='m-0 text_for_form'>Дольжность</p>
                        <select required ref={position} className='form-control border border-secondary' name="" id="">
                            <option selected disabled value="">Выбрать</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className='btn btn-danger ms-2 mt-2'>Send</button>
            </form>
        </section>
    );
}
