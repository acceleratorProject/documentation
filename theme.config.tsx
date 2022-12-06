import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: <Image src={"/thunder.png"} alt="thunder" width="50" height="50"/>,
  project: {
    link: 'https://github.com/acceleratorProject',
  },
  chat: {
    link: 'https://discord.gg/uyHtQ9cUnq',
  },
  docsRepositoryBase: 'https://github.com/acceleratorProject/documentation',
  footer: {
    text: 'Accelerator Docs',
  },
}

export default config
