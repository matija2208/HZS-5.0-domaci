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