import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Success } from './index'
import renderer from 'react-test-renderer'


Enzyme.configure({ adapter: new Adapter() })
describe('Success',() => { 

    it('should find elements required',() => { 
        // Arrange
        const context = {
            success: {
                value: '',
            }
        }
        const history = {
            block: jest.fn()
        }

        const wrapper = mount(<Success context={context} history={history} />)
        // Act

        // Assert
        expect(wrapper.find('h1','h2','p','a').exists()).toBe(true)
    })

    it('should show non triage success page when theres a receipt number',() => { 
        // Arrange
        const context = {
            success: {
                value: '',
            },
            receiptNumber: '1'
        }
        const history = {
            block: jest.fn()
        }

        const wrapper = mount(<Success context={context} history={history} />)

        // Act

        // Assert
        expect(wrapper.find('h3').exists()).toBe(false)
    })

    it('should block history', () => {
        // Arrange
        const context = {
            success: {
                value: '',
            },
            receiptNumber: '1'
        }
        const history = {
            block: jest.fn()
        }

        mount(<Success context={context} history={history} />)
        // Assert
        expect(history.block).toBeCalled()
    })

    describe('snapshot', () => {

        it('renders correctly', () => {
            const context = {
                
                }
            const history = {
                block: jest.fn()
            }


            const tree = renderer
                .create(< Success context={context} history={history} />)
                .toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})