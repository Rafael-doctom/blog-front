import style from '../../../styles/login.module.css'

const Login = () => {
    return (
        <>
            <div className={style.login}>
                <div className={style.content}>
                    <input className={style.inputs} type="text" placeholder="Insira seu nome de usuário..." />
                    <input className={style.inputs} type="password" placeholder="Insira sua senha..." />
                    <input className={style.inputs} type="submit" value="Fazer Login" />
                </div>
            </div>
        </>
    )
}

export default Login