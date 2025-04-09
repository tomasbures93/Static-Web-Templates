function scrollToTop(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}
function showmorelei(){
    document.getElementById("lei").remove();
    document.getElementById("showmorel").classList.remove('notmain');
    document.getElementById("showmorel2").classList.remove('notmain');
    document.getElementById("showmorel3").classList.remove('notmain');
    document.getElementById("showmorel").classList.add('main');
    document.getElementById("showmorel2").classList.add('main');
    document.getElementById("showmorel3").classList.add('main');
}
function showmoregal(){
    document.getElementById("gall").remove();
    document.getElementById("galshow1").classList.remove('notmain');
    document.getElementById("galshow2").classList.remove('notmain');
    document.getElementById("galshow3").classList.remove('notmain');
    document.getElementById("galshow1").classList.add('main');
    document.getElementById("galshow2").classList.add('main');
    document.getElementById("galshow3").classList.add('main');
}