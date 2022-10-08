const register = () => {
    let fullName = prompt("To'liq ismingizni kiriting")
    let password = prompt("parolni kiriting")
    let date = new Date().toDateString()
    if(fullName !== '' && password !== '' && fullName !== null && password !== null) {
        let user = {
            name: fullName,
            password,
            date,
        }
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user))
    }
    else if(fullName == '' || password === '' || fullName == null || password === null) {
        console.log("bo'sh joylarni to'ldiring");
        register()
    }
}

const login = () => {
    let password = prompt("parolni kiriting")
    let user = JSON.parse(localStorage.getItem('user'))
    if(`${password}` === `${user.password}`){
        console.log(user);
    }else {
        console.log("registratsiyadan o'ting")
        register()
    }
}