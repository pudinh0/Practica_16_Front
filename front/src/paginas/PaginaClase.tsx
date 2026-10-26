import { Link, useParams, useNavigate } from "react-router"; 
import { useClase } from "../hooks/useClase";
import { MensajeError } from "../componentes/MensajeError";
import { urlImagen } from "../servicios/api";
import { Cargando } from "../componentes/Cargando";

export default function PaginaClase() {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const { clase, cargando, error, reintentar } = useClase(Number(id));

    if (cargando) return <Cargando />;
    if (error) return <MensajeError mensaje={error ?? "Ocurrio un error al cargar la clase"} onReintentar={reintentar} />;
    if (!clase) return <MensajeError mensaje={error ?? "Ocurrio un error al cargar la clase"} onReintentar={reintentar} />;

    return (
        <>
            <Link to="/clases" className="detalle__volver">← Todas las clases</Link>

            <article className="detalle">
                <img className="detalle__imagen" src={urlImagen(clase.imagen)} alt={clase.nombre} />
                <div className="detalle__datos">
                    <span className="etiqueta etiqueta--fuerza">{clase.categoria}</span>
                    <h1>{clase.nombre}</h1>
                    <p className="pagina__bajada">{clase.descripcion} · {clase.duracionMin} min</p>

                    <h2>Horarios</h2>
                    <ul className="horarios">
                        {clase.horarios.map((h, index) => (
                            <li key={index} className="horario">
                                <div>
                                    <div className="horario__dia">{h.dia} · {h.horaInicio}</div>
                                    <div className="horario__meta">
                                        {h.entrenador} · 
                                        {}
                                        {h.disponibles === 0 
                                            ? <span className="texto-peligro"> Lleno</span>
                                            : ` ${h.disponibles} de ${h.cupoMaximo} lugares`
                                        }
                                    </div>
                                </div>
                                <button 
                                    className="boton boton--chico" 
                                    onClick={() => navigate('/entrar')} 
                                    disabled={h.disponibles === 0} 
                                >
                                    Inscribirme
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </>
    )
}