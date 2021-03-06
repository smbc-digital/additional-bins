import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as submitForm from '../../Utils'
import { PaymentBuffer } from './index'
import renderer from 'react-test-renderer'
import { getPageRoute } from '../../../helpers/pagehelper'

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
        submitForm.default = jest.fn().mockReturnValue({ status: 200, url: url, isBinNotAvailable: false })

        const wrapper = mount(<PaymentBuffer context={data} history={history} />)
        
       // Act
		await wrapper.find('form').simulate('submit')

		// Assert
        expect(window.location.assign).toHaveBeenCalledWith(url)
    })


    it('should call bin not availiable page when response is 200 and bin is not available', async () => {
        // Arrange
        const url = 'http://www.test.url/paymentTest'
        const data = {}
        const history = { push: jest.fn() }
        window.location.assign = jest.fn()
        submitForm.default = jest.fn().mockReturnValue({ status: 200, url: url, isBinNotAvailable: true })

        const wrapper = mount(<PaymentBuffer context={data} history={history} />)
        
       // Act
		await wrapper.find('form').simulate('submit')

		// Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(13))
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
        expect(history.push).toHaveBeenCalledWith(getPageRoute(9))
    })

    it('should not call push on submit when recaptcha is invalid', () => {
        // Arrange
        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
        const data = {
            displayRecaptcha: true,
		}

        let history = { push: jest.fn() }
        let wrapper = mount(<PaymentBuffer context={data} history={history} />)

        // Act
        wrapper.find('button').simulate('click')

        // Assert
        expect(history.push).not.toBeCalled()
    })

    it('should set recaptchaValid in state to false', () => {
        // Arrange
        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
        const data = {
            displayRecaptcha: true,
		}

        let history = { push: jest.fn() }
        let wrapper = mount(<PaymentBuffer context={data} history={history} />)

        // Act
        wrapper.instance().onChangeRecaptcha(undefined)

        // Assert
        expect(wrapper.state().recaptchaValid).toBe(false)
    })

    it('should set recaptchaValid in state to true', () => {
        // Arrange
        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
        const data = {
            displayRecaptcha: true,
		}

        let history = { push: jest.fn() }
        let wrapper = mount(<PaymentBuffer context={data} history={history} />)

        // Act
        wrapper.instance().onChangeRecaptcha('testRecaptchaValue')

        // Assert
        expect(wrapper.state().recaptchaValid).toBe(true)
    })

    describe('snapshot', () => {
        it('renders correctly', () => {
            const context = {
                whyMoreSpace: {
                    value: '',
                    isValid : false
                },
                whyMoreSpaceOther: {
                    value: '',
                    isValid: false
                }
            }
            const history = {
                push: jest.fn()
            }

            const tree = renderer
                .create(<PaymentBuffer context={context} history={history} />)
                .toJSON()
                
            expect(tree).toMatchSnapshot()
        })
    })
})