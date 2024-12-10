import style from './Card.module.css'
import { BASE_URI } from '../../../config'
import { Link } from 'react-router-dom'

export default function Card(posts = []) {
    return (
        <>
            <div className={style.card}>
                <div className={style.containerImg}>
                    <img className={style.image} src="" alt="" />
                </div>
                <div className={style.bodyCard}>
                    <div>Nome</div>
                    <div>Hashtags</div>
                    <div>Description</div>
                    <div className={style.buttonsCard}>
                        <button>Save</button>
                        <button>Elimina</button>
                    </div>
                </div>
            </div>
        </>
    )
}