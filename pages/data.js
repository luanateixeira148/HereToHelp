export var data = {
    answer1:"",
    answer2:"",
    answer3:"",
    answer4:"",
    answer5:"",
}

// sessionStorage.getItem("data").then((val)=>{
//     ChangeData(JSON.parse(val));
// })

// if(process.browser){
//     var sessiondata = sessionStorage.getItem("data");
//     ChangeData(JSON.parse(sessiondata));
// }


export function ChangeData(d) {
    data = d;
    sessionStorage.setItem("data", JSON.stringify(data));
}