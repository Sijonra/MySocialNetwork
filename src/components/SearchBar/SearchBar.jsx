import style from './SearchBar.module.scss'

const SearchBar = () =>{
    return(
        <div className={style.searchBar}>
            <input type="text" className={style.input} placeholder="Поиск..."/>
            <button className={style.button}>ПОИСК</button>
        </div>
    )
}

export default SearchBar;