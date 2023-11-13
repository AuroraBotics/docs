import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import styled from 'styled-components';

const GradientTextWrapper = styled.span`
  background: linear-gradient(315deg, #8e44ad, #3498db, #1abc9c);
  -webkit-background-clip: text;
  color: transparent;
  display: inline;
  font-weight: bold;
`;

const config: DocsThemeConfig = {
  logo: <GradientTextWrapper>AuroraBotics</GradientTextWrapper>,
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
        <meta content={ title ? title + " - AuroraBotics" : "AuroraBotics"} property="og:title" />
        <meta content="AuroraBotics Documentation." property="og:description" />
        <meta content={"https://docs.aurorabotics.com" + asPath} property="og:url" />
        <meta content="/logo.png" property="og:image" />
        <meta content="#8e44ad" data-react-helmet="true" name="theme-color" />
      </>
    );
  },
  banner: {
    dismissible: false,
    text: '⚠️ This website is currently under construction. ⚠️'
  },
  project: {
    link: 'https://github.com/aurorabotics/docs',
  },
  chat: {
    link: 'https://discord.gg/mtx6cuhVMt',
  },
  sidebar: {
    toggleButton: true
  },
  navigation: false,
  footer: {
    text: <span>
      GNU General Public License v3.0 {new Date().getFullYear()} ©{' '}
      <a href="https://aurorabotics.com" target="_blank">
        <GradientTextWrapper>AuroraBotics</GradientTextWrapper>
      </a>
      .
    </span>
  },
}

export default config


