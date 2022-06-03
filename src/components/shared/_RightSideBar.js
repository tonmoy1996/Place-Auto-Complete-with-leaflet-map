import React, {useState} from "react";
import SearchHistory from "../SearchHistory";
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import NavigationIcon from "./NavigationIcon";

const _RightSideBar = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className={`left-slider br-8 m-1 ${!show ? "slider-width-50p" : "slider-width-300p"}`}>
                <div className="sidebar-container">
                    <div className="row">
                        <div className="col-md-12">
                            {
                                !show ? <NavigationIcon Icon={FormatAlignRightIcon} onclick={() => setShow(!show)}/>
                                    :
                                    <NavigationIcon Icon={FormatAlignLeftIcon} onclick={() => setShow(!show)}/>
                            }
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