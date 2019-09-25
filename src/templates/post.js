import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {safePrefix, htmlToReact} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <section className="post">
                {_.get(this.props, 'pageContext.frontmatter.content_img_path') && 
                <img className="header-image" src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt=""/>
                }
                <header className="hero">
                    <div className="copy">
                        <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                        {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                        <h3>{htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}</h3>
                        }
                        <h3 className="publish-date">{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%A, %B %e, %Y')}</h3>
                    </div>
                </header>
                <div className="content">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
            </section>
            </Layout>
        );
    }
}
