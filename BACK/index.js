const ex = require("express");
const cors = require("cors");

const app = ex();
const PORT = 80;

const baza=require("./BAZA/baza");

const user = require("./FUNCTIONS/user");
const pin = require("./FUNCTIONS/pin");
const music = require("./FUNCTIONS/music");
const komentar = require("./FUNCTIONS/komentar");

app.use(ex.json());
app.use(cors());



app.listen(PORT, function(){
    console.log("Server slusa na portu: "+PORT);
})

baza();

app.get("/api/MUSIC/:name",music.get);


app.get("/api/users",user.get);

app.get("/api/user/", user.getOne);

app.post("/api/user",user.post);

app.delete("/api/users",user.del);

app.delete("/api/user/", user.delOne);

app.put("/api/user/", user.put);

app.get("/api/user/login", user.login);

app.put("/api/user/changePassword", user.updatePassword);


app.get("/api/pin",pin.get);

app.get("/api/pin/:id", pin.getOne);

app.post("/api/pin",pin.post);

app.delete("/api/pin",pin.del);

app.delete("/api/pin/:id", pin.delOne);

app.put("/api/pin/:id", pin.put);


app.post("/api/komentar",komentar.post);

app.get("/api/komentar",komentar.get);

app.delete("/api/komentar", komentar.del);