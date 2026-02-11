import './Store.css';
import album1Image from '../../assets/album1.png';
import album2Image from '../../assets/album2.png';
import album3Image from '../../assets/album3.png';
import album4Image from '../../assets/album4.png';
import tshirtImage from '../../assets/tshirt.png';
import coffeemugImage from '../../assets/coffeemug.png';

export default function Store(){
    return(
        <>
        <section className='container'>
            <h2>MUSIC</h2>
            <div className='music-content'>
                <div className='album1'>
                    <h3>Album 1</h3>
                    <div className='image-container'>
                        <img src={album1Image} className='prod-images' />
                    </div>
                    <div className='prod-details'>
                        <span>$
                            <span>12.47</span>
                        </span>
                        <button className='shop-button' type='button'>Add To Cart</button>
                    </div>
                </div>
                <div className='album1'>
                    <h3>Album 2</h3>
                    <div  className='image-container'>
                        <img src={album2Image} className='prod-images' />
                    </div>
                    <div className='prod-details'>
                        <span>$
                            <span>14.47</span>
                        </span>
                        <button className='shop-button' type='button'>Add To Cart</button>
                    </div>
                </div>
                <div className='album1'>
                    <h3>Album 3</h3>
                    <div className='image-container'>
                        <img src={album3Image} className='prod-images' />
                    </div>
                    <div className='prod-details'>
                        <span>$
                            <span>14.47</span>
                        </span>
                        <button className='shop-button' type='button'>Add To Cart</button>
                    </div>
                </div>
                <div className='album1'>
                    <h3>Album 4</h3>
                    <div className='image-container'>
                        <img src={album4Image} className='prod-images' />
                    </div>
                    <div className='prod-details'>
                        <span>$
                            <span>14.47</span>
                        </span>
                        <button className='shop-button' type='button'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </section>
        <section className='container'>
            <h2>MERCH</h2>
            <div className='merch-container'>
                <div className='t-shirt'>
                    <h3>T-Shirt</h3>
                    <div className='image-container'>
                        <img src={tshirtImage} className='prod-images'/>
                    </div>
                    <div className='prod-details'>
                        <span>$
                            <span>14.47</span>
                        </span>
                        <button className='shop-button' type='button'>Add To Cart</button>
                    </div>
                </div>
                <div className='t-shirt'>
                    <h3>Coffee-Cup</h3>
                    <div className='image-container'>
                        <img src={coffeemugImage} className='prod-images'/>
                    </div>
                    <div className='prod-details'>
                        <span>$
                            <span>14.99</span>
                        </span>
                        <button className='shop-button' type='button'>Add To Cart</button>
                    </div>
                </div> 
            </div>
        </section>
        <button className='cart-btn-bottom'>
            <a className='cart-bottom'>See the Cart</a>
        </button>
        </>
    )
}