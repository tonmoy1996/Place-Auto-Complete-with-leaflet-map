import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleLeft, faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import SearchHistory from "../SearchHistory";


const _RightSideBar = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className={`left-slider br-8 m-1 ${!show ? "slider-width-50p" : "slider-width-300p"}`}>
                <div className="sidebar-container">
                    <div className="row">
                        <div className="col-md-12 arrow-style">
                            <FontAwesomeIcon icon={!show ? faAngleDoubleLeft : faAngleDoubleRight}
                                             onClick={() => setShow(!show)}
                                             className="f-18 text-white cursor-pointer m-2"/>
                        </div>
                    </div>
                    <div>
                        {show && <SearchHistory/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default _RightSideBar;