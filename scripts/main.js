let myimage/*可变量替代*/ = document.querySelector("img");
myimage/*可变量替代*/.onclick = function () {
let mySrc/*可变量替代*/ = myimage/*可变量替代*/.getAttribute("src");

if (mySrc/*可变量替代*/ === "images/WUKONG.jpg")
{myimage/*可变量替代*/.setAttribute("src", "images/BAJIE.jpg");} 
else {myimage/*可变量替代*/.setAttribute("src", "images/WUKONG.jpg");}};

let myButton/*可变量替代*/ = document.querySelector("button");
let myHeading/*可变量替代*/ = document.querySelector("h1");

function setUserName/*可变量替代*/() 
{let myName/*可变量替代*/ = prompt("请输入你的名字。");
localStorage.setItem("name", myName/*可变量替代*/);
myHeading/*可变量替代*/.textContent = "欢迎来到卓尔特，" + myName/*可变量替代*/;}

if (!localStorage.getItem("name")) 
{setUserName/*可变量替代*/();} 
else {let storedName = localStorage.getItem("name");
myHeading/*可变量替代*/.textContent = "欢迎来到卓尔特，" + storedName;}

myButton/*可变量替代*/.onclick = function () 
{setUserName/*可变量替代*/();};

function setUserName/*可变量替代*/() 
{let myName/*可变量替代*/ = prompt("请输入你的名字。");
if (!myName/*可变量替代*/) 
{setUserName/*可变量替代*/();}
else {localStorage.setItem("name", myName/*可变量替代*/);
myHeading/*可变量替代*/.textContent = "欢迎来到卓尔特，" + myName/*可变量替代*/;}}
