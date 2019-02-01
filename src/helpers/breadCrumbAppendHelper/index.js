const appendBreadcrumb = (breadcrumbText, url) => {
    let breadcrumbs = document.getElementsByTagName('ul')    
    if(breadcrumbs.length !== 0){
        let ul = breadcrumbs[0]
        let li = document.createElement('li')
        li.innerHTML = '<a href="'+ url+ '">'+ breadcrumbText+'</a>'
        let breadCrumbListItems = ul.getElementsByTagName('li')
        let listSize = breadCrumbListItems.length
        let lastbutone = listSize - 1
        let arrayOfListItems = []
        if (breadCrumbListItems.length !== 0){
           for(let index = 0; index < breadCrumbListItems.length; index++)
           {
                let listItem = document.createElement('li')
                listItem.append(breadCrumbListItems[index].innerHTML)
                arrayOfListItems.push(listItem)
           }
           arrayOfListItems.splice(lastbutone, 0, li)           
        }
        ul.innerHTML = ''
        for(let i = 0; i < arrayOfListItems.length; i++){
            ul.appendChild(arrayOfListItems[i])
        }
        
    }
}

export default appendBreadcrumb