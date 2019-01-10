import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import getPageRoute from '../../../helpers/pagehelper'
import renderer from 'react-test-renderer'
import { DoYouRecycle } from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('DoYouRecycle', () => {
	it('should push to correct page when answer is No, Not enought space', () => {
        // Arrange
		const history = { push: jest.fn() }
        const context = {
            doYouRecycle: {
                value: 'not-enough-space',
                isValid : true
            }
        }

		// Act
        const wrapper = mount(<DoYouRecycle history={history} context={context} />)
    
        // Assert
        wrapper.find('form').simulate('submit')
        expect(history.push).toHaveBeenCalledWith(getPageRoute(8))
    })
    
    it('should push to correct page when answer is No, What can i recycle', () => {
        // Arrange
        window.location.assign = jest.fn()
		const history = { push: jest.fn() }
        const context = {
            doYouRecycle: {
                value: 'what-can-i-recycle',
                isValid : true
            }
        }

		// Act
        const wrapper = mount(<DoYouRecycle history={history} context={context} />)
    
        // Assert
        wrapper.find('form').simulate('submit')
        expect(history.push).toHaveBeenCalledWith(getPageRoute(7))
    })
    
    it('should push to correct page when answer is Yes', () => {
		// Arrange
		const history = { push: jest.fn() }
        const context = {
            doYouRecycle: {
                value: 'true',
                isValid : true
            }
        }

		// Act
        const wrapper = mount(<DoYouRecycle history={history} context={context} />)
    
        // Assert
        wrapper.find('form').simulate('submit')
        expect(history.push).toHaveBeenCalledWith(getPageRoute(2))
    })
    
    it('should check if button disabled by default',() => { 
		// Arrange
		const context = {
            doYouRecycle: {
                value: '',
                isValid : false
            }
		}
		// Act
		const wrapper = mount(<DoYouRecycle context={context} history={history}/>)
		
		// Assert
		expect(wrapper.find('button').props().disabled).toBeTruthy()
})

    describe('snapshot', () => {
        it('renders correctly', () => {
            const context = {
                doYouRecycle: {
                    value: '',
                    isValid : false
                }
            }

            const tree = renderer
                .create(<DoYouRecycle context={context} />)
                .toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})
