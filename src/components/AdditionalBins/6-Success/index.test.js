import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Success } from './index'
//import renderer from 'react-test-renderer'


Enzyme.configure({ adapter: new Adapter() })
describe('Success',() => { 

it('should find elements required',() => { 
    // Arrange
    const context = {
        success: {
            value: '',
        }
    }
    const wrapper = mount(<Success context={context} />)
    // Act

    // Assert
    expect(wrapper.find('h1','h2','p','a').exists()).toBe(true)
})

//     describe('snapshot', () => {
//     it('renders correctly', () => {
//         const context = {
//             
//             }
//

//         const tree = renderer
//             .create(< Success context={context} />)
//             .toJSON()
//         expect(tree).toMatchSnapshot()
//     })
//})


})