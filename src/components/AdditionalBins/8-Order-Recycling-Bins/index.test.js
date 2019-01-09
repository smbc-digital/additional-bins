import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { OrderRecyclingBins } from './index'
//import renderer from 'react-test-renderer'
import getPageRoute from '../../../helpers/pagehelper'


Enzyme.configure({ adapter: new Adapter() })
describe('OrderRecyclingBins',() => { 
    it('should render active button', () => {
        // Arrange
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
        const wrapper = mount(<OrderRecyclingBins history={{}} context={context} />)

        // Assert
        expect(wrapper.find('.button-primary').exists())
    })

   


})