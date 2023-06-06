import "./campoTexto.css" 

 const CampoTexto = (props) => {
    console.log("datos: ", props.titulo)
    return <div className="campo-texto">
        <label >{props.titulo}</label>
        <input placeholder={props.placeholder}/>
    </div>
 }

 export default CampoTexto