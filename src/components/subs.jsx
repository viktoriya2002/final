import React, {useState} from 'react';

const Subs = () => {
    let [email, setEmail]=useState({email: ''})
    function send(e){
        e.preventDefault()
        let body=JSON.stringify(email)
        console.log(email)
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${localStorage.token}`)
        myHeaders.append("Content-Type", "application/json")
        let request_options={headers: myHeaders, body: body, method: 'POST'}
        fetch('http://pets.сделай.site/api/subscription', request_options)

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
            <form onSubmit={send} className="w-50 m-auto p-3" style={{"minWidth": "300px"}}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
                    <input type={"email"} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail({email: e.target.value})}/>
                    <div id="emailHelp" className="form-text">Мы никогда не делимся Вашим e-mail ни с кем.</div>
                </div>
                <button type="submit" className="btn btn-success">Подписаться</button>
            </form>

            <div className={'text-center border-1 border-info rounded-1 border p-1 m-3'} id={'message'} style={{display: 'none'}}>Вы успешно подписались!</div>
            <div className={'text-center border-1 border-danger rounded-1 border p-1 m-3'} id={'error'} style={{display: 'none'}}>Вам не удалось подписаться.</div>
        </div>
    );
};

export default Subs;