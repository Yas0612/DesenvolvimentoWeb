import { useState } from 'react'
import './Contador.css'

export default function Contador() {

    const [contador, setContador] = useState(0);

    const incrementarContador = () => {
        setContador(prev => prev + 1);
    };

    return (
        <div className="contador-container">
            <p>
                Contagem
            </p>
            <p>
               {contador}
            </p>
            <button onClick={() => incrementarContador()}>
                Incrementar
            </button>
        </div>
    )
}