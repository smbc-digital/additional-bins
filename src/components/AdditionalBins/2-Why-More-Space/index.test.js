import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import { WhyMoreSpace } from './index'

Enzyme.configure({ adapter: new Adapter() })

describe('WhyMoreSpace', () => {
    it('should push to correct page on submit', () => {
        // Arrange
        const history = { push: jest.fn() }
        const context = {
            whyMoreSpace: {
                value: 'disposable-nappies',
                isValid : true
            },
            whyMoreSpaceOther: {
                value: '',
                isValid: false
            }
        }
        const wrapper = mount(<WhyMoreSpace history={history} context={context} />)
        
        // Act
        wrapper.find('form').simulate('submit')

        // Assert
        expect(history.push).toHaveBeenCalled()
    })

    it('should render other reason text input', () => {
        // Arrange
        const history = { push: jest.fn() }
        const context = {
            whyMoreSpace: {
                value: 'WAS',
                isValid: true
            },
            whyMoreSpaceOther: {
                value: '',
                isValid: false
            }
        }
        const wrapper = mount(<WhyMoreSpace history={history} context={context} />)

        // Assert
        expect(wrapper.find('TextAreaInputContainer').exists()).toBe(true)
    })

    it('should render disabled button', () => {
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
        const wrapper = mount(<WhyMoreSpace history={{}} context={context} />)

        // Assert
        expect(wrapper.find('button').props().disabled).toBe(true)
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

            const tree = renderer
                .create(<WhyMoreSpace context={context} />)
                .toJSON()
                
            expect(tree).toMatchSnapshot()
        })
    })

})