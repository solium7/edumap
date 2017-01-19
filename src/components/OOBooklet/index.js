import React, {Component, PropTypes} from 'react';
import {OO_PROGRAM_TYPES} from '../../constants';
import Highcharts from 'highcharts';
import $ from 'jquery';
import '../../static/css/main.scss';
import '../../static/css/details.css';
import './styles.scss';

export default class OOBooklet extends Component {
    constructor(props) {
        super(props);
        console.log(typeof Highcharts);
        this.generateRandomChart = this.generateRandomChart.bind(this);
    }

    componentDidMount() {
        $('.big-chart').hide();
        $('#chart-1').mouseenter( () => $('#big-chart-1').show() ).mouseleave( () => $('#big-chart-1').hide() );
        $('#chart-2').mouseenter( () => $('#big-chart-2').show() ).mouseleave( () => $('#big-chart-2').hide() );
        $('#chart-3').mouseenter( () => $('#big-chart-3').show() ).mouseleave( () => $('#big-chart-3').hide() );
        $('#chart-4').mouseenter( () => $('#big-chart-4').show() ).mouseleave( () => $('#big-chart-4').hide() );
        $('#chart-5').mouseenter( () => $('#big-chart-5').show() ).mouseleave( () => $('#big-chart-5').hide() );
        $('#chart-6').mouseenter( () => $('#big-chart-6').show() ).mouseleave( () => $('#big-chart-6').hide() );

        for (let i = 1; i < 7; i++) this.generateRandomChart('Опрос №' + i, 'chart-' + i);
        this.Booklet = (function () {
            var $container = $('#rm-container'),
                $cover = $container.find('div.rm-cover'),
                $middle = $container.find('div.rm-middle'),
                $right = $container.find('div.rm-right'),
                //$open = $cover.find('a.rm-button-open'),
                $close = $("#booklet-close-icon"),
                $details = $container.find('a.rm-viewdetails'),

                init = function () {
                    initEvents();
                },
                initEvents = function () {

                    //$open.on('click', function (event) {
                    //
                    //    openMenu();
                    //    return false;
                    //
                    //});
                    $close.on('click', function (event) {
                        closeMenu();
                        setTimeout(function () {
                            $(".veil").fadeOut(500);
                        }, 500);
                        return false;
                    });

                    $details.on('click', function (event) {

                        $container.removeClass('rm-in').children('div.rm-modal').remove();
                        viewDetails($(this));
                        return false;
                    });

                },
                openMenu = function () {
                    $container.addClass('rm-open');
                },
                closeMenu = function () {
                    $container.removeClass('rm-open rm-nodelay rm-in');
                },
                viewDetails = function (recipe) {

                    var title = recipe.text(),
                        img = recipe.data('thumb'),
                        description = recipe.parent().next().text(),
                        url = recipe.attr('href');

                    var $modal = $('<div class="rm-modal"><div class="rm-thumb" style="background-image: url(' + img + ')"></div><span class="rm-close-modal">x</span></div>');
                    //var $modal = $('<div class="rm-modal"><div class="rm-thumb" style="background-image: url(' + img + ')"></div><h5>' + title + '</h5><p>' + description + '</p><span class="rm-close-modal">x</span></div>');

                    $modal.appendTo($container);

                    var h = $modal.outerHeight(true);
                    $modal.css('margin-top', -h / 2);

                    setTimeout(function () {

                        $container.addClass('rm-in rm-nodelay');

                        $modal.find('span.rm-close-modal').on('click', function () {

                            $container.removeClass('rm-in');

                        });

                    }, 0);

                };
            return {init: init};
        })();
        this.Booklet.init();
        setTimeout(function () {
            $('#rm-container').addClass('rm-open');
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps + prevState);
        // TODO Generate and place charts
    }

    generateRandomChart(chartTitle, containerId) {
        const arrRand = [Number((Math.random() * 100).toFixed(2)), Number((Math.random() * 100).toFixed(2)), Number((Math.random() * 100).toFixed(2)), Number((Math.random() * 100).toFixed(2)), Number((Math.random() * 100).toFixed(2)), Number((Math.random() * 100).toFixed(2)), Number((Math.random() * 100).toFixed(2)), Number((Math.random() * 100).toFixed(2)), Number((Math.random() * 100).toFixed(2)), Number((Math.random() * 100).toFixed(2)), Number((Math.random() * 100).toFixed(2)), Number((Math.random() * 100).toFixed(2))];
        Highcharts.chart(containerId, {
            chart: {
                type: 'bar'
            },
            title: {
                text: chartTitle
            },
            xAxis: {
                categories: ['0 баллов', '1 балл', '2 балла', '3 балла', '4 балла', '5 баллов', '6 баллов', '7 баллов', '8 баллов', '9 баллов', '10 баллов']
            },
            yAxis: {
                title: {
                    text: '%'
                },
                max: 100
            },
            legend: {
                enabled: false
            },
            series: [{
                name: chartTitle,
                data: arrRand
            }]
        });
        Highcharts.chart('big-'+containerId, {
            chart: {
                type: 'bar'
            },
            title: {
                text: chartTitle
            },
            xAxis: {
                categories: ['0 баллов', '1 балл', '2 балла', '3 балла', '4 балла', '5 баллов', '6 баллов', '7 баллов', '8 баллов', '9 баллов', '10 баллов']
            },
            yAxis: {
                title: {
                    text: '%'
                },
                max: 100
            },
            legend: {
                enabled: false
            },
            series: [{
                name: chartTitle,
                data: arrRand
            }]
        });
    }

    render() {
        const unit = this.props.ooUnit;
        const programs = [];
        if (unit.ooTech != '') {
            unit.ooTech.split('#').forEach(item => {
                programs.push([item, OO_PROGRAM_TYPES.ooTech]);
            })
        }
        if (unit.ooScience != '') {
            unit.ooScience.split('#').forEach(item => {
                programs.push([item, OO_PROGRAM_TYPES.ooScience]);
            })
        }
        if (unit.ooSport != '') {
            unit.ooSport.split('#').forEach(item => {
                programs.push([item, OO_PROGRAM_TYPES.ooSport]);
            })
        }
        if (unit.ooArt != '') {
            unit.ooArt.split('#').forEach(item => {
                programs.push([item, OO_PROGRAM_TYPES.ooArt]);
            })
        }
        if (unit.ooTourism != '') {
            unit.ooTourism.split('#').forEach(item => {
                programs.push([item, OO_PROGRAM_TYPES.ooTourism]);
            })
        }
        if (unit.ooPatriot != '') {
            unit.ooPatriot.split('#').forEach(item => {
                programs.push([item, OO_PROGRAM_TYPES.ooPatriot]);
            })
        }
        if (unit.ooSocial != '') {
            unit.ooSocial.split('#').forEach(item => {
                programs.push([item, OO_PROGRAM_TYPES.ooSocial]);
            })
        }
        if (unit.ooCulture != '') {
            unit.ooCulture.split('#').forEach(item => {
                programs.push([item, OO_PROGRAM_TYPES.ooCulture]);
            })
        }
        if (unit.ooOther != '') {
            unit.ooOther.split('#').forEach(item => {
                programs.push([item, OO_PROGRAM_TYPES.ooOther]);
            })
        }

        return (
            <div className='veil' id='booklet_veil'>
                <div id='booklet-closeicon' onClick={this.props.hideBooklet}></div>
                <div id='rm-container' className='rm-container'>
                    <div className='rm-wrapper'>
                        <div className='rm-cover'>
                            <div className='rm-front' id='title-part'>
                                <div className='booklet-content booklet-cover'>
                                    <div className='booklet-cover-img'></div>
                                    <h2>{unit.ooFullName}</h2>
                                    <div className='booklet-cover-address'>
                                        <p>
                                            <strong>Адрес:</strong>
                                            <br/>{unit.ooAddress}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='rm-back'>
                                <div className='booklet-content' id='booklet-left-part'>
                                    <div className='scroller'>
                                        <div className='booklet-info booklet-title'>Наименование организации:</div>
                                        <div className='booklet-info booklet-section'>{unit.ooFullName}</div>
                                        <div className='booklet-info booklet-title'>Руководитель:</div>
                                        <div className='booklet-info booklet-section'>
                                            <a href='#' className='rm-viewdetails'
                                               data-thumb={'../units4/' + unit.ooCode.slice(0, -3) + '/dir' + unit.ooCode.slice(0, -3) + '.jpg'}>
                                                <img className='director-photo'
                                                     src={'../units4/' + unit.ooCode.slice(0, -3) + '/dir' + unit.ooCode.slice(0, -3) + '.jpg'}
                                                     alt=''/></a>
                                            <div className='director-name'>{unit.ooBoss}</div>
                                        </div>
                                        <div className='booklet-info booklet-title'>Адрес:</div>
                                        <div className='booklet-info booklet-section'>{unit.ooAddress}</div>
                                        <div className='booklet-info booklet-title'>Телефон:</div>
                                        <div className='booklet-info booklet-section'>{unit.ooPhone}</div>
                                        <div className='booklet-info booklet-title'>E-Mail:</div>
                                        <div className='booklet-info booklet-section'>{unit.ooEMail}</div>
                                        <div className='booklet-info booklet-title'>Сайт:</div>
                                        <div className='booklet-info booklet-section'>{unit.ooSite}</div>
                                        <div className='booklet-info booklet-title'>История организации:</div>
                                        <div className='booklet-info'>
                                            <table className='booklet-table'>
                                                <tr>
                                                    <th>
                                                        Год основания
                                                    </th>
                                                    <th>
                                                        {unit.ooFoundationYear}
                                                    </th>

                                                </tr>
                                            </table>
                                        </div>
                                        {/*<div className='booklet-info booklet-section'>{unit.ooHistory}</div>*/}
                                    </div>
                                </div>
                                <div className='rm-overlay'></div>
                            </div>
                        </div>
                        <div className='rm-middle'>
                            <div className='rm-inner'>
                                <div id='booklet-middle-part'>
                                    <div className='scroller'>
                                        <div className='booklet-info booklet-title'>Фото организации:</div>
                                        <div className='unit-photos-section booklet-info booklet-section'>
                                            <a href='#' className='rm-viewdetails'
                                               data-thumb={'../units4/' + unit.ooCode.slice(0, -3) + '/01_' + unit.ooCode.slice(0, -3) + '.jpg'}>
                                                <img
                                                    src={'../units4/' + unit.ooCode.slice(0, -3) + '/01_' + unit.ooCode.slice(0, -3) + '.jpg'}
                                                    alt=''/></a>
                                            <a href='#' className='rm-viewdetails'
                                               data-thumb={'../units4/' + unit.ooCode.slice(0, -3) + '/02_' + unit.ooCode.slice(0, -3) + '.jpg'}>
                                                <img
                                                    src={'../units4/' + unit.ooCode.slice(0, -3) + '/02_' + unit.ooCode.slice(0, -3) + '.jpg'}
                                                    alt=''/></a>
                                        </div>
                                        <div className='booklet-info booklet-title'>Дополнительное образование</div>
                                        <div className='booklet-info'>
                                            <table className='booklet-table'>
                                                <tr>
                                                    <th>
                                                        Название дополнительной общеразвивающей программы
                                                    </th>
                                                    <th>
                                                        Направленность
                                                    </th>
                                                </tr>
                                                {programs.map(item => (
                                                    <tr key={'key-' + item[0] + item[1]}>
                                                        <td>
                                                            {item[0]}
                                                        </td>
                                                        <td>
                                                            {item[1]}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </table>
                                        </div>
                                        <div className='booklet-info booklet-title'>Модифицированные дополнительные общеобразовательные программы</div>
                                        <div className='booklet-info'><br/><br/><br/><br/><br/></div>
                                    </div>
                                </div>
                                <div className='rm-overlay'></div>
                            </div>
                        </div>
                        <div className='rm-right'>
                            <div className='rm-front'>
                            </div>
                            <div className='rm-back'>
                                <div className='booklet-content' id='booklet-right-part'>
                                    <div className='scroller'>
                                        <div className=' booklet-info booklet-title'>
                                            Мнения потребителей о качестве оказания образовательных услуг
                                        </div>
                                        <div className='booklet-info booklet-section'>
                                            <div className='charts' id='chart-1'></div>
                                            <div className='charts' id='chart-2'></div>
                                            <div className='charts' id='chart-3'></div>
                                            <div className='charts' id='chart-4'></div>
                                            <div className='charts' id='chart-5'></div>
                                            <div className='charts' id='chart-6'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="big-chart" id="big-chart-1"></div>
                <div className="big-chart" id="big-chart-2"></div>
                <div className="big-chart" id="big-chart-3"></div>
                <div className="big-chart" id="big-chart-4"></div>
                <div className="big-chart" id="big-chart-5"></div>
                <div className="big-chart" id="big-chart-6"></div>
            </div>
        )
    }
}

OOBooklet.propTypes = {
    ooUnit: PropTypes.object.isRequired,
    hideBooklet: PropTypes.func.isRequired
};