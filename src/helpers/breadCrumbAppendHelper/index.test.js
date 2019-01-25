import appendBreadCrumb from './index.js'

describe('appendBreadCrumb', () => {
    it('should find ul with class bread crumb and append list item' , () => {
        // Arrange
        document.body.innerHTML = '<div id="appendBreadCrumb" class="appendBreadCrumb"><ul class="center-wrapper"><li>breadcrumb</li><li>last bread crumb</li></ul></div>'

        // Act
        appendBreadCrumb('text', 'url')
        var result = document.getElementsByTagName('ul')[0].innerHTML        
        // Assert
        expect(result).toEqual('<li>breadcrumb</li><li><a href="url">text</a></li><li>last bread crumb</li>')
    })    
})