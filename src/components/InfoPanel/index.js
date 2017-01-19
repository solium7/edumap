import React, {Component, PropTypes} from 'react'
import '../../static/css/main.scss';
import './styles.scss';

export default class InfoPanel extends Component {
    render() {
        return (
            <div className='panel infopan'>
                <div className='infosticker'></div>
                <div className='info-block info-title'>
                    {this.props.infoText.title}
                </div>
                <div className='info-block'>
                    {this.props.infoText.text}
                </div>
            </div>
        )
    }
}

InfoPanel.propTypes = {
    infoText: PropTypes.object.isRequired
};