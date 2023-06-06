import "./listaOpciones.css"
const ListaOpciones =() =>{
 
    const equipos=["cajera","farmaceuta","administrador"]

    return <div className="lista-opciones">
        <label>equipos</label>
        <select className="lista-opciones">
         {equipos.map((equipo,index) =>{
            return <option key={index}>{equipo}</option>

         })}
        </select>
    </div>
}

export default ListaOpciones