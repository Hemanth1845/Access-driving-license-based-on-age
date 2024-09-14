const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const paragraph = document.getElementById("para");

let age;

mysubmit.onclick = function(){
    age = mytext.value;
    if(age<0){
        paragraph.textContent = `age must be greater than 0`;
    }
    else if(age==0){
        paragraph.textContent = `your are now only born`;
    }
    else if(age <10){
        paragraph.textContent = 'you are not eligble to driving license';
    }
    else if(age <18){
        paragraph.textContent = 'you are not 18+';
    }
    else {
        paragraph.textContent = 'you get access for driving license';
    }
}