const showBreadcrumbs = (show) =>{
    let breadcrumb = document.getElementById('breadcrumb')
    if(breadcrumb !== null) 
    {
        if(show){
            breadcrumb.classList.remove('hidden')
        }
        else{
            breadcrumb.classList.add('hidden')
        }
    }
}

const appendBreadCrumb = (breadcrumbText, url) => {
    let breadcrumbs = document.getElementById('breadcrumb')
    if(breadcrumbs !== null){
        var li = document.createElement("li")
        var a = document.createElement("a");
        var text = document.createTextNode(breadcrumbText)
        a.appendChild(text)
        a.setAttribute("href", url)
        li.appendChild(a)
        breadcrumbs.appendChild(li)
}
}

export default showBreadcrumbs