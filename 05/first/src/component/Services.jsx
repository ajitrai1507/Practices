import Service from './Service';
import './Services.css'
import plate from '../assests/plate.avif'
import night from '../assests/night.webp'
import delivery from '../assests/delivery.webp'


function Services(){
    return(
        <div className='services'>
            <Service name="Dinning Out" img={plate} />
            <Service name="Delivery" img={night}/>
            <Service name="Nightlife" img={delivery}/>
        </div>
    )
}

export default Services;