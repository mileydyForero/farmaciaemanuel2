import "./formulario.css"
import CampoTexto from "../campoTexto/campoTexto"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton/boton"

const Formulario = () =>{
    return <section className="formulario">
        <form >
            <h2 >ingresar los datos por favor wey</h2>
            <CampoTexto titulo="nombre" placeholder="ingresar nombre"/>
            <CampoTexto titulo="pasword" placeholder="ingresar clave"/>
            <ListaOpciones/>
            <Boton></Boton>
            
            
            

        </form>
    </section>
}

export default Formulario