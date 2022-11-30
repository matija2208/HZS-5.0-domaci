var valid_test;

function everything_filled(entries){
    if(entries.korisnickoIme_input.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyNameWarning").classList.remove("hidden");
    } else document.getElementById("EmptyNameWarning").classList.add("hidden");

    if(entries.mail_input.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyMailWarning").classList.remove("hidden");
    } else document.getElementById("EmptyMailWarning").classList.add("hidden");

    if(entries.pass_input.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyPassWarning").classList.remove("hidden");
    } else document.getElementById("EmptyPassWarning").classList.add("hidden");

    if(entries.pass_repeat.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyRepeatWarning").classList.remove("hidden");
    } else document.getElementById("EmptyRepeatWarning").classList.add("hidden");
}

function regex_valid_name(entries){
    var pattern = /^[A-Za-z0-9]{1,30}$/;
    var tekst = entries.korisnickoIme_input.value;
    var test = tekst.match(pattern);

    if (test == null) {
        document.getElementById("ErrorNameWarning").classList.remove("hidden");
        valid_test = false;
    } else{
      console.log("validirano korisnicko ime korisnika...");
      document.getElementById("ErrorNameWarning").classList.add("hidden");
    }
}
function regex_valid_ime(entries){
    var pattern = /^[A-Za-z0-9 ]{1,100}$/;
    var tekst = entries.ime_input.value;
    var test = tekst.match(pattern);
    
    if (test==null){
        document.getElementById("ErrorImeWarning").classList.remove("hidden");
        valid_test = false;
    } else{
        console.log("validirano ime korisnika...");
        document.getElementById("ErrorImeWarning").classList.add("hidden");
    }
}

function regex_valid_mail(entries){
    var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var tekst = entries.mail_input.value;
    var test = tekst.match(pattern);

    if (test == null) {
        document.getElementById("ErrorMailWarning").classList.remove("hidden");
        valid_test = false;
    } else{
      console.log("validiran email korisnika...");
      document.getElementById("ErrorMailWarning").classList.add("hidden");
    }
}

function regex_valid_pass(entries){
   var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
   var tekst = entries.pass_input.value;
   var test = tekst.match(pattern);

   if (test == null) {
        document.getElementById("ErrorPassWarning").classList.remove("hidden");
        valid_test = false;
    } else{
      console.log("validirana lozinka korisnika...");
      document.getElementById("ErrorPassWarning").classList.add("hidden");
    }
}

function regex_valid_repeat(entries){
    var password = entries.pass_input.value;
    var repeatPass = entries.pass_repeat.value;
    if(password != repeatPass){
        valid_test = false;
        document.getElementById("ErrorRepeatWarning").classList.remove("hidden");
    } else{
        console.log("validirana ponovljena lozinka korisnika...");
        document.getElementById("ErrorRepeatWarning").classList.add("hidden");
    }
}

////
function ValidirajRegister(){
    valid_test = true;
    var entries = document.getElementById("forma");
    regex_valid_ime(entries);
    everything_filled(entries);
    regex_valid_name(entries);
    regex_valid_mail(entries)
    regex_valid_pass(entries);
    regex_valid_repeat(entries);
    
    // if(valid_test == true){
    //     var users = await getData();
    //     var t=true;
    //     users.forEach(i => {
    //         if(i.email===entries.mail_input.value)
    //         {
    //             t=false;
    //         }
    //     });
    //     if(t){
    //         await registruj(entries);
    //         location.href="login.html";
    //     }else{
    //         document.getElementById("SameMailWarning").classList.remove("hidden");
    //     }
    // } 
    // else
    // {
    //     console.log("Korisnik se ne registruje");
    // }

    if(valid_test != true){
        console.log("Korisnik se ne registruje")
    }else{
        console.log("Korisnik se registruje")
    }
}

async function Provera()
{
    var entries = document.getElementById("formaLogin");
    var email=entries.mail.value;
    var password=entries.lozinka.value;

    var users=await getData();
    var id="";
    var t=false;

    users.forEach(i => {
        if(email===i.email && password===i.password)
        {
            id=i._id;
            t=true;
        }
    });

    if(t)//Ako prodje if znaci da je unet postojeci mail i password
    {
        //dodati pravljenje kolacica sa vrednoscu korisnikovog id-a
        document.getElementById("LoginError").classList.add("hidden");
        if(localStorage.getItem("id")===null)
        {
            localStorage.setItem("id",id);
            console.log(localStorage.getItem("id"));
        }
        location.href="../Pocetna.html";
    }
    else
    {
        document.getElementById("LoginError").classList.remove("hidden"); //dodati poruku da je omasen mail ili password
        console.log(0);
    }
}