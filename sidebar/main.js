function openNav() {
    document.querySelector('#mySidenav').style.width = "250px";
    document.querySelector('#content').style.marginLeft = "250px";
    document.querySelector('.openbtn').style.display = "none";
}

function closeNav() {
    document.querySelector('#mySidenav').style.width = "0px";
    document.querySelector('#content').style.marginLeft = '32px';
    document.querySelector('.openbtn').style.display = "inline-block";
}