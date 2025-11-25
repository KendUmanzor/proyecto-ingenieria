const express = require("express")
const app = express()
const path = require ("path")
const Sequelize = require("./models");


const personasRoutes = require("./routes/Personasroutes");
const estudiantesRoutes = require("./routes/Estudiantesroutes");
const empleadosRoutes = require("./routes/Empleadosroutes");
const ingresosRoutes = require("./routes/Ingresosroutes");
const vehiculosRoutes = require("./routes/Vehiculosroutes");
const referenciasRoutes = require("./routes/Referenciasroutes");
const visitasRoutes = require("./routes/Visitasroutes");

app.set("port", 3000)
app.use(express.json());  
app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res)=>{
    res.send("hola mundo")
}   
)

app.use("/personas", personasRoutes);
app.use("/estudiantes", estudiantesRoutes);
app.use("/empleados", empleadosRoutes);
app.use("/ingresos", ingresosRoutes);
app.use("/vehiculos", vehiculosRoutes);
app.use("/referencias", referenciasRoutes);
app.use("/visitas", visitasRoutes);

app.listen(app.get("port"), () => {
    console.log(`server en el puerto ${app.get("port")}`)
})
