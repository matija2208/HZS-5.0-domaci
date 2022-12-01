function loginbox(){
    if(document.getElementById("loginbox").getAttribute("open") == "da"){
        document.getElementById("loginbox").style.display="none";
        document.getElementById("loginbox").setAttribute('open', 'ne');
    }
    else{
        document.getElementById("loginbox").style.display="block";
        document.getElementById("loginbox").setAttribute('open', 'da');
    }
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
      if(document.getElementById("loginbox").getAttribute("open") == "da"){
        document.getElementById("loginbox").style.display="none";
        document.getElementById("loginbox").setAttribute('open', 'ne');
    }
    }
  }

async function ifLogedIn()
{
    let key = localStorage.getItem("key");
    //console.log(key);
    if(key!=null)
    {
        let user = (await axios.post(LINK + '/api/user/get',{
            id:key
        })).data.user;

        //console.log(user);

        if(user != undefined)
        {
            document.getElementById("trebaMiId").innerHTML = "Moj Nalog";

            let div = `
                <h1 class="logboxdata">${user.username}</h1>
                <a class="logboxdatalink" href = "../IzmeniNalog/izmeniNalog.js">Izmeni Nalog</a><br>
                <a class="logboxdatalink" href = "../IzmeniNalog/izmeniPassword.js">Izmeni Password</a><br><br>
                <input class="dugme" type="button" value="ODJAVI SE" onclick="OdjaviSe()"/>
            `
            document.getElementById("loginbox").innerHTML=div;
        }
    }
}

function OdjaviSe()
{
    localStorage.removeItem("key");
    document.getElementById("trebaMiId").innerHTML = "Prijavi se";

    let div = `
            <input class="polje_unos"type='text' id="korisnickoIme_input" placeholder='Korisničko ime ili email:'  /><br>
            <input class="polje_unos"type='password' id="pass_input" placeholder='Lozinka:'  /><br>
            <input class="dugme" type='button' value="PRIJAVI SE" id="registracija" onclick="Login()" />
            <a href="../Registruj se/registracija.html" class="reg-nav">Registruj se</a>
            `
    document.getElementById("loginbox").innerHTML=div;

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
        ifLogedIn();
    }
}

ifLogedIn();