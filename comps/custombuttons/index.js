import React from "react";
import "./cb.css";

const CustomButton = ({text, border, width, fontSize}) => <div
style={{border:border, width:width, fontSize:fontSize}}
className="button_box">
    <div className="button_inner">
        {text}
    </div>
</div>


CustomButton.defaultProps = {
    fontSize:"24px",
    text:"default button",
    border:"solid #6C4AA4 1px",
    width:"307px",

}

export default CustomButton;

