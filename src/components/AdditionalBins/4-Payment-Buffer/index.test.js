import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { getPageRoute } from '../../../helpers/pagehelper'
import * as submitForm from '../../Utils'
import PaymentBuffer from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('PaymentBuffer', () => {
    
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('should call push on submit with the correct next page url when response is 200', async () => {
        // Arrange
        const url = 'http://www.test.url/paymentTest'
        const data = {}
        const history = { push: jest.fn() }
        window.location.assign = jest.fn()
        submitForm.default = jest.fn().mockReturnValue({ status: 200, url: url })

        const wrapper = mount(<PaymentBuffer context={data} history={history} />)
        
       // Act
		await wrapper.find('form').simulate('submit')

		// Assert
        expect(window.location.assign).toHaveBeenCalledWith(url)
    })

    it('should call push on submit with an error page when reponse is not 200', async () => {
        // Arrange
        const url = 'http://www.test.url/paymentTest'
        const data = {}
        const history = { push: jest.fn() }
        window.location.assign = jest.fn()
        submitForm.default = jest.fn().mockReturnValue({ status: 400, url: url })

        const wrapper = mount(<PaymentBuffer context={data} history={history} />)
        
       // Act
		await wrapper.find('form').simulate('submit')

        // Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(11))
    })

})