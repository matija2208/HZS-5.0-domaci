const path = require('path')

async function get(req,res){
    var file = req.params.name;
    try{
        
        await res.sendFile("C:\\Users\\matij\\Desktop\\HZS-5.0-domaci\\BACK\\MUSIC\\"+String(file));
    }
    catch(err)
    {
        res.send({
            uspesnost:false,
            poruka:err.message
        });
    }
    
}

module.exports = new Object({
    "get":get,
});