var MongoClient=require('mongodb').MongoClient
var gBD   	   =  require('./conexion');
var Operaciones =require('./CRUD.js')

MongoClient.connect(gBD.url,function(err,db){
    if(err)console.log(err)
    console.log("Conexión Establecida")
    Operaciones.insertarRegistro(db.db("agendaNode"),(error,result)=>{
        if(error)console.log("Error insertando los registros: "+ error)
    })
})