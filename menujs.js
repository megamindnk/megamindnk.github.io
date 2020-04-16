var button=document.querySelector('.menu-butt');
var menu=document.querySelector('.menu');
var pic=document.querySelector('.mypic');
var menubar=document.querySelector('.menu-links');
var links=document.querySelectorAll('.link');
button.addEventListener('click',toggle);

let menuopen = 0; 
function toggle()
{
    if(menuopen == 0)
    {
       button.classList.add('close');
        menu.classList.add('show');
        pic.classList.add('show');
        menubar.classList.add('show');

        links.forEach(element =>element.classList.add('show'));
        menuopen = -1;
    }
    else if( menuopen == -1)
    {
        button.classList.remove('close');
        menu.classList.remove('show');
        menubar.classList.remove('show');
        pic.classList.remove('show');

        links.forEach(item =>item.classList.remove('show')); 
        menuopen = 0; 
    }
}