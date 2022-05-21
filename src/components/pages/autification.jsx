import React from 'react';

const Autification = () => {
    return (
        <div>
            <main style={{"minHeight": "70vh"}}>
                <h2 className="text-center text-white bg-primary m-2">Аутентификация</h2>
                <div className="p-3">
                    <form className="w-50 m-auto border p-3" style={{"minWidth": "300px"}}>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
                            <input type="email" className="form-control" id="email"/>
                                <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Введите пароль:</label>
                            <input type="password" className="form-control" id="password"/>
                                <div className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная
                                    буква, 1 - заглавная буква
                                </div>
                        </div>

                        <input type="submit" className="btn btn-primary"/>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Autification;

