import L from 'leaflet'

import asBlz from './static/images/blazons/as.png';
import znBlz from './static/images/blazons/zn.png';
import ahBlz from './static/images/blazons/ah.png';
import voBlz from './static/images/blazons/vo.png';
import enBlz from './static/images/blazons/en.png';
import ikBlz from './static/images/blazons/ik.png';
import kaBlz from './static/images/blazons/ka.png';
import krBlz from './static/images/blazons/kr.png';
import liBlz from './static/images/blazons/li.png';
import naBlz from './static/images/blazons/na.png';
import prBlz from './static/images/blazons/pr.png';
import haBlz from './static/images/blazons/ha.png';
import chBlz from './static/images/blazons/ch.png';
import goBlz from './static/images/blazons/russia.svg';

import RateBall1 from './static/images/rate1.png';
import RateBall2 from './static/images/rate2.png';
import RateBall3 from './static/images/rate3.png';
import RateBall4 from './static/images/rate4.png';
import RateBall5 from './static/images/rate5.png';

import ooIcon0 from './static/images/icons/additional0_s.png';
import ooIcon1 from './static/images/icons/additional1_s.png';
import ooIcon2 from './static/images/icons/additional2_s.png';
import ooIcon3 from './static/images/icons/additional3_s.png';
import ooIcon4 from './static/images/icons/additional4_s.png';
import ooIcon5 from './static/images/icons/additional5_s.png';

import asGeoJSON from './static/jsons/geodata/as.geojson';
import ahGeoJSON from './static/jsons/geodata/ah.geojson';
import chGeoJSON from './static/jsons/geodata/ch.geojson';
import enGeoJSON from './static/jsons/geodata/en.geojson';
import haGeoJSON from './static/jsons/geodata/ha.geojson';
import ikGeoJSON from './static/jsons/geodata/ik.geojson';
import kaGeoJSON from './static/jsons/geodata/ka.geojson';
import krGeoJSON from './static/jsons/geodata/kr.geojson';
import liGeoJSON from './static/jsons/geodata/li.geojson';
import naGeoJSON from './static/jsons/geodata/na.geojson';
import prGeoJSON from './static/jsons/geodata/pr.geojson';
import voGeoJSON from './static/jsons/geodata/vo.geojson';
import znGeoJSON from './static/jsons/geodata/zn.geojson';
import squareGeoJSON from './static/jsons/geodata/blacksquare.geojson';

import moInfoJSON from './static/jsons/mo_info.json';
import dopUnits from './static/jsons/dopUnits.json';
// import ooUnits from './static/jsons/units.json';

export const REGION_GEOJSONS = [asGeoJSON, znGeoJSON, ahGeoJSON, voGeoJSON, enGeoJSON, ikGeoJSON, kaGeoJSON, krGeoJSON, liGeoJSON, naGeoJSON, prGeoJSON, haGeoJSON, chGeoJSON];
export const BLACK_SQUARE_JSON = squareGeoJSON;


export const REGION_BLAZONS = [asBlz, znBlz, ahBlz, voBlz, enBlz, ikBlz, kaBlz, krBlz, liBlz, naBlz, prBlz, haBlz, chBlz, goBlz];

const regOpacity = 0.85;
const lineWeight = 2;
const regFillOpacity = 0.75;


export const REGION_ALIASES = ['as', 'zn', 'ah', 'vo', 'en', 'ik', 'ka', 'kr', 'li', 'na', 'pr', 'ha', 'ch', 'go'];

export const REGION_CODES = {
    as: 10, zn: 32, ah: 21, vo: 22, en: 23, ik: 24, ka: 25, kr: 26, li: 27, na: 28, pr: 29, ha: 30, ch: 31, go: 33
};

export const REGIONS = {
    as: {
        title: 'город Астрахань',
        blazon: 'as.png',
        polygon: 'as.geojson',
        code: '10',
        zoom: '12',
        center: L.latLng(46.36719041565122, 47.992044215527336),
        osmId: 1853865,
        regStyle: {
            'color': '#FF3232',
            'fillColor': '#FF3232',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    zn: {
        title: 'ЗАТО Знаменск',
        blazon: 'zn.png',
        polygon: 'zn.geojson',
        code: '32',
        zoom: '13',
        center: L.latLng(48.58, 45.70),
        osmId: 1649271,
        regStyle: {
            'color': '#94EC74',
            'fillColor': '#94EC74',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    ah: {
        title: 'Ахтубинский',
        blazon: 'ah.png',
        polygon: 'ah.geojson',
        code: '21',
        zoom: '9',
        center: L.latLng(48.203593586292214, 45.8228238306026),
        osmId: 1850408,
        regStyle: {
            'color': '#74ECDA',
            'fillColor': '#74ECDA',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    vo: {
        title: 'Володарский',
        blazon: 'vo.png',
        polygon: 'vo.geojson',
        code: '22',
        zoom: '10',
        center: L.latLng(46.07847399312271, 48.51835799726562),
        osmId: 1863175,
        regStyle: {
            'color': '#E974EC',
            'fillColor': '#E974EC',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    en: {
        title: 'Енотаевский',
        blazon: 'en.png',
        polygon: 'en.geojson',
        code: '23',
        zoom: '9',
        center: L.latLng(47.27271052460457, 46.30461288007815),
        osmId: 1853856,
        regStyle: {
            'color': '#FFFD92',
            'fillColor': '#FFFD92',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    ik: {
        title: 'Икрянинский',
        blazon: 'ik.png',
        polygon: 'ik.geojson',
        code: '24',
        zoom: '10',
        center: L.latLng(45.81779739300029, 47.35243392499999),
        osmId: 1957534,
        regStyle: {
            'color': '#D2FF61',
            'fillColor': '#D2FF61',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    ka: {
        title: 'Камызякский',
        blazon: 'ka.png',
        polygon: 'ka.geojson',
        code: '25',
        zoom: '10',
        center: L.latLng(45.8598940757423, 47.88389754804687),
        osmId: 1957535,
        regStyle: {
            'color': '#6BE8FF',
            'fillColor': '#6BE8FF',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    kr: {
        title: 'Красноярский',
        blazon: 'kr.png',
        polygon: 'kr.geojson',
        code: '26',
        zoom: '10',
        center: L.latLng(46.73562903219636, 48.15580916914062),
        osmId: 1863174,
        regStyle: {
            'color': '#ECDA74',
            'fillColor': '#ECDA74',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    li: {
        title: 'Лиманский',
        blazon: 'li.png',
        polygon: 'li.geojson',
        code: '27',
        zoom: '10',
        center: L.latLng(45.82449672291287, 46.93358016523437),
        osmId: 1853857,
        regStyle: {
            'color': '#FF9D6B',
            'fillColor': '#FF9D6B',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    na: {
        title: 'Наримановскй',
        blazon: 'na.png',
        polygon: 'na.geojson',
        code: '28',
        zoom: '10',
        center: L.latLng(46.43360168536142, 47.34968734296874),
        osmId: 1853860,
        regStyle: {
            'color': '#AAD1FB',
            'fillColor': '#AAD1FB',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    pr: {
        title: 'Приволжский',
        blazon: 'pr.png',
        polygon: 'pr.geojson',
        code: '29',
        zoom: '11',
        center: L.latLng(46.31445375051777, 48.02465987714843),
        osmId: 1863176,
        regStyle: {
            'color': '#61FF6B',
            'fillColor': '#61FF6B',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    ha: {
        title: 'Харабалинский',
        blazon: 'ha.png',
        polygon: 'ha.geojson',
        code: '30',
        zoom: '9',
        center: L.latLng(47.28202761604628, 46.86628890546874),
        osmId: 1853861,
        regStyle: {
            'color': '#88EC74',
            'fillColor': '#88EC74',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    ch: {
        title: 'Черноярский',
        blazon: 'ch.png',
        polygon: 'ch.geojson',
        code: '31',
        zoom: '10',
        center: L.latLng(48.10239106475461, 45.42982650312499),
        osmId: 1853863,
        regStyle: {
            'color': '#EC9C74',
            'fillColor': '#EC9C74',
            'fillOpacity': regFillOpacity,
            'weight': lineWeight,
            'opacity': regOpacity
        }
    },
    go: {
        title: 'Государственные организации',
        blazon: 'russia.svg',
        code: '33',
        zoom: '8',
        center: L.latLng(47.1617112, 46.2098558)
    }
};

export const RATE_COLORS = [
    '#00A64B',
    '#92D050',
    '#FFFF00',
    '#E48F01',
    '#FF0000'
];

export const REGIONS_INFO = moInfoJSON.map(function (item) {
    return {
        fullName: item[1],
        year: item[2],
        area: item[3],
        cities: item[4],
        citizens: item[5],
        bigBoss: item[6],
        littleBoss: item[7],
        toysCount: item[8],
        schoolsCount: item[9],
        additionalCount: item[10]
    };
});

export const OO_UNITS = dopUnits;

export const OO_ICONS = [ooIcon0, ooIcon1, ooIcon2, ooIcon3, ooIcon4, ooIcon5];

export const OO_PROGRAM_TYPES = {
    ooTech: 'Техническая',
    ooScience: 'Естественно-научная',
    ooSport: 'Физкультурно-спортивная',
    ooArt: 'Художественно-эстетическая',
    ooTourism: 'Туристско-краеведческая',
    ooPatriot: 'Военно-патриотическая',
    ooSocial: 'Социально-педагогическая',
    ooCulture: 'Культурологическая',
    ooOther: 'Другое'
};

export const RATE_BALLS = [null, RateBall5, RateBall4, RateBall3, RateBall2, RateBall1];

export const XLSMarkUp = {
    sheet1: { // additional units
        moCode: 'B',
        ooCode: 'C',
        ooType: 'D',
        ooName: 'E',
        ooFullName: 'F',
        ooBoss: 'G',
        ooAddress: 'H',
        ooPhone: 'J',
        ooMail: 'K',
        ooSite: 'N',
        ooFoundationYear: 'O',
        ooTech: 'P',
        ooScience: 'Q',
        ooSport: 'R',
        ooArt: 'S',
        ooTourism: 'T',
        ooPatriot: 'U',
        ooSocial: 'V',
        ooOther: 'W',
        ooCulture: 'X',
        ooModPrograms: 'AD',
        ooRatings: [
            {
                title: "Оценка степени открытости и доступности информации об организации по баллам (%)",
                points: ["AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO"]
            },
            {
                title: "Оценка организации условий для обучения детей с ОВЗ и инвалидов (%)",
                points: ["AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ"]
            },
            {
                title: "Оценка компетентности работников организации (%)",
                points: ["BA", "BB", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK"]
            },
            {
                title: "Оценка материально-технического обеспечения организации (%)",
                points: ["BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV"]
            },
            {
                title: "Оценка качества предоставляемых образовательных услуг (%)",
                points: ["BW", "BX", "BY", "BZ", "CA", "CB", "CC", "CD", "CE", "CF", "CG"]
            },
            {
                title: "Оценка возможности развития творческих способностей и интересов обучающихся (%)",
                points: ["CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR"]
            }]
    },
    sheet0: { // all units
        "ooMOCode": "A",
        "ooCode": "B",
        "ooType": "C",
        "ooName": "D",
        "ooFullName": "E",
        "ooDirector": "F",
        "ooAddress": "G",
        "ooResrvdString1": "H",
        "ooPhone": "I",
        "ooEMail": "J",
        "ooResrvdString2": "K",
        "ooWWW": "L",
        "ooYearOfFndtn": "M",
        "ooHistory": "N",
        "ooKurs1Count": "P",
        "ooKurs2Count": "R",
        "ooKurs3Count": "T",
        "ooKurs4Count": "V",
        "ooKurs5Count": "X",
        "ooWorkersCount": "Y",
        "ooCEOCount": "Z",
        "ooEducatorsCount": "AA",
        "ooResrvdString3": "AB",
        "ooTeachersCount": "AC",
        "ooTechMasters": "AD",
        "ooEducatorsHelpers": "AE",
        "ooServantsCount": "AF",
        "ooForeignTeachers": "AG",
        "ooArea": "AH",
        "ooResrvdString4": "AI",
        "ooMainBiuldings": "AJ",
        "ooDormitories": "AK",
        "ooOtherBiuldings": "AL",
        "ooLandArea": "AM",
        "ooLaboratoriesVacancy": "AN",
        "ooTechAreaVacancy": "AO",
        "ooResrvdString5": "AP"
    }
};