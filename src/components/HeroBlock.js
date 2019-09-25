import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify} from '../utils';

export default class HeroBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="hero">
                {(_.get(this.props, 'section.image') || _.get(this.props, 'pageContext.site.data.author.avatar')) && <img src={(_.get(this.props, 'section.image') ? safePrefix(_.get(this.props, 'section.image')) : safePrefix(_.get(this.props, 'pageContext.site.data.author.avatar')))}/>}
                {_.get(this.props, 'section.title') && 
                <div className="copy">
                    <h1>{_.get(this.props, 'section.title')}</h1>
                    {markdownify(_.get(this.props, 'section.subtitle'))}
                </div>
                }
            </section>
        );
    }
}
