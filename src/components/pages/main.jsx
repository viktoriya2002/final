import React from 'react';

const Main = () => {
    return (
        <div>
                <main className="main main-expand-lg main-light bg-success p-2 text-dark bg-opacity-10"
                      style="min-height: 70vh;">
                    <h2 className="text-center text-white bg-success m-2">Найденные животные</h2>
                    <div id="carouselExampleIndicators"
                         className="carousel slide m-auto bg-primary bg-opacity-10 w-75 p-2" data-bs-ride="carousel"
                         style="min-height: 400px;">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <h2 className="text-center">Найдена собака!</h2>
                                <img src="../image/pets/собака.jpg" className="d-block" alt="Собака"
                                     style="width: 300px; float: left"/>
                                    <p> &nbsp; &nbsp; Рыжая собака породы Басенджи была найдена в Красногвардейском
                                        районе.</p>
                            </div>
                            <div className="carousel-item">
                                <h2 className="text-center">Найдена мышь!</h2>
                                <img src="../image/pets/мышь.jpg" className="d-block" alt="Мышь"
                                     style="width: 300px; float: left"/>
                                    <p> &nbsp; &nbsp; Мышь коричневого оттенка была найдена в Центральном районе.</p>
                            </div>
                            <div className="carousel-item">
                                <h2 className="text-center">Найдена горилла!</h2>
                                <img src="../image/pets/горилла.jpg" className="d-block" alt="Горилла"
                                     style="width: 300px; float: left"/>
                                    <p> &nbsp; &nbsp; Горилла была найдена в Приморском районе.</p>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Предыдущий</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Следующий</span>
                        </button>
                    </div>

                    <h2 className="text-center text-white bg-success m-2">Карточки найденных животных</h2>
                    <div className="d-flex flex-row flex-wrap">
                        <div className="d-flex flex-row flex-wrap border m-3 p-3" style="min-width: 300px; width: 45%;">
                            <img src="../image/pets/кошка.jpg" className="w-75" alt="рисунок животного"/>
                                <p className="w-50 text-success" style="min-width: 250px;">id:</p>
                                <p className="w-50" style="min-width: 250px;">14</p>

                                <p className="w-50 text-success" style="min-width: 250px;">Вид животного:</p>
                                <p className="w-50" style="min-width: 250px;"> Кошка</p>

                                <p className="w-50 text-success" style="min-width: 300px;">Описание:</p>
                                <p className="w-50" style="min-width: 250px;"> &nbsp; &nbsp; Потерялась кошка, пушистая,
                                    серая. Любит играть, ласковая.</p>

                                <p className="w-50 text-success" style="min-width: 300px;">Номер чипа:</p>
                                <p className="w-50" style="min-width: 300px;">ca-001-spb</p>

                                <p className="w-50 text-success" style="min-width: 300px;">Район:</p>
                                <p className="w-50" style="min-width: 300px;">Василиостровский</p>

                                <p className="w-50 text-success" style="min-width: 300px;">Дата:</p>
                                <p className="w-50" style="min-width: 300px;">24-03-2020</p>
                        </div>
                        <div className="d-flex flex-row flex-wrap border m-3 p-3" style="min-width: 300px; width: 45%;">
                            <img src="../image/pets/коза.jpeg" className="w-75" alt="рисунок животного"/>
                                <p className="w-50 text-success" style="min-width: 250px;">id:</p>
                                <p className="w-50" style="min-width: 250px;">18</p>

                                <p className="w-50 text-success" style="min-width: 250px;">Вид животного:</p>
                                <p className="w-50" style="min-width: 250px;"> Коза</p>

                                <p className="w-50 text-success" style="min-width: 300px;">Описание:</p>
                                <p className="w-50" style="min-width: 250px"> &nbsp; &nbsp; Потерялась коза, последний
                                    раз видели в здании Московского вокзала
                                    г. Санкт-Петербург. Коза белая, пуховая.</p>

                                <p className="w-50 text-success" style="min-width: 300px;">Номер чипа:</p>
                                <p className="w-50" style="min-width: 300px;">go-011-spb</p>

                                <p className="w-50 text-success" style="min-width: 300px;">Район:</p>
                                <p className="w-50" style="min-width: 300px;">Центральный</p>

                                <p className="w-50 text-success" style="min-width: 300px;">Дата:</p>
                                <p className="w-50" style="min-width: 300px;">14-03-2022</p>
                        </div>
                    </div>

                    <h2 className="text-center text-white bg-success m-2">Подписка на новости</h2>
                    <form className="w-50 m-auto p-3" style="min-width: 300px;">
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

export default Main;