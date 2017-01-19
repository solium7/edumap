import React, {Component} from 'react'
import {Link} from 'react-router'

export default class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className=''>
                Страница не найдена. Вернуться на <Link to='/'>главную</Link>?
            </div>
        )
    }
}
