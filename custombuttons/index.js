import React from "react";
import "./cb.css";



const CustomButton = ({text, border, width, fontSize, fontFamily, onClick}) => <div
style={{border:border, width:width, fontSize:fontSize, fontFamily:fontFamily}}
className="button_box" onClick={onClick} >
    <div className="button_inner">
        {text}
    </div>
</div>


var border= false;
function border1(){
    if(border===false){
document.querySelector(".button_box").style.border = "3px solid #E3C9EA";
border = true;
}
else{
    document.querySelector(".button_box").style.border = "none";
    border = false;
}
}

CustomButton.defaultProps = {
    onClick:border1,
    fontSize:"24px",
    fontFamily:"",
    text:"default button",
    border:"solid #6C4AA4 1px",
    width:"307px",

}

export default CustomButton;

