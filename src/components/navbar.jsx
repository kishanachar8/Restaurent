import '../css/navbar.css'
const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="logo">
                <img src='./images/onesta.png' alt="" />
            </div>
            <div className="nav_links">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Our Story</a></li>
                    <li><a href="">Insights</a></li>
                    <li><a href="">Our Specials</a></li>
                    <li><a href="">Cheese Farm</a></li>
                    <li><a href="">Locations</a></li>
                </ul>
            </div>
            <div className="logo2">
                <img src='./images/ordernow.png' alt="" />
            </div>
        </div>
    )
}

export default Navbar;