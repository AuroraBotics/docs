import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import {
    remarkCustomHeadingId,
    remarkHeadings,
    remarkLinkRewrite,
    remarkMdxDisableExplicitJsx,
    remarkRemoveImports,
    remarkReplaceImports,
    remarkStaticImage,
    remarkStructurize
} from 'nextra/mdx-plugins'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['md', 'mdx'],

}

const withMDX = createMDX({
    options: {
        remarkPlugins: [
            remarkGfm,
            // remarkCustomHeadingId,
            // remarkHeadings,
            // remarkLinkRewrite,
            // remarkMdxDisableExplicitJsx,
            // remarkRemoveImports,
            // remarkReplaceImports,
            // remarkStaticImage,
            // remarkStructurize
        ],
        rehypePlugins: [],
    }
})

export default withMDX(nextConfig)