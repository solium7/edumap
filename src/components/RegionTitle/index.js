import React, {Component, PropTypes} from 'react'
import {REGIONS, REGION_ALIASES, REGION_BLAZONS} from '../../constants'
import '../../static/css/main.scss'
import './styles.scss'

export default class RegionTitle extends Component {
    constructor(props) {
        super(props);
        this.resetMap = this.props.resetMap;
    }

    render() {
        return (
            <div className='region-title' onClick={this.resetMap}>
                <img src={REGION_BLAZONS[REGION_ALIASES.indexOf(this.props.regionAlias)]} alt=''/>
                {REGIONS[this.props.regionAlias].title}
            </div>)
    }
}

RegionTitle.propTypes = {
    regionAlias: PropTypes.string.isRequired,
    resetMap: PropTypes.func.isRequired
};

