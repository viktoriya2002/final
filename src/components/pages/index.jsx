import React from 'react';
import img1 from "../image/pets/собака.jpg";
import img2 from "../image/pets/мышь.jpg";
import img3 from "../image/pets/горилла.jpg";
import img4 from "../image/pets/кошка.jpg";
import img5 from "../image/pets/коза.jpeg";

const Index = () => {
    return (
        <div>

            <main style={{'minHeight':'70vh'}} className="main main-expand-lg main-light bg-success p-2 text-dark bg-opacity-10">
                <h2 className="text-center text-white bg-success m-2">Найденные животные</h2>
                <div id="carouselExampleIndicators"
                     className="carousel slide m-auto bg-primary bg-opacity-10 w-75 p-2" data-bs-ride="carousel"
                     style={{"minHeight": "400px"}}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1">&nbsp;</button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2">&nbsp;</button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3">&nbsp;</button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h2 className="text-center">Найдена собака!</h2>
                            <img src={img1} className="d-block" alt="Собака"
                                 style={{"width": "300px", "float": "left"}}/>
                            <p> &nbsp; &nbsp; Рыжая собака породы Басенджи была найдена в Красногвардейском
                                районе.</p>
                        </div>
                        <div className="carousel-item">
                            <h2 className="text-center">Найдена мышь!</h2>
                            <img src={img2} className="d-block" alt="Мышь"
                                 style={{"width": "300px", "float": "left"}}/>
                            <p> &nbsp; &nbsp; Мышь коричневого оттенка была найдена в Центральном районе.</p>
                        </div>
                        <div className="carousel-item">
                            <h2 className="text-center">Найдена горилла!</h2>
                            <img src={img3} className="d-block" alt="Горилла"
                                 style={{"minWidth": "300px", "float": "left"}}/>
                            <p> &nbsp; &nbsp; Горилла была найдена в Приморском районе.</p>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button"
                            data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true">&nbsp;</span>
                        <span className="visually-hidden">Предыдущий</span>
                    </button>
                    <button className="carousel-control-next" type="button"
                            data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true">&nbsp;</span>
                        <span className="visually-hidden">Следующий</span>
                    </button>
                </div>

                <h2 className="text-center text-white bg-success m-2">Карточки найденных животных</h2>
                <div className="d-flex flex-row flex-wrap">
                    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{"minWidth": "300px","width":"45%"}}>
                        <img src={img4} className="w-75" alt="рисунок животного"/>
                        <p className="w-50 text-success" style={{"minWidth": "250px"}}>id:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}>14</p>

                        <p className="w-50 text-success" style={{"minWidth": "250px"}}>Вид животного:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}> Кошка</p>

                        <p className="w-50 text-success" style={{"minWidth": "300px"}}>Описание:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}> &nbsp; &nbsp; Потерялась кошка, пушистая,
                            серая. Любит играть, ласковая.</p>

                        <p className="w-50 text-success" style={{"minWidth": "300px"}}>Номер чипа:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>ca-001-spb</p>

                        <p className="w-50 text-success" style={{"minWidth": "300px"}}>Район:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>Василиостровский</p>

                        <p className="w-50 text-success" style={{"minWidth": "300px"}}>Дата:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>24-03-2020</p>
                    </div>
                    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{"minWidth": "300px","width":"45%"}}>
                        <img src={img5} className="w-75" alt="рисунок животного"/>
                        <p className="w-50 text-success" style={{"minWidth": "250px"}}>id:</p>
                        <p className="w-50" style={{"minWidth": "3250px"}}>18</p>

                        <p className="w-50 text-success" style={{"minWidth": "250px"}}>Вид животного:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}> Коза</p>

                        <p className="w-50 text-success" style={{"minWidth": "300px"}}>Описание:</p>
                        <p className="w-50" style={{"minWidth": "250px"}}> &nbsp; &nbsp; Потерялась коза, последний
                            раз видели в здании Московского вокзала
                            г. Санкт-Петербург. Коза белая, пуховая.</p>

                        <p className="w-50 text-success" style={{"minWidth": "300px"}}>Номер чипа:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>go-011-spb</p>

                        <p className="w-50 text-success" style={{"minWidth": "300px"}}>Район:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>Центральный</p>

                        <p className="w-50 text-success" style={{"minWidth": "300px"}}>Дата:</p>
                        <p className="w-50" style={{"minWidth": "300px"}}>14-03-2022</p>
                    </div>
                </div>

                <h2 className="text-center text-white bg-success m-2">Подписка на новости</h2>
                <form className="w-50 m-auto p-3" style={{"minWidth": "300px"}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной
                            почты</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с
                            кем.
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success">Подписаться</button>
                </form>
            </main>

        </div>
    );
};

export default Index;