import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { Fugaz_One } from 'next/font/google'

const fugazOne = Fugaz_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

const config: DocsThemeConfig = {
  logo: <span className={fugazOne.className}>AuroraBotics</span>,
  docsRepositoryBase: 'https://github.com/aurorabotics/docs/tree/main',
  primaryHue: 282,
  primarySaturation: 61,
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - AuroraBotics'
      }
    }
  },
  head: function useHead() {
    const { title, frontMatter } = useConfig();
    const { asPath } = useRouter();
    return (
      <>
        <script src="http://localhost:8097" />
        <link rel="icon" href="/favicon-32x32.png" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:url" content={"https://aurorabotics.com" + asPath} />
        <meta property="twitter:image" content="/AuroraBotics Logo - Square.png" />
        <meta property="og:image" content="/AuroraBotics Logo - Square.png" />
        <meta property="og:description" content={frontMatter.description || "AuroraBotics Documentation"} />
        <meta property="theme-color" content="#D063FF" />
      </>
    );
  },
  project: {
    link: 'https://github.com/aurorabotics/',
  },
  chat: {
    link: 'https://discord.gg/mtx6cuhVMt',
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    autoCollapse: true
  },
  footer: {
    text: <span>
      GNU General Public License v3.0 {new Date().getFullYear()} ©{' '}
      <a href="https://aurorabotics.com" target="_blank">AuroraBotics</a>
      .
    </span>
  },
}

export default config


