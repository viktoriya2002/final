import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Auth = () => {
    let [user, setUser]=useState({email:'',password:''})
    function send(e){
        e.preventDefault()
        let body=JSON.stringify(user)
        console.log(user)
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${localStorage.token}`)
        myHeaders.append("Content-Type", "application/json")
        let request_options={headers: myHeaders, body: body, method: 'POST'}
        fetch('http://pets.сделай.site/api/login', request_options)

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
                <h2 className="text-center text-white bg-success m-2">Вход в кабинет</h2>
                <div className="p-3">
                    <form onSubmit={send} className="w-50 m-auto border p-3" style={{"minWidth": "300px"}}>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
                            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUser({user, email: e.target.value})}/>
                            <div className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Введите пароль:</label>
                            <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUser({user, password: e.target.value})}/>
                            <div className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная
                                буква, 1 - заглавная буква
                            </div>
                        </div>

                        <div className="row_align">
                            <Link to ={'/profile'}>
                                <input type="submit" className="btn btn-success"/>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>

            <div className={'text-center border-1 border-info rounded-1 border p-1 m-3'} id={'message'} style={{display: 'none'}}>Вход выполнен!</div>
            <div className={'text-center border-1 border-danger rounded-1 border p-1 m-3'} id={'error'} style={{display: 'none'}}>Вход не выполнен.</div>

        </div>
    );
};

export default Auth;