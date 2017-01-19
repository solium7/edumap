import React, {Component} from 'react';
import {REGION_ALIASES, REGIONS, REGION_BLAZONS} from '../../constants';
import '../../static/css/main.scss';
import './styles.scss';


export default class RegionList extends Component {
    render() {
        return (
            <div className='panel regions-panel'>
                {REGION_ALIASES.map((name, idx) => {
                    return (
                        <div className='listel' data-regid={name} id={'r'+name} key={'reg-title-' + name}
                             onMouseEnter={this.props.highlightRegion.bind(null, name)}
                             onMouseLeave={this.props.resetRegionFill}
                             onClick={this.props.selectRegion.bind(null, name)}>
                            <img src={REGION_BLAZONS[idx]} alt=''/>
                            <div>{REGIONS[name].title}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}