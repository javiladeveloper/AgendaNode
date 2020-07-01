var MongoClient     =require('mongodb').MongoClient;
const { url }       =require("./conexion");
var Operaciones     =require('./CRUD.js');

MongoClient.connect(url,function(err,db){
    if(err)console.log(err)
    console.log("Conexión Establecida")
    Operaciones.insertarRegistro(db.db("agendaNode"),(error,result)=>{
        if(error)console.log("Error insertando los registros: "+ error)
    })
})