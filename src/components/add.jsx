import React from 'react';
import img1 from './image/pets/кошка.jpg'
import img2 from './image/pets/коза.jpeg'

const Add = () => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Добавленные объявления</h2>
            <div className="d-flex flex-row flex-wrap">
                <div className="d-flex flex-row flex-wrap border m-3 p-3 position-relative"
                     style={{"minWidth": "300px", "width":"45%"}}>
                    <img src={img1} className="w-75" alt="рисунок животного"/>
                        <p className="w-50 text-primary" style={{"minWidth": "250px"}}>id:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}>14</p>

                        <p className="w-50 text-primary" style={{"minWidth": "250px"}}>Вид животного:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}> Кошка</p>

                        <p className="w-50 text-primary" style={{"minWidth": "250px"}}>Описание:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}>Потерялась кошка, пушистая, серая. Любит играть,
                            ласковая.</p>

                        <p className="w-50 text-primary" style={{"minWidth": "250px"}}>Номер чипа:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}>ca-001-spb</p>

                        <p className="w-50 text-primary" style={{"minWidth": "250px"}}>Район:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}>Василиостровский</p>

                        <p className="w-50 text-primary" style={{"minWidth": "250px"}}>Дата:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}>24-03-2020</p>
                        <div className="position-absolute text-danger"
                             style={{"top":"15px", "right": "15px", "cursor": "pointer"}}>&#10060;</div>
                        <button type="submit" className="btn btn-primary">Редактировать объявление</button>
                </div>
                <div className="d-flex flex-row flex-wrap border m-3 p-3 position-relative"
                     style={{"minWidth": "300px", "width":"45%"}}>
                    <img src={img2} className="w-75" alt="рисунок животного"/>
                        <p className="w-50 text-primary" style={{"minWidth": "250px"}}>id:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}>18</p>

                        <p className="w-50 text-primary" style={{"minWidth": "250px"}}>Вид животного:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}> Коза</p>

                        <p className="w-50 text-primary" style={{"minWidth": "300px"}}>Описание:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>Потерялась коза, последний раз видели в здании
                            Московского вокзала
                            г. Санкт-Петербург. Коза белая, пуховая.</p>

                        <p className="w-50 text-primary" style={{"minWidth": "300px"}}>Номер чипа:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>go-011-spb</p>

                        <p className="w-50 text-primary" style={{"minWidth": "300px"}}>Район:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>Центральный</p>

                        <p className="w-50 text-primary" style={{"minWidth": "300px"}}>Дата:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>14-03-2022</p>
                        <div className="position-absolute text-danger"
                             style={{"top":"15px", "right": "15px", "cursor": "pointer"}}>&#10060;</div>
                        <button type="submit" className="btn btn-primary">Редактировать объявление</button>
                </div>
            </div>
        </div>

    );
};

export default Add