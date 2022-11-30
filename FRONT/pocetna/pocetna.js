function loginbox(){
    if(document.getElementById("loginbox").getAttribute("open") == "da"){
        document.getElementById("loginbox").style.display="none";
        document.getElementById("loginbox").setAttribute('open', 'ne');
    }
    else{
        document.getElementById("loginbox").style.display="block";
        document.getElementById("loginbox").setAttribute('open', 'da');
        return 0;
    }
}

async function Login()
{

    var username = document.getElementById("korisnickoIme_input").value;
    var password = document.getElementById("pass_input").value;

    let login = (await axios.post(LINK + '/api/user/login',{
        
        mail:username,
        password:password
    })).data;

    if(login.uspesnost)
    {
        localStorage.setItem("key",login.id);
        loginbox();
    }
}