const appendBreadcrumb = (breadcrumbText, url) => {
    let breadcrumbs = document.getElementsByClassName('breadcrumb')    
    if(breadcrumbs.length !== 0){
       let breadcrumb = breadcrumbs[0]
       breadcrumb.innerHTML = breadcrumb.innerHTML + '<li><a href="'+ url+ '">'+ breadcrumbText+'</a></li>'
    }
}

export default appendBreadcrumb