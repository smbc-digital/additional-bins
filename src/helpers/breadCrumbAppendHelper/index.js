const appendBreadcrumb = (breadcrumbText, url) => {
    let breadcrumbs = document.getElementsByTagName('ul')    
    if(breadcrumbs.length !== 0){
        let breadcrumb = breadcrumbs[0]
        breadcrumb.innerHTML = breadcrumb.innerHTML + '<li><a href="'+ url+ '">'+ breadcrumbText+'</a></li>'
    }
}

export default appendBreadcrumb