import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { TellUsAboutYourself } from './index'
import renderer from 'react-test-renderer'
import getPageRoute from '../../../helpers/pagehelper'

Enzyme.configure({ adapter: new Adapter() })
describe('TellUsAboutYourself',() => {


it('should submit the form and go to page 4 when user does not select other on the previous page', () => {
    // Arrange
    const history = { push: jest.fn() }
    const context = {
        address : {
            value: {},
            isValid: false
        },
        firstName : {
            value: '',
            isValid: false
        },
        lastName : {
            value: '',
            isValid: false
        },
        emailAddress : {
            value: '',
            isValid: false
        },
        phoneNumber : {
            value: '',
            isValid: false
        },
        whyMoreSpace : {
            value: 'test',
            isValid: true
        },
        onChange: jest.fn()
    }

    const wrapper = mount(<TellUsAboutYourself context={context} history={history} />)

    // Act
    wrapper.find('form').simulate('submit')

    // Assert
    expect(history.push).toHaveBeenCalledWith(getPageRoute(4))
    })

    it('should submit the form and go to page 6 when user selects other on the previous page', async () => {
        // Arrange
        const history = { push: jest.fn() }
        const context = {
            address : {
                value: {},
                isValid: false
            },
            firstName : {
                value: '',
                isValid: false
            },
            lastName : {
                value: '',
                isValid: false
            },
            emailAddress : {
                value: '',
                isValid: false
            },
            phoneNumber : {
                value: '',
                isValid: false
            },
            whyMoreSpace : {
                value: 'WAS',
                isValid: true
            },
            onChange: jest.fn()
        }

        const wrapper = mount(<TellUsAboutYourself context={context} history={history} />)

        // Act
        await wrapper.find('form').simulate('submit')

        // Assert
        expect(history.push).toHaveBeenCalledWith(getPageRoute(5))
        })

    it('should find the elements required',() => {
        // Arrange
        const context = {
            address : {
                value: {},
                isValid: false
            },
            firstName : {
                value: '',
                isValid: false
            },
            lastName : {
                value: '',
                isValid: false
            },
            emailAddress : {
                value: '',
                isValid: false
            },
            phoneNumber : {
                value: '',
                isValid: false
            },
            onChange: jest.fn()
        }
        // Act
        const wrapper = mount(<TellUsAboutYourself context={context} history={history}/>)
        expect(wrapper.find('h1', 'h2', 'TextInputContainer', 'AddressPicker', 'Button', 'Anchor', 'Fragment').exists()).toBe(true)
    })

    it('Should render automatic address', () => {
        const history = { push: jest.fn() }
		const context = {
            address : {
                value: {},
                isValid: false
            },
            firstName : {
                value: '',
                isValid: false
            },
            lastName : {
                value: '',
                isValid: false
            },
            emailAddress : {
                value: '',
                isValid: false
            },
            phoneNumber : {
                value: '',
                isValid: false
            },
            onChange: jest.fn()
        }

        const wrapper = mount(<TellUsAboutYourself history={history} context={context}/>)

        expect(wrapper.find('#addressLine1').exists()).toBeFalsy()
    })

    it('should enable next step button when all inputs are valid',() => {
        // Arrange
		const context = {
            address : {
                value: {},
                isValid: true
            },
            firstName : {
                value: 'b',
                isValid: true
            },
            lastName : {
                value: 'c',
                isValid: true
            },
            emailAddress : {
                value: 'd',
                isValid: true
            },
            phoneNumber : {
                value: 'e',
                isValid: false
            },
            onChange: jest.fn()
        }
        const history = { 
            push: jest.fn()
        }

        // Act
        const wrapper = mount(<TellUsAboutYourself context={context} history={history}/>)

        // Assert
        expect(wrapper.find('button').at(1).props().disabled).toBeFalsy()
    })

    describe('snapshot', () => {
        it('renders correctly', () => {
            const context = {
                address : {
                    value: {},
                    isValid: false
                },
                firstName : {
                    value: 'b',
                    isValid: false
                },
                lastName : {
                    value: 'c',
                    isValid: false
                },
                emailAddress : {
                    value: 'd',
                    isValid: false
                },
                phoneNumber : {
                    value: 'e',
                    isValid: false
                },
                onChange: jest.fn()
            }
            const history = {
                push: jest.fn()
            }


            const tree = renderer
                .create(< TellUsAboutYourself context={context} history={history} />)
                .toJSON()
            expect(tree).toMatchSnapshot()
        })
    })

})