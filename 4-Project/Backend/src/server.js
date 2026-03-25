const app = require('./app');

const connectDB =  require('../Database/db');

connectDB();

app.listen(3000,()=>{
    console.log("server running at port 3000");
})


