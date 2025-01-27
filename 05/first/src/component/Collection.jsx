import './Collecton.css'
import dummy from '../data/dummyData'

function Collection(){
    return(
        <div className="collection">
            <h2 className='sub_head'>Collection</h2>
            <div className='delhi'>
                <p className='description'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
                <p className='delhiLink'>All collection in Delhi NCR</p>
            </div>
            <div className='restaurant_content'>
                {
                    dummy.map(item =>
                        <div key={item.id}>
                            <img src={item.image} className='imagesof' />
                            <p className='first'>{item.first}</p>
                            <p className='places'>{item.places}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Collection;