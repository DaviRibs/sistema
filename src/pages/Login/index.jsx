import { Link, useNavigate } from "react-router-dom"
import svg from "/login-animate.svg"
export default function LoginPage() {
    const navigate = useNavigate()     

    return (
        <div className="w-full h-screen flex">
            <div className="w-[40%] flex items-center justify-center">
                <Link to="/cadastro">Cadastrar</Link>
                <button
                onClick={() => navigate("/cadastro")}
                >Cadastrar</button>
                <button
                onClick={() => window.location.href ="/cadastro"} // melhor forma nativa pois não precisa importa nada
                >
                    Cadastrar
                </button>
            </div>
            <div className="w-[60%] bg-[#6366ee] flex  items-center justify-center rounded-lg flex-col">
                <img width={600}  src={svg} alt="imagem-animada" />
                <p className="text-white font-bold w-[300px] text-[20px] text-center">A melhor experiência de login que você teve na sua vida!</p>
            </div>
        </div>
    )
}
