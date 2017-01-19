import React, { Component, PropTypes } from 'react'
import scaleImg from '../../static/images/scale.png'
import '../../static/css/main.scss'
import './styles.scss'

export default class Scale extends Component {
  render() {
    const nums = this.props.nums;
    const order = this.props.order;
    if (!order) nums.reverse();
    return (
        <div className='scale'>
            <div><img src={scaleImg} alt=''/></div>
            {nums.map(item => (<div className='scale-label' key={'scale'+item}>{item}</div>))};
        </div>
    )
  }
}

Scale.propTypes = {
    nums: PropTypes.array.isRequired,
    order: PropTypes.bool.isRequired
};