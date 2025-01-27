import restData from '../data/restaurantData'
import './Restaurant.css'

function Restaurant(){
    return(
        <div className="restaurants">
            
                {
                    restData.map(item=>
                        <div className='restaurant' key={item.id}>
                            <img src={item.image} alt="" className='restImage' />
                            <div className='restDetails'>

                                <div className='side'>
                                    <p className='restName'>{item.restarantName}</p>
                                    <p className='grey'>{item.foodType}</p>
                                </div>

                                <div className='side'>
                                    <p className='rating'>{item.restarantRating}</p>
                                    <p className='grey'>{item.foodPrice}</p>
                                </div>
                            </div>
                            <p className='offers'>{item.offers}</p>
                        </div>
                    )
                }
                
            
        </div>
    )
}


export default Restaurant;