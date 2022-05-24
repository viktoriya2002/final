import React, {useState} from 'react';

const Register = () => {
    let [user, setUser]=useState({name:'',phone:'',email:'',password:'',confirm:1})
    function send(e){
        e.preventDefault()
        let body=JSON.stringify(user)
        console.log(user)
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${localStorage.token}`)
        myHeaders.append("Content-Type", "application/json")
        let request_options={headers: myHeaders, body: body, method: 'POST'}
        fetch('http://pets.сделай.site/api/register', request_options)

            .then(response=>{let status=response.status
                switch(status){
                    case 204: document.getElementById('message').style.display='block'
                        document.getElementById('error').style.display='none'
                        break
                    case 422: document.getElementById('message').style.display='none'
                        document.getElementById('error').style.display='block'
                        break
                }}
            )}
    return (
        <div>
            <main style={{"minHeight": "70vh"}}>
                <h2 className="text-center text-white bg-success m-2">Регистрация</h2>
                <div className="p-3">
                    <form onSubmit={send} className="w-50 m-auto border p-3" style={{"minWidth": "300px"}}>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Введите имя:</label>
                            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUser({...user, name: e.target.value})}/>
                            <div id="emailHelp1" className="form-text">Используйте кириллические буквы</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Введите свой телефон:</label>
                            <input type="phone" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" onChange={(e)=>setUser({...user, phone: e.target.value})}/>
                            <div className="form-text">Используйте цифры, +, -.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
                            <input type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" onChange={(e)=>setUser({...user, email: e.target.value})}/>
                            <div className="form-text">Мы никогда не делимся Вашим e-mail ни с кем.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Введите пароль:</label>
                            <input type="password" className="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" onChange={(e)=>setUser({...user, password: e.target.value})}/>
                            <div className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная
                                буква, 1 - заглавная буква
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirm_password" className="form-label">Повторите пароль:</label>
                            <input type="password" className="form-control" id="confirm_password"/>
                            <div className="form-text">&nbsp;</div>
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="check"/>
                            <label className="form-check-label" htmlFor="check">Согласие на обработку персональных данных</label>
                        </div>

                        <input type="submit" className="btn btn-success"/>
                    </form>
                </div>
            </main>

            <div className={'text-center border-1 border-info rounded-1 border p-1 m-3'} id={'message'} style={{display: 'none'}}>Регистрация успешно завершена!</div>
            <div className={'text-center border-1 border-danger rounded-1 border p-1 m-3'} id={'error'} style={{display: 'none'}}>Вам не удалось зарегистрироваться.</div>
        </div>
    );
};

export default Register;