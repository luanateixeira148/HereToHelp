import React from "react";
import "./heading.css";


const Heading = ({text, color, fontWeight, fontFamily, textAlign, fontSize}) => <div
style={{text:text, color:color, fontWeight:fontWeight, fontFamily:fontFamily, textAlign:textAlign, fontSize:fontSize}}
>
    <div className="heading">
        {text}
    </div>
</div>


// Heading.defaultProps = {
//     text: "Heading",
//     color: "#FFEDFF",
//     fontSize: 36,
//     fontWeight: "",
//     fontFamily: "",
//     textAlign: "left",

// }

export default Heading;