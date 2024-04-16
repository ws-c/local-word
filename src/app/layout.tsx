import type { Metadata } from 'next'
import './globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher'
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
    <html lang="en" data-theme="">
      <body>
        <AntdRegistry>
          <header
            style={{
              position: 'fixed',
              zIndex: 999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100vw',
              height: '80px',
              backgroundColor: '#001529',
              padding: '0 80px',
            }}
          >
            <div className="logo">本地单词</div>
            <div className="tool-bar">
              <ThemeSwitcher></ThemeSwitcher>
              <div>单词本</div>
              <div>设置</div>
            </div>
          </header>
          <main
            style={{
              paddingTop: '120px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="main-container">{children}</div>
          </main>

          <footer
            style={{
              paddingTop: '40px',
              textAlign: 'center',
              height: '32px',
              lineHeight: '32px',
            }}
          >
            Local-word ©{new Date().getFullYear()} Created by WGenji
          </footer>
        </AntdRegistry>
      </body>
    </html>
  )
}
