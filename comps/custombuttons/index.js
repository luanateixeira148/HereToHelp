import React from "react";
import "./cb.css";

<<<<<<< HEAD
const CustomButton = ({text, border, width, fontSize}) => <div
style={{border:border, width:width, fontSize:fontSize}}
className="button_box">
=======


const CustomButton = ({text, border, width, fontSize, fontFamily, onClick, id}) => <div id={id}
style={{border:border, width:width, fontSize:fontSize, fontFamily:fontFamily}}
className="button_box" onClick={onClick} >
>>>>>>> 0649cb2c61590e0a549f0ccecd2dea44700c6957
    <div className="button_inner">
        {text}
    </div>
</div>


<<<<<<< HEAD
CustomButton.defaultProps = {
    fontSize:"24px",
=======
// var border= false;
// function border(){
//     if(border===false){
// document.querySelector(".button_box").style.border = "3px solid #E3C9EA";
// border = true;
// }
// else{
//     document.querySelector(".button_box").style.border = "none";
//     border = false;
// }
// }

CustomButton.defaultProps = {
    onClick:()=>{},
    fontSize:"24px",
    fontFamily:"",
>>>>>>> 0649cb2c61590e0a549f0ccecd2dea44700c6957
    text:"default button",
    border:"solid #6C4AA4 1px",
    width:"307px",

}

export default CustomButton;

