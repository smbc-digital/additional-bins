import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Provider from '../Provider'

Enzyme.configure({ adapter: new Adapter() })

describe('Provider', () => {
    it('should create the base state with objects', () => {
        // Arrange
        const wrapper = mount(<Provider></Provider>)

        // Act
        expect(wrapper.state()).not.toBeNull()
        expect(wrapper.state().onChange).not.toBeNull()
        expect(wrapper.state().doYouRecycle).not.toBeNull()
    })

    it('should update state when on change is triggered', () => {
        // Arrange
        const wrapper = mount(<Provider></Provider>)
        const event = {
            target : {
                name : 'doYouRecycle',
                value : 'testValue'
            }
        }
        //Act
        wrapper.state().onChange(event, true)

        //Assert
        expect(wrapper.state().doYouRecycle.value).toEqual('testValue')
        expect(wrapper.state().doYouRecycle.isValid).toBeTruthy()
    })
})