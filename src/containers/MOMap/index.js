import React, {Component, PropTypes} from 'react'
import L from 'leaflet';
import mapAO from '../../map';
import AreaTitle from '../../components/AreaTitle';
import InfoPanel from '../../components/InfoPanel';
import UnitList from '../../components/Lists/UnitList';
import Scale from '../../components/Scale';
import TableOfRates from '../../components/TableOfRates';
import RegionTitle from '../../components/RegionTitle';
import OOBooklet from '../../components/OOBooklet';
import {REGIONS, REGION_ALIASES, REGION_CODES, OO_UNITS, OO_ICONS} from '../../constants';
import chartImage from '../../static/images/charts.png';

export default class MOMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookletIsVisible: false,
            isRated: false,
            tableOfRatesIsVisible: false
        };

        this.currentUnit = null;
        this.moUnits = OO_UNITS.filter(item => {
            return (item.moCode == REGION_CODES[this.props.params.mo]);
        });
        this.scaleNums = [0, 20, 40, 60, 80, 100];
        this.scaleOrder = true;

        this.rateRandom = this.rateRandom.bind(this);
        this.unrateUnits = this.unrateUnits.bind(this);
        this.showRateTable = this.showRateTable.bind(this);
        this.hideRateTable = this.hideRateTable.bind(this);
        this.selectRate = this.selectRate.bind(this);
        this.resetMap = this.resetMap.bind(this);
        this.selectUnit = this.selectUnit.bind(this);
        this.showBooklet = this.showBooklet.bind(this);
        this.hideBooklet = this.hideBooklet.bind(this);
        this.redirectToFullMap = this.redirectToFullMap.bind(this);
        this.resetMapView = this.resetMapView.bind(this);

        const LeafIcon = L.Icon.extend({
            options: {
                iconSize: [25, 32],
                iconAnchor: [0, 32],
                popupAnchor: [12, -33]
            }
        });

        this.ooIcons = [];
        for (let i = 0; i < 6; i++) {
            this.ooIcons.push(new LeafIcon({
                iconUrl: OO_ICONS[i]
            }));
        }


        this.resetMapView();

        mapAO.ooMarkers = [];
        this.moUnits.forEach((item => {
            let newMarker = L.marker([item.ooLatt, item.ooLong], {icon: this.ooIcons[0]}).addTo(mapAO);
            newMarker.ooCode = item.ooCode;
            mapAO.ooMarkers.push(newMarker);
            let pdiv = document.createElement('div');
            pdiv.innerHTML = '<p><b>' + item.ooName + '</b><br>' + item.ooAddress + '</p><a href="#">Подробнее...</a>';
            pdiv.addEventListener('click', this.showBooklet.bind(this, item.ooCode));
            newMarker.bindPopup(pdiv);
        }));

        this.Info = {title: 'Возможные действия:', text: 'Выберите организацию или показатель независимой оценки'};
        this.averageRateValue = 'none';
    }

    static onEnter() {

    }

    resetMapView() {
        mapAO.dragging.enable();
        mapAO.touchZoom.enable();
        mapAO.doubleClickZoom.enable();
        mapAO.scrollWheelZoom.enable();
        mapAO.setView(REGIONS[this.props.params.mo].center, REGIONS[this.props.params.mo].zoom);
        if (this.props.params.mo == 'go') {
            mapAO.AORegionPolygons.forEach((item) => {
                item.setStyle({
                    'color': '#FFFFFF',
                    'fillColor': '#FFFFFF',
                    'fillOpacity': 0,
                    'weight': 0,
                    'opacity': 0
                });
            })
        } else {
            mapAO.AORegionPolygons.forEach((item, idx) => {
                if (idx == REGION_ALIASES.indexOf(this.props.params.mo)) {
                    item.setStyle({
                        'color': '#FFFFFF',
                        'fillColor': '#FFFFFF',
                        'fillOpacity': 0,
                        'weight': 0,
                        'opacity': 0
                    });
                } else {
                    item.setStyle({
                        'color': '#777',
                        'fillColor': '#777',
                        'fillOpacity': 0.7,
                        'weight': 1,
                        'opacity': 0.7
                    });
                }
            });
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.resetMapView();
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        // Удалились все иконки с подсказками
        mapAO.ooMarkers.forEach(item => mapAO.removeLayer(item));
    }

    showBooklet(ooCode) {
        this.currentUnit = this.moUnits.find(item => item.ooCode == ooCode);
        this.setState({bookletIsVisible: true});
    }

    hideBooklet() {
        this.setState({bookletIsVisible: false});
    }

    showRateTable() {
        this.setState({tableOfRatesIsVisible: true});
    }

    hideRateTable() {
        this.setState({tableOfRatesIsVisible: false});
    }

    redirectToFullMap() {
        this.context.router.push('/');
    }

    resetMap() {
        mapAO.setView(REGIONS[this.props.params.mo].center, REGIONS[this.props.params.mo].zoom);
        this.unrateUnits();
    }

    selectUnit(ooCode) {
        const currentMarker = mapAO.ooMarkers.find(item => item.ooCode == ooCode);
        mapAO.setView(currentMarker.getLatLng(), 15);
        currentMarker.openPopup();
    }

    rateRandom() {
        let sumVal = 0;
        this.unrateUnits();
        this.moUnits.forEach(item => {
            item.rateValue = (Math.random() * 100).toFixed(2);
            sumVal += Number(item.rateValue);
            if (item.rateValue < 20) {
                item.rateCategory = 1
            } else if (item.rateValue < 40) {
                item.rateCategory = 2
            } else if (item.rateValue < 60) {
                item.rateCategory = 3
            } else if (item.rateValue < 80) {
                item.rateCategory = 4
            } else if (item.rateValue <= 100) {
                item.rateCategory = 5
            }
        });
        mapAO.ooMarkers.forEach(
            (item, idx) => item.setIcon(this.ooIcons[this.moUnits[idx].rateCategory])
        );
        this.moUnits.sort((a, b) => {
            if (Number(a.rateValue) > Number(b.rateValue)) return -1;
            if (Number(a.rateValue) < Number(b.rateValue)) return 1;
        });
        this.setState({isRated: true});
        // console.log(sumVal);
        // console.log(typeof this.moUnits.length);
        // console.log(this.moUnits.length);
        // console.log((sumVal / this.moUnits.length).toFixed(2));
        this.averageRateValue = (sumVal / this.moUnits.length).toFixed(2);
    }

    selectRate() {
        this.hideRateTable();
        this.rateRandom();
    }


    unrateUnits() {
        this.moUnits = OO_UNITS.filter(item => {
            return (item.moCode == REGION_CODES[this.props.params.mo]);
        });
        mapAO.ooMarkers.forEach(
            item => item.setIcon(this.ooIcons[0])
        );
        this.averageRateValue = 'none';
        this.setState({isRated: false});
    }

    render() {
        return (
            <div className=''>
                <div className='rates-btn' style={{display: 'block'}} onClick={this.showRateTable}>
                    <div><img src={chartImage} alt=''/></div>
                    <div>Независимая оценка качества оказания образовательных услуг</div>
                </div>
                <AreaTitle rateValue={this.averageRateValue} redirectToFullMap={this.redirectToFullMap}/>
                <RegionTitle regionAlias={this.props.params.mo} resetMap={this.resetMap}/>
                <UnitList isRated={this.state.isRated}
                          unitList={this.moUnits}
                          selectUnit={this.selectUnit}/>
                {this.state.tableOfRatesIsVisible ?
                    <TableOfRates selectRate={this.selectRate} hideMe={this.hideRateTable}/> : null}
                <InfoPanel infoText={this.Info}/>
                {this.state.bookletIsVisible ?
                    <OOBooklet hideBooklet={this.hideBooklet} ooUnit={this.currentUnit}/> : null}
                {this.state.isRated ? <Scale nums={this.scaleNums} order={this.scaleOrder}/> : null}
            </div>
        )
    }
}

MOMap.contextTypes = {
    router: PropTypes.object.isRequired
};