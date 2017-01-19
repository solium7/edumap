import React, {Component, PropTypes} from 'react'
import AreaTitle from '../../components/AreaTitle';
import RegionList from '../../components/Lists/RegionList';
import RegionInfoPanel from '../../components/RegionInfoPanel';
import InfoPanel from '../../components/InfoPanel';
import mapAO from '../../map';
import {REGIONS, REGIONS_INFO, REGION_ALIASES} from '../../constants';

export default class FullMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moInfo: {},
            regionInfoPanelIsVisible: false
        };
        this.showRegionInfoPanel = this.showRegionInfoPanel.bind(this);
        this.highlightRegion = this.highlightRegion.bind(this);
        this.selectRegion = this.selectRegion.bind(this);
        this.resetRegionFill = this.resetRegionFill.bind(this);
        this.redirectToFullMap = this.redirectToFullMap.bind(this);

        mapAO.AORegionPolygons.forEach((item, idx) => {
            item.setStyle(REGIONS[REGION_ALIASES[idx]].regStyle);
        });

        mapAO.dragging.disable();
        mapAO.touchZoom.disable();
        mapAO.doubleClickZoom.disable();
        mapAO.scrollWheelZoom.disable();
        mapAO.setView([47.1617112, 46.2098558], 8);

        this.Info = {title: 'Возможные действия:', text: 'Выберите район области'};
    }

    componentDidMount() {
        mapAO.AORegionPolygons.forEach((item, idx) => {
            item.on('mouseover', this.highlightRegion.bind(this, REGION_ALIASES[idx])).on('mouseout', this.resetRegionFill).on('click', this.selectRegion.bind(this, REGION_ALIASES[idx]));
        });
    }

    componentWillUnmount() {
        mapAO.AORegionPolygons.forEach((item) => {
            item.removeEventListener('mouseover').removeEventListener('mouseout').removeEventListener('click');
        });
    }

    highlightRegion(name) {
        const pos = REGION_ALIASES.indexOf(name);
        if (name == 'go') {
            console.log('go');
        } else {
            mapAO.AORegionPolygons.forEach(function (item, idx) {
                if (idx != pos) {
                    item.setStyle({
                        'color': '#666',
                        'fillColor': '#666',
                        'fillOpacity': 0.7,
                        'weight': 1,
                        'opacity': 0.7
                    });
                }
            });
        }
        document.getElementById('r' + name).style.backgroundColor = '#E2C788';
        this.showRegionInfoPanel(name);
    }

    selectRegion(regionAlias) {
        mapAO.AORegionPolygons.forEach((item) => {
            item.removeEventListener('mouseover').removeEventListener('mouseout').removeEventListener('click');
        });
        this.context.router.push('/mo/' + regionAlias);
    }

    resetRegionFill() {
        mapAO.AORegionPolygons.forEach(function (item, idx) {
            item.setStyle(REGIONS[REGION_ALIASES[idx]].regStyle);
        });
        Array.prototype.forEach.call(document.getElementsByClassName('listel'), function (el) {
            el.style.backgroundColor = '#fffeb7';
        });
        this.hideRegionInfoPanel();
    }

    redirectToFullMap() {
        this.context.router.push('/');
    }

    showRegionInfoPanel(moName) {
        const moInfo = REGIONS_INFO[REGION_ALIASES.indexOf(moName)];
        this.setState({moInfo, regionInfoPanelIsVisible: true});
    }

    hideRegionInfoPanel() {
        this.setState({regionInfoPanelIsVisible: false});
    }



    render() {
        return (
            <div className=''>
                <AreaTitle rateValue='none' redirectToFullMap={this.redirectToFullMap}/>
                <RegionList order='default'
                            highlightRegion={this.highlightRegion}
                            resetRegionFill={this.resetRegionFill}
                            selectRegion={this.selectRegion}/>
                <RegionInfoPanel moInfo={this.state.moInfo}
                                 regionInfoPanelIsVisible={this.state.regionInfoPanelIsVisible}/>
                <InfoPanel infoText={this.Info}/>
            </div>
        )
    }
}

FullMap.contextTypes = {
    router: PropTypes.object.isRequired
};
