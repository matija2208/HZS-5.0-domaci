function sendForm(){
    console.log();
    const formType = (document.querySelector('input[name="pinModeType"]:checked').id);
    document.location.href = ('objavaForma.html?formType=' + formType);
}

function formLoad(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    formType = urlParams.get('formType');

    switch(formType){
        case 'bandRadio':
            console.log("popunjava formu za bend");
        break;

        case 'eventRadio':
            console.log("popunjava formu za dogadjaj");
        break;

        case 'collabRadio':
            console.log("popunjava formu za saradnju");
        break;

        case 'saleRadio':
            console.log("popunjava formu za prodaju");
        break;


    }
}