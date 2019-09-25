import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify} from '../utils';

export default class TextImageBlock extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className="content">
                {_.get(this.props, 'section.image') && <img className="inline-image" src={safePrefix(_.get(this.props, 'section.image'))}/>}
                <div className="text-with-image">
                    {markdownify(_.get(this.props, 'section.text'))}
                </div>
            </section>
        );
    }
}
