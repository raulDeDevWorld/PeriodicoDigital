import { onAuth, signInWithEmail } from '../firebase/utils'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../context/Context'

import Image from 'next/image'
import { WithoutAuth } from '../HOCs/WithoutAuth'
import Button from '../components/Button'
import Error from '../components/Error'
import style from '../styles/Login.module.css'

function Login() {
    const { user, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()
    const router = useRouter()

    function loginWithEmailAndPassword(e) {
        e.preventDefault()
        if (e.target.form[0].value.length < 3 || e.target.form[1].value.length < 3) {
            setUserSuccess('complete')
            return
        }
        const email = e.target.form[0].value
        const password = e.target.form[1].value
        signInWithEmail(email, password, setUserSuccess)
    }

    useEffect(() => {
        onAuth(setUserProfile, setUserData, postsIMG, setUserPostsIMG)
        if (user) router.replace('/Admin')
    }, [user]);
    return (
        <div className={style.container}>
            <header className={style.header}>INICIO DE SESION "PERIODICO HOY"</header>
            
            {success == false &&  <Error>ERROR: verifique e intente nuevamente</Error>}
            {success == 'complete' && <Error>Llene todo el formulario</Error>}
        </div>
    )
}

export default Login