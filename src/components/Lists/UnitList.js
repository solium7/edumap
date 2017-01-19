import React, {Component, PropTypes} from 'react';
import {OO_ICONS, RATE_BALLS} from '../../constants';
import '../../static/css/main.scss';
import './styles.scss';

export default class UnitList extends Component {
    constructor(props) {
        super(props);
        this.selectUnit = this.props.selectUnit;
    }

    render() {
        let listElement;
        if ((!this.props.unitList) || (this.props.unitList.length == 0)) {
            listElement = (
                <div className='panel units-panel'>
                    <div className="noOO">
                        На территории данного района отсутствуют организации дополнительного образования.
                    </div>
                </div>
            )
        }
        else if (this.props.isRated) {
            listElement = (
                <div className='panel units-panel'>
                    <ul className='units-list'>
                        {this.props.unitList.map(item => (
                            <li className='units-listel' id={'i' + item.ooCode} key={'u' + item.ooCode}
                                onClick={this.selectUnit.bind(null, item.ooCode)}>
                                <img src={OO_ICONS[item.rateCategory]} alt=''/>
                                <div className='unit_name_text'>{item.ooName}</div>
                                <div className='school_rate'
                                     style={{backgroundImage: 'url(' + RATE_BALLS[item.rateCategory] + ')'}}>
                                    {item.rateValue}
                                </div>
                            </li>)
                        )}
                    </ul>
                </div>
            )
        }
        else {
            listElement = (
                <div className='panel units-panel'>
                    <ul className='units-list'>
                        {this.props.unitList.map(item => (
                            <li className='units-listel' id={'i' + item.ooCode} key={'u' + item.ooCode}
                                onClick={this.selectUnit.bind(null, item.ooCode)}>
                                <img src={OO_ICONS[0]} alt=''/>
                                <div className='unit_name_text'>{item.ooName}</div>
                            </li>)
                        )}
                    </ul>
                </div>
            )
        }
        return listElement;
    }
}

UnitList.propTypes = {
    isRated: PropTypes.bool.isRequired,
    unitList: PropTypes.array.isRequired,
    selectUnit: PropTypes.func.isRequired
};