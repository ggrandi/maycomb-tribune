import React from 'react'
import Link, { LinkProps } from 'next/link'

const assetPrefix = process.env.ASSET_PREFIX

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const StaticLink: React.FC<LinkProps> = ({ href, ...rest }) => (
  <Link href={href} as={`${assetPrefix}${href}${isProd ? '.html' : ''}`} {...rest} />
)

export default StaticLink;