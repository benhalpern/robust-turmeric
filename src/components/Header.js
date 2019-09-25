import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id='header' className='header container'>
                <Link to={safePrefix('/')} className='logo'>{_.get(this.props, 'pageContext.site.data.header.content')}</Link>
                {(_.get(this.props, 'pageContext.menus.main') && _.get(this.props, 'pageContext.site.data.header.has_nav')) && 
                <nav>
                    {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                    <Link key={item_idx} className={'nav-link' + ((_.get(this.props, 'pageContext.url') === _.get(item, 'url')) ? ' active' : '')} to={(_.get(item, 'url').startsWith('#') ? _.get(item, 'url') : safePrefix(_.get(item, 'url')))}>{_.get(item, 'title')}</Link>
                    ))}
                </nav>
                }
            </header>
        );
    }
}
