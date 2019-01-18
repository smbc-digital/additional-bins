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

    it('should update case reference onFormSubmission', () =>{
        //Arrange
        const wrapper = mount(<Provider></Provider>)
        const caseReference = '123456'

        //Act
        wrapper.state().onFormSubmission(caseReference)

        //Assert
        expect(wrapper.state().crmCaseReference).toEqual(caseReference)
            
    })

    it('should set displayRecaptcha in state to be false when displayRecaptcha span null',() => { 
        // Arrange
        const wrapper = mount(<Provider></Provider>)
        // Assert
        expect(wrapper.state().displayRecaptcha).toBeFalsy()
    })

    it('should set displayRecaptcha in state to be true when enabled',() => { 
        // Arrange
        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">true</span>'
        const wrapper = mount(<Provider></Provider>)
        
        // Assert
        expect(wrapper.state().displayRecaptcha).toBeTruthy()
    })

    it('should set displayRecaptcha in state to be false when disabled',() => { 
        // Arrange
        document.body.innerHTML = '<span id="displayRecaptcha" class="hidden">false</span>'
        const wrapper = mount(<Provider></Provider>)
        
        // Assert
        expect(wrapper.state().displayRecaptcha).toBeFalsy()
    })

})