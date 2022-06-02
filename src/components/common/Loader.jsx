import LoaderGif from '../../assets/loading-icon.jpg'
import style from './common.module.scss'

const Loader = () =>{
    return(
        <div className={style.loader}>
            <img src={LoaderGif} alt=""/>
        </div>
    )
}

export default Loader;