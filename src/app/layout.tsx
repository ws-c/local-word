import type { Metadata } from 'next'

import './globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    (
      <html lang="en">
        <body style={{backgroundColor: '#F5F5F5'}}>
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </html>
    )
  )
}
