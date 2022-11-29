const ex = require("express");
const cors = require("cors");

const app = ex();
const PORT = 80;

const baza=require("./BAZA/baza");

const user = require("./FUNCTIONS/user")

app.use(ex.json());
app.use(cors());

app.listen(PORT, function(){
    console.log("Server slusa na portu: "+PORT);
})

baza();

app.get("/api/user",user.get);

app.get("/api/user/:id", user.getOne);

app.post("/api/user",user.post);

app.delete("/api/user",user.del);

app.delete("/api/user/:id", user.delOne);

app.put("/api/user/:id", user.put);

app.get("/api/user/login", user.login);

app.put(".api/user/:id/changePassword", user.updatePassword);