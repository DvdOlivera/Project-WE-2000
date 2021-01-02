const music = new Audio();
music.src="Sounds/Winning Eleven 2000 U-23 - Main Menu OST (ORIGINAL Theme).mp3"
function musicLoad(){
    music.play ();
    
}


const bleep = new Audio();
bleep.src="Sounds/CleanBip2.mp3"
function loadContent(){
    bleep.play ();
    
}
const back = new Audio();
back.src="Sounds/Bback.mp3"
function backContent(){
    back.play ();
    
}

const click = new Audio();
click.src="Sounds/CleanCLICK2.mp3"
function loadsecondContent(){
    click.play ();
    
}

function newText () {
    memoryNotload();
    const escape = `<font color="red">ESC</font> `
    document.querySelector("#memory").innerHTML= `Press ${escape} to return to the Main Menu`;

}

document.querySelector("#downloads").addEventListener("click", takeOptiondownloads);
document.querySelectorAll(".trapezoid").forEach((option) => { option.addEventListener("click", blueOff)});
function takeOptiondownloads(){
    document.querySelector("#gigacontainer").classList.add("filter");
    console.log("ejecuta");
document.querySelectorAll(".downloadsOptions").forEach((options,i)=>{
    setTimeout(()=>{
    options.classList.remove('trapezoidgreen');
    options.classList.add('newtrapezoidgreen');

    },i * 30);
    


});



}

function blueOff(){
   
    document.querySelectorAll(".trapezoid").forEach((options)=>{
        
        options.classList.add('off');
        
   
       
})


    
}
document.querySelector("#forum").addEventListener("click",takeForumdownloads);
function takeForumdownloads(){
    document.querySelector("#gigacontainer").classList.add("filter");
    console.log("ejecuta");
document.querySelectorAll(".forumOptions").forEach((options,i)=>{
    setTimeout(()=>{
    options.classList.remove('trapezoidgreen2');
    options.classList.add('newtrapezoidgreen2');

    },i * 30);
    
  

});

}

document.addEventListener("keydown", ({key}) => {
    if (key === "Escape"){
        memoryNotload();
        takeOptionoff();
        backContent()
        blueON()
    } // Do things
})
function blueON(){
    document.querySelectorAll(".trapezoid").forEach((options)=>{
        
        options.classList.remove('off');
        
       
    })


    
}

function takeOptionoff(){
    document.querySelector("#gigacontainer").classList.remove("filter");
    document.querySelectorAll(".downloadsOptions").forEach((options)=>{
        options.classList.remove('newtrapezoidgreen')
        options.classList.add('trapezoidgreen')
        
   
       
})

    document.querySelectorAll(".forumOptions").forEach((options)=>{
        options.classList.remove('newtrapezoidgreen2')
        options.classList.add('trapezoidgreen2')

})        


}

let speed2=20;
let i = 0;
let txt = ['Emulators and games. ', `Community of retrogamers.`
,`Gamer world.`,`Frequently asked questions.`,`Contact us.`,`More! More! More!`]
let speed = 0;

function memoryLoad(p) {
     /* pasar parametro para hacer diferentes operaciones- 1 2 3 4.. etc*/
  if (i < txt[p].length) {
    
    document.querySelector("#memory").innerHTML += txt[p].charAt(i);
    i++;
    console.log(i)

    setTimeout(function(){memoryLoad(p)}, speed);
  }
}
function memoryNotload(){
    document.querySelector("#memory").innerHTML= "";
    i =0;
}
/*
document.querySelector("#gigacontainer").addEventListener("click",HiddenOptions)
    
 function HiddenOptions(){
    console.log ("funciona")


        document.querySelectorAll(".downloadsOptions").forEach((options)=>{
            console.log(options)
            options.classList.remove('newtrapezoidgreen')
            options.classList.add('trapezoidgreen')
           
    })}*/
