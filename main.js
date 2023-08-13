import './assets/scss/all.scss';

function highlightNavItem(){
    let index = getNavItemIndex();
    let highlight = document.querySelector(`body > nav > a:nth-child(${index})`);
    highlight.classList.remove("text-dark");
    highlight.classList.add("active", "link-success");
    
}

function getNavItemIndex(){
    
    let pathname = window.location.pathname.split("/").pop();
    if(pathname === "admin.html"){
        return 6;
    }

    return 4; //default
}




highlightNavItem();