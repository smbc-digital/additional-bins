import React, { Fragment, Component} from 'react'
import {Button} from 'smbc-react-components'
import withContext from '../../WithContext'
import showBreadCrumbs from '../../../helpers/breadcrumbHelper'
import showAToZFooter from  '../../../helpers/aToZFooterHelper'

export class  OrderRecyclingBins extends Component{
    constructor(props) {
        super(props)    
    }


    onSubmit = (event) => {
        event.preventDefault()
        window.location.assign('https://www.stockport.gov.uk/start/additional-recycling-bins')
    }

    componentDidMount() {
        showBreadCrumbs(true)
        showAToZFooter(true)
	}

    render()
    {
        return(
        <Fragment>
            <form onSubmit={this.onSubmit}>
                <h1>It looks like you need additional recycling bins</h1>
                <h2>What you can do next</h2>
                <p>You can order additional recycling bins so that you</p>
                <ul>
                    <li>recycle as much as possible</li>
                    <li>have more space in your black bin for your non-recyclable waste</li>
                </ul>
                <p>Use the button below to order additional recycling bins.</p>          
                <Button className='button-primary' isValid = {true} label='Order additional recycling bins'/>
            </form>
        </Fragment>
    )
    }
}

export default withContext(OrderRecyclingBins)