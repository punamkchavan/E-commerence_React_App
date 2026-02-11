import './NavBar.css';

export default function NavBar(){
    return(
        <>
            <header className='main-header'>
                <ul>
                    <li>HOME</li>
                    <li>STORE</li>
                    <li>ABOUT</li>
                    <a href='#cart' className='cart-holder'/>
                </ul>
                <h1>The Generics</h1>
            </header>
        </>
    )
}
