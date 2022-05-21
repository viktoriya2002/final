import React from 'react';

const Cabinet = () => {
    return (
        <div>
            <main style={{"minHeight": "70vh"}}>
                <h2 className="text-center text-white bg-primary m-2">Личный кабинет</h2>
                <div className="p-3">
                    <div className="d-flex flex-row flex-wrap border m-auto p-3 w-50" style={{"minWidth": "300px"}}>

                        <p className="w-50 text-primary" style={{"minWidth": "250px"}}>id:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}>14</p>

                        <p className="w-50 text-primary" style={{"minWidth": "250px"}}>Телефон:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}>+7-911-456-78-78</p>

                        <p className="w-50 text-primary" style={{"minWidth": "300px"}}>email:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>leonid@yandex.ru</p>

                        <p className="w-50 text-primary" style={{"minWidth": "300px"}}>Имя:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>Леонид</p>

                        <p className="w-50 text-primary" style={{"minWidth": "300px"}}>Дата регистрации:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>26-06-2015</p>

                        <p className="w-50 text-primary" style={{"minWidth": "300px"}}>Количество найденных животных:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>2</p>

                        <p className="w-50 text-primary" style={{"minWidth": "300px"}}>Количество объявлений:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>4</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Cabinet