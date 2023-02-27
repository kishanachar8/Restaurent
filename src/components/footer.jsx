import "../css/footer.css"
const Footer = () => {
    return (
        <div className="main">
        <div className="footer">
            <div className="footer_logo">
                {/* <img  className="bg" src="./images/footerbg.png" alt="" / > */}
                <img src="./images/onesta.png" alt="" />
                <div className="nav_links">
                <ul>
                    <li><b>ABOUT</b></li>
                    <br />
                    <li><a href="">Our Story</a></li>
                    <li><a href="">Insigths</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
                </div>
                <div className="nav_links">
                <ul>
                    <li><b>KNOW</b></li>
                    <br />
                    <li><a href="">Locations</a></li>
                    <li><a href="">Our Specials</a></li>
                    <li><a href="">Cheese Farm</a></li>
                </ul>
                </div>
                <div className="nav_links">
                <ul>
                    <li><b>REACH US</b></li>
                    <br />
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Terms & Condition's</a></li>
                </ul>
                </div>
            </div>
        </div>
        <div className="desc">
                <p>
                Copyright © 2021 Onesta. All Rights Reserved.
                </p>
            </div>
    </div>
    );
};

export default Footer;
