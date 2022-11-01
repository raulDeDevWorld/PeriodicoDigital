import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../styles/Navbar.module.css'

export default function Navbar() {
    const { pathname } = useRouter() 

    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <Link href="#inicio" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#inicio" ? style.active : ''}`}>INICIO</a>
                </Link>
                <Link href="#sociedad" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#sociedad" ? style.active : ''}`}>SOCIEDAD</a>
                </Link>
                <Link href="#seguridad" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#seguridad" ? style.active : ''}`}>SEGURIDAD</a>
                </Link>
                <Link href="#pais" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#pais" ? style.active : ''}`}>PAIS</a>
                </Link>
                <Link href="#economia" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#economia" ? style.active : ''}`}>ECONOMIA</a>
                </Link>
                <Link href="#internacional" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#internacional" ? style.active : ''}`}>INTERNACIONAL</a>
                </Link>
                <Link href="#deportes" legacyBehavior scroll={false}>
                    <a className={`${style.link} ${pathname == "#deportes" ? style.active : ''}`}>DEPORTES</a>
                </Link>
            </nav>
        </header>
    )
}