import SearchBar from "../Nav/SearchBar";

export default function  Nav ({onSearch}){
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}