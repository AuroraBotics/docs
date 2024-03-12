import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { Fugaz_One } from 'next/font/google'
import styled from 'styled-components';

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
    const { title } = useConfig();
    const { asPath } = useRouter();
    return (
      <>
        <link rel="icon" href="/favicon-32x32.png"/>
        <meta content={ title || asPath !== '/' ? title + " - AuroraBotics" : "AuroraBotics"} property="og:title" />
        <meta content="AuroraBotics Documentation." property="og:description" />
        <meta content={"https://docs.aurorabotics.com" + asPath} property="og:url" />
        <meta content="/AuroraBotics Logo - Square.png" property="og:image" />
        <meta content="#8e44ad" data-react-helmet="true" name="theme-color" />
      </>
    );
  },
  banner: {
    dismissible: false,
    text: '⚠️ This website is currently under construction. ⚠️'
  },
  project: {
    link: 'https://github.com/aurorabotics/',
  },
  chat: {
    link: 'https://discord.gg/mtx6cuhVMt',
  },
  sidebar: {
    toggleButton: true
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


