var quiz_ind = 0;

var quiz = [
    {
        fill1: "#ffedff",
        fill2: "none",
        fill3: "none",
        fill4: "none",
        fill5: "none",
        stroke1: "none",
        stroke2: "none",
        stroke3: "none",
        stroke4: "none",
        stroke5: "none"
    },
    {
        fill1: "#ffedff",
        fill2: "#ffedff",
        fill3: "none",
        fill4: "none",
        fill5: "none",
        stroke1: "#5658AF",
        stroke2: "none",
        stroke3: "none",
        stroke4: "none",
        stroke5: "none"
    },
    {
        fill1: "#ffedff",
        fill2: "#ffedff",
        fill3: "#ffedff",
        fill4: "none",
        fill5: "none",
        stroke1: "#5658AF",
        stroke2: "#5658AF",
        stroke3: "none",
        stroke4: "none",
        stroke5: "none"
    },
    {
        fill1: "#ffedff",
        fill2: "#ffedff",
        fill3: "#ffedff",
        fill4: "#ffedff",
        fill5: "none",
        stroke1: "#5658AF",
        stroke2: "#5658AF",
        stroke3: "#5658AF",
        stroke4: "none",
        stroke5: "none"
    },
    {
        fill1: "#ffedff",
        fill2: "#ffedff",
        fill3: "#ffedff",
        fill4: "#ffedff",
        fill5: "#ffedff",
        stroke1: "#5658AF",
        stroke2: "#5658AF",
        stroke3: "#5658AF",
        stroke4: "#5658AF",
        stroke5: "none"
    }
]

document.querySelector("#square1").style.fill = quiz[quiz_ind].fill1
document.querySelector("#square2").style.fill = quiz[quiz_ind].fill2
document.querySelector("#square3").style.fill = quiz[quiz_ind].fill3
document.querySelector("#square4").style.fill = quiz[quiz_ind].fill4
document.querySelector("#square5").style.fill = quiz[quiz_ind].fill5
document.querySelector("#line1").style.stroke = quiz[quiz_ind].stroke1
document.querySelector("#line2").style.stroke = quiz[quiz_ind].stroke2
document.querySelector("#line3").style.stroke = quiz[quiz_ind].stroke3
document.querySelector("#line4").style.stroke = quiz[quiz_ind].stroke4
document.querySelector("#line5").style.stroke = quiz[quiz_ind].stroke5

function progressing() {
    quiz_ind++;
document.querySelector("#square1").style.fill = quiz[quiz_ind].fill1
document.querySelector("#square2").style.fill = quiz[quiz_ind].fill2
document.querySelector("#square3").style.fill = quiz[quiz_ind].fill3
document.querySelector("#square4").style.fill = quiz[quiz_ind].fill4
document.querySelector("#square5").style.fill = quiz[quiz_ind].fill5
document.querySelector("#line1").style.stroke = quiz[quiz_ind].stroke1
document.querySelector("#line2").style.stroke = quiz[quiz_ind].stroke2
document.querySelector("#line3").style.stroke = quiz[quiz_ind].stroke3
document.querySelector("#line4").style.stroke = quiz[quiz_ind].stroke4
document.querySelector("#line5").style.stroke = quiz[quiz_ind].stroke5
}