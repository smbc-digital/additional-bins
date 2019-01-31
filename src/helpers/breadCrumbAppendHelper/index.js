const appendBreadcrumb = (breadcrumbText, url) => {
    let breadcrumbs = document.getElementsByTagName('ul')    
    if(breadcrumbs.length !== 0){
        let ul = breadcrumbs[0]
        let li = document.createElement('li')
        li.innerHTML = '<a href="'+ url+ '">'+ breadcrumbText+'</a>'
        let breadCrumbListItems = ul.getElementsByTagName('li')
        let listSize = breadCrumbListItems.length
        let lastbutone = listSize - 1
        let arr = []
        if (breadCrumbListItems.length !== 0){
           for(let index = 0; index < breadCrumbListItems.length; index++)
           {
                let listItem = breadCrumbListItems[index]
                arr.push(listItem)
           }
           arr.splice(lastbutone, 0, li)           
        }
        ul.innerHTML = ''
        for(let i = 0; i < arr.length; i++){
            ul.appendChild(arr[i])
        }
        
    }
}

export default appendBreadcrumb