import Header from "../components/Header.js"
import Redirect from "../utils/Redirect.js"
import __ENV from "../env.js"

export default function Login(){

    window.login = () => {
        fetch(__ENV + '/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: document.getElementById('user').value,
                password: document.getElementById('password').value
            }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.login !== true){
                    document.getElementById('errLog').innerText = data.err
                } else {
                    Redirect('/')
                }
            })
    }

    return (/*html*/ `
        ${Header()}
            <h1>Login</h1>
            <div>
                <label for="user">Username / E-mail: </label>
                <input type="text" name="user" id="user" />
                <label for="password">Password: </label>
                <input type="password" name="password" id="password" />
                <button onclick="login()">Login</button>
                <div id="errLog"></div>
            </div>
    `)
}