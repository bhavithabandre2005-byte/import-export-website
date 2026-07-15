/* ===========================================
   BR GLOBAL TRADE
   SCRIPT.JS (CORRECTED)
=========================================== */


/* ================= LOADER ================= */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){

        setTimeout(()=>{

            loader.style.opacity="0";
            loader.style.visibility="hidden";

        },2500);

    }

});



/* ================= STICKY HEADER ================= */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(header){

        if(window.scrollY>60){

            header.style.background="#06101d";
            header.style.boxShadow="0 10px 25px rgba(0,0,0,.35)";

        }
        else{

            header.style.background="rgba(7,17,31,.92)";
            header.style.boxShadow="none";

        }

    }

});



/* ================= BACK TO TOP ================= */

const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

    topBtn.style.display=
    window.scrollY>500 ? "block":"none";

});


topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};

}



/* ================= SCROLL REVEAL ================= */


const revealElements=document.querySelectorAll(
".about,.journey,.products,.quality,.certification,.shipment,.dashboard,.testimonials,.contact"
);


revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(80px)";
el.style.transition="1s";

});


function reveal(){

revealElements.forEach(el=>{

let position=el.getBoundingClientRect().top;

if(position < window.innerHeight-120){

el.style.opacity="1";
el.style.transform="translateY(0)";

}

});

}


window.addEventListener("scroll",reveal);

reveal();




/* ================= COUNTERS ================= */


const counters=document.querySelectorAll(".counter");


counters.forEach(counter=>{


let started=false;


function count(){

if(started)return;

started=true;


let target=Number(counter.dataset.target);

let value=0;


let interval=setInterval(()=>{


value+=Math.ceil(target/100);


if(value>=target){

value=target;
clearInterval(interval);

}


counter.innerText=value;


},25);


}



window.addEventListener("scroll",()=>{

let top=counter.getBoundingClientRect().top;


if(top < window.innerHeight){

count();

}


});


});





/* ===========================================
   PRODUCTS DATA
=========================================== */


const products={


rice:{

title:"Premium Basmati Rice",

image:"rice_exports.jpg",

description:"High quality Indian Basmati Rice exported worldwide.",

details:[

"Origin : India",
"Grade : Export Premium",
"Moisture : Below 12%",
"Packing : 25kg / 50kg Bags",
"Export : UAE, USA, UK, Canada"

]

},



coffee:{

title:"Arabica Coffee",

image:"images/coffee.jpg",

description:"Fresh premium Arabica coffee beans.",

details:[

"Origin : Karnataka",
"Grade : A+",
"Packing : 50kg Bags",
"Moisture : 10%",
"Export : Europe & Middle East"

]

},



turmeric:{

title:"Export Grade Turmeric",

image:"turmeric.webp",

description:"High Curcumin Export Grade Turmeric.",

details:[

"Curcumin : 5%-7%",
"Packing : 25kg",
"Machine Cleaned",
"100% Natural",
"Export Worldwide"

]

},



cashew:{

title:"Premium Cashew",

image:"Cashews-news-3.jpg",

description:"Export quality whole cashew nuts.",

details:[

"Grade : W320",
"Vacuum Packed",
"Premium Quality",
"Long Shelf Life",
"Export Worldwide"

]

},



spices:{

title:"Indian Spices",

image:"Spices.jpg",

description:"Premium export quality spices.",

details:[

"Fresh Quality",
"Organic",
"Food Grade",
"International Standard",
"Safe Packaging"

]

},



tea:{

title:"Premium Tea",

image:"images/tea.jpg",

description:"Finest Assam & Darjeeling Tea.",

details:[

"Natural Aroma",
"Premium Leaves",
"Export Grade",
"Vacuum Packed",
"Worldwide Shipping"

]

}


};





/* ================= PRODUCT POPUP ================= */


function showProduct(name){


let item=products[name];


if(!item)return;



let title=document.getElementById("modalTitle");

let image=document.getElementById("modalImage");

let desc=document.getElementById("modalDescription");

let list=document.getElementById("modalDetails");

let modal=document.getElementById("productModal");



if(title) title.innerHTML=item.title;


if(image) image.src=item.image;


if(desc) desc.innerHTML=item.description;



if(list){

list.innerHTML="";


item.details.forEach(detail=>{


let li=document.createElement("li");

li.innerHTML=detail;

list.appendChild(li);


});


}



if(modal){

modal.style.display="flex";

}


}




function closeModal(){

let modal=document.getElementById("productModal");


if(modal){

modal.style.display="none";

}

}





/* ================= LOGIN POPUP ================= */


function openLogin(){

let login=document.getElementById("loginPopup");

if(login){

login.style.display="flex";

}

}



function closeLogin(){

let login=document.getElementById("loginPopup");


if(login){

login.style.display="none";

}

}





/* ================= PRODUCT AUTO ROLLING ================= */


const productContainer=document.querySelector(".product-container");


if(productContainer){


let scrollAmount=0;


setInterval(()=>{


scrollAmount+=320;


if(scrollAmount >= 
productContainer.scrollWidth-productContainer.clientWidth)

{

scrollAmount=0;

}



productContainer.scrollTo({

left:scrollAmount,

behavior:"smooth"

});


},2500);


}





/* ================= CLICK OUTSIDE POPUP ================= */


window.onclick=(event)=>{


const modal=document.getElementById("productModal");

const login=document.getElementById("loginPopup");



if(event.target===modal){

modal.style.display="none";

}


if(event.target===login){

login.style.display="none";

}


};





/* ================= CONTACT FORM ================= */


const form=document.querySelector("form");


if(form){


form.addEventListener("submit",(e)=>{


e.preventDefault();


alert("✅ Thank you! Your inquiry has been submitted successfully.");


form.reset();



});


}






/* ================= CERTIFICATE VIEW ================= */


function viewCertificate(name){


alert(

"Certificate : "+name+
"\n\nReplace this demo with PDF/Image viewer."

);


}





/* ================= SHIP FLOAT ================= */


const ship=document.querySelector(".hero-ship");


if(ship){


let angle=0;


setInterval(()=>{


angle+=0.03;


ship.style.transform=

`translateY(${Math.sin(angle)*8}px)`;


},40);


}





/* ================= PARTICLES ================= */


for(let i=0;i<25;i++){


let particle=document.createElement("div");


particle.className="particle";


particle.style.left=Math.random()*100+"vw";

particle.style.top=Math.random()*100+"vh";

particle.style.animationDuration=(6+Math.random()*6)+"s";


document.body.appendChild(particle);


}






/* ================= SHIPMENT STATUS ================= */


let currentStatus=0;


setInterval(()=>{


const steps=document.querySelectorAll(".step");


if(steps.length){


steps.forEach(step=>{

step.classList.remove("active");

});


steps[currentStatus].classList.add("active");


currentStatus++;


if(currentStatus>=steps.length){

currentStatus=0;

}


}


},3000);






/* ================= BUTTON EFFECT ================= */


document.querySelectorAll("button").forEach(btn=>{


btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px) scale(1.02)";

});


btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});


});





console.log("✅ BR Global Trade JS Loaded Successfully");