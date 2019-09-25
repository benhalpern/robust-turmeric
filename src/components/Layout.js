import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                    <meta name="viewport" content="width=device-width, initialScale=1, userScalable=no" />
                    <meta name="google" content="notranslate" />
                </Helmet>
                <div className="wrapper">
                    <Header {...this.props} />
                    <div className="container">
                        {this.props.children}
                    </div>
                    <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
