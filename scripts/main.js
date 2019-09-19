let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/teamwork01.svg') {
        myImage.setAttribute('src', 'images/teamwork02.svg');
    } else {
        myImage.setAttribute('src', 'images/teamwork01.svg');
    }
}

function setHeading(name){
    let myHeading = document.getElementById('username');
    myHeading.textContent = '哈喽!'+name+'!';
}

function setUserName(){
    let myName = prompt('请输入您的名字');
    localStorage.setItem('name',myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName){
    setUserName();
}else{
    setHeading(storedName);
}

let button = document.querySelector('button');
button.onclick=function(){
    setUserName();
}
