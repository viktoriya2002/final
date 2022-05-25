import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Auth = () => {
    let history = useNavigate()
    async function my_request(e) {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(Login)

        };
        console.log(requestOptions)
        let res = fetch("http://pets.сделай.site/api/login", requestOptions)
            .then(response=>response.json())

            //.then(response=>localStorage.token=response.data.token)
            .then(response=>{console.log(response)
                if ('data' in response){
                    localStorage.token=response.data.token
                    history("/profile")
                } else document.getElementById('ERROR').style.display='block'
            })
    }

    let [Login, setLogin] = useState({email:'',password:''});
    localStorage.token=null
    return (
        <div>

            <div style={{"minHeight": "70vh"}}>
                <h2 className="text-center text-white bg-success m-2">Вход в кабинет</h2>
                <div className="divider-custom">
                </div>
                <div className="p-3">
                    <form className="w-50 m-auto border p-3" style={{"minWidth": "300px"}} onSubmit={my_request}>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
                            <input type="email" className="form-control" id="email" required onChange={(e)=>setLogin({...Login, email:e.target.value})}/>
                            <div className="form-text">Мы никогда не делимся Вашим e-mail</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Введите пароль:</label>
                            <input type="password" className="form-control" id="password" required pattern={'/^(?=.*[A-Z])(?=.*[\\d])(?=.*[a-z]){7,}$/'} onChange={(e)=>setLogin({...Login, password:e.target.value})}/>
                            <div className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная
                                буква, 1 - заглавная буква
                            </div>
                        </div>

                        <input type={"submit"} className="btn btn-primary" value={'Войти'}/>
                    </form>
                </div>
            </div>
            <div className="p-3" id={'ERROR'} style={{display:'none'}}>
                <form className="w-50 m-auto border p-3" style={{"minWidth": "300px"}}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Ошибка входа в кабинет. Перероверьте почту или пароль.</label>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Auth;