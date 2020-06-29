module.exports.insertarRegistro= function(db,callback){
    let coleccion = db.collection("usuarios")

    coleccion.insertMany([
        {email:"jonathan.joan.avila@gmail.com",nombre:"jonathan",password:12345},
        {email:"rocky@gmail.com",nombre:"rocky",password:12345},
        {email:"ceciliaco_71@gmail.com",nombre:"cecilia",password:12345}
    ], (error,result)=>{
        console.log("Resultado del Insert: " + result.toString())
    })
}