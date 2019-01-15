import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../context/'


class Provider extends Component{
	constructor(props){
		super(props)
		this.state = {
			doYouRecycle : {
				value: '',
				isValid: false
			},
			whyMoreSpace : {
				value: '',
				isValid: false
			},
			whyMoreSpaceOther : {
				value: '',
				isValid: false
			},
			orderRecyclingBins : {
				value: '',
				isValid: false
			},
			address : {
				value: '',
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
			displayRecaptcha: document.getElementById('displayRecaptcha') != null ? document.getElementById('displayRecaptcha').innerHTML === 'true' ? true : false : false,
			crmReference: '',
			onChange: this.onChange
		}
	}
	
	onChange = (event, isValid) => {
		this.setState({
			[event.target.name]: {
				value: event.target.value,
				isValid
			}
		})
    }
    
	render(){
		const { children } = this.props
		return <Context.Provider value={ this.state }>{children}</Context.Provider>
	}
}

Provider.propTypes = {
	history: PropTypes.object,
	context: PropTypes.object,
	children: PropTypes.object,
	mockState: PropTypes.object
}

export default Provider