import './Styles/Body.css'
import Person from './People/person'
import {Peoples} from './People/Peoples'

function Body(){
    const style={
        display: 'flex',
        flexWrap:'wrap'
    }
    return(
        <div style={style}>
            {Peoples.map(x=><Person name={x.name} photo={x.photo} />)}
        </div>
    )

}
export  default  Body