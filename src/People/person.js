function  Person(props){
    const {photo, name}=props
    return(
        <div className="card">
            <div className="photo">
                <img src={photo}/>
            </div>
            <div className="lab">
                <h1>{name}</h1>
            </div>
        </div>
    )
}
export  default Person