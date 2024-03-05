import app from "./app.js"
import {sequelize} from './database/config.js';
import {PORT} from './config.js'



const server=async(port)=>{
    try{
        app.listen(port, () =>{
            console.log(`listening port ${port} `)
        })
         await sequelize.sync({force: false})
        console.log("Server is open")
    }catch(error){
        console.log(error)
    }
};

server(PORT)