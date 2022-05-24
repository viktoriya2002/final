import React from 'react';


const Edit_pets = () => {
    return (
        <div>

            <main style={{"minHeight": "70vh"}}>
                <h2 className="text-center text-white bg-success m-2">Редактирование объявления</h2>
                <div className="p-3">
                    <form className="w-50 m-auto border border-success p-3" style={{"minWidth": "300px"}}>

                        <div className="mb-3">
                            <label htmlFor="kind" className="form-label">Введите вид животного:</label>
                            <input type="text" className="form-control" id="kind"/>
                            <div className="form-text">Обязательное поле</div>
                        </div>


                        <div className="mb-3 p-3 border">
                            <label htmlFor="image1" className="form-label">Выберите файлы изображений:</label>
                            <input type="file" className="form-control" id="image1"/>
                            <div className="form-text">Обязательное поле</div>
                            <input type="file" className="form-control mb-3" id="image2"
                            />
                            <input type="file" className="form-control mb-3" id="image3"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="chip" className="form-label">Электронный чип:</label>
                            <input type="text" className="form-control" id="chip"/>
                            <div className="form-text">Обязательное поле.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Описание:</label>
                            <textarea className="form-control" id="description">&nbsp;</textarea>
                            <div className="form-text">Обязательное поле.</div>
                        </div>


                        <input type="submit" className="btn btn-success form-control" />
                    </form>
                </div>
            </main>

        </div>
    );
};

export default Edit_pets;