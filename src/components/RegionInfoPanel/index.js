import React, {Component} from 'react';
import '../../static/css/main.scss';
import './styles.scss';

export default class RegionInfoPanel extends Component {
    render() {
        return this.props.regionInfoPanelIsVisible ? (
                <div className='panel reg-info-panel'>
                    <div className='info-block info-title reg-info'>{this.props.moInfo.fullName}</div>
                    <div className='info-block reg-info'>{this.props.moInfo.year}</div>
                    <div className='info-block reg-info'>{this.props.moInfo.area}</div>
                    <div className='info-block reg-info'>{this.props.moInfo.cities}</div>
                    <div className='info-block reg-info'>{this.props.moInfo.citizens}</div>
                    <div className='info-block info-title reg-info'>Глава района:</div>
                    <div className='info-block reg-info'>{this.props.moInfo.bigBoss}</div>
                    <div className='info-block info-title reg-info' id='for-narimanov'>Глава отдела образования:</div>
                    <div className='info-block reg-info'>{this.props.moInfo.littleBoss}</div>
                    <div className='info-block info-title reg-info'>Количество образовательных организаций:</div>
                    <div className='info-block reg-info'>{this.props.moInfo.toysCount}</div>
                    <div className='info-block reg-info'>{this.props.moInfo.schoolsCount}</div>
                    <div className='info-block reg-info'>{this.props.moInfo.additionalCount}</div>
                </div>) : null;
    }
}