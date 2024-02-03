import { useState } from "react";


function Footer()
{
    const thisYear = new Date().getFullYear();
    const [date, setDate] = useState(thisYear);
    
    return <div className="footer">
        <footer>
            <ul className="footerList">
                <li className="footerItem">
                    Made by: Mohamed Ashraf
                </li>
                <li className="footerItem">
                {date}
                </li>
                <li className="footerItem">
                email: mo.ashraf.mcs@gmail.com
                </li>
            </ul>
        </footer>
    </div>
}


export default Footer;