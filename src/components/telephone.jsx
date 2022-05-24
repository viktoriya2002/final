import React from 'react';

const Telephone = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-success m-2">Изменить номер телефона</h2>
            <form className="w-50 m-auto p-3" style={{"minWidth": "300px"}}>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Введите номер телефона</label>
                    <input type="tel" className="form-control" id="phone" aria-describedby="emailHelp"/>
                        <div className="form-text">Используйте цифры, +, -.</div>
                </div>

                <button type="submit" className="btn btn-success">Отправить</button>
            </form>
        </div>
    );
};

export default Telephone