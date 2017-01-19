import React, {Component, PropTypes} from 'react'

import './styles.scss'

export default class AreaTitle extends Component {
    constructor(props){
        super(props);
        this.redirectToFullMap  = this.props.redirectToFullMap;
    }

    redirectToFullMap(){
        this.context.router.push('/');
    }

    render() {
        let template = (<div></div>);
        const rateValue =Number(this.props.rateValue);
        if (this.props.rateValue == 'none') {
            template = (
                <div className='aohead aohead-short' onClick={this.redirectToFullMap}></div>
            )
        } else {
            template = (
                <div className='aohead aohead-value' onClick={this.redirectToFullMap}>
                    <p>{rateValue}</p>
                </div>
            )
        }
        return template;
    }
}

AreaTitle.propTypes = {
    rateValue: PropTypes.string.isRequired,
    redirectToFullMap: PropTypes.func.isRequired
};