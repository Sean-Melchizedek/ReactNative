import React from "react";
import footer from "./Footer";
import Footer from "./Footer";

function footerWraper() {
        return (
            <div>
                <nav>
                    <h1> Hello World </h1>
                </nav>
                <ul>
                    <li>
                        thing 1
                    </li>
                    <li>
                        thing 2
                    </li>
                    <li>
                        thing 3
                    </li>
                </ul>
                <Footer /> {/*local components*/}
            </div>

        )
}
export default footerWraper