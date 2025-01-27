
import './Service.css'

function Service(props){
    return(
        <div>
            <div className="content">
                <img src={props.img} alt="dishes" className='icon' />
                <p className='service_name'>{props.name}</p>
            </div>
        </div>
    )
}

export default Service;