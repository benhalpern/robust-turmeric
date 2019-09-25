import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {getPages, Link, safePrefix} from '../utils';

export default class Postlist extends React.Component {
    render() {
        let display_posts = getPages(this.props.pageContext.pages, '/posts');
        return (
            <section id={_.get(this.props, 'section.section_id')} className="posts">
                {_.map(_.orderBy(display_posts, 'frontmatter.date', 'desc'), (post, post_idx) => (
                <Link key={post_idx} to={safePrefix(_.get(post, 'url'))} className="article-teaser">
                    {_.get(post, 'frontmatter.thumb_img_path') && <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))}
                                                   alt={_.get(post, 'frontmatter.title')}/>}
                    <div className="copy">
                        <h2>{_.get(post, 'frontmatter.title')}</h2>
                        <h3 className="publish-date">Published on {moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</h3>
                        <p className="summary">{_.get(post, 'frontmatter.excerpt')}</p>
                        <div className="text-link">Read more</div>
                    </div>
                </Link>
                ))}
            </section>
        );
    }
}
