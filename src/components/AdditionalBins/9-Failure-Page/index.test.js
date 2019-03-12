import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { FailurePage } from './index'

Enzyme.configure({ adapter: new Adapter() })
describe('FailurePage', () => {
	it('should render the errorpage component', () => {
		// Arrange
		const history = {
			block: jest.fn()
        }

		// Act
		const wrapper = mount(<FailurePage history={history} />)
		expect(wrapper.find('ErrorPage').exists()).toBe(true)
    })
})