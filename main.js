import './assets/scss/all.scss';

function highlightNavItem(){
    
    var index = getNavItemIndex(window.location.pathname);
    
    var highlight = document.querySelector(`body > nav > a:nth-child(${index})`);
    highlight.classList.remove("text-dark");
    highlight.classList.add("active", "link-success");
    
}

function getNavItemIndex(pathname){
    if(pathname === "/week5/pages/admin.html"){
        return 6;
    }

    return 4; //default
}




highlightNavItem();