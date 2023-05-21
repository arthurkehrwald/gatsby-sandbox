import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = () => {
    return (
        <Layout pageTitle="Blog">
            <p>My posts:</p>
        </Layout>
    )
}

export const Head = () => <Seo title="Blog"/>

export default BlogPage