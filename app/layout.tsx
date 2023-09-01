import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PHOTO CHEF',
  description: 'Online presence in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#f1f1f7]'>
        {children}
        <div className='flex justify-center p-1'>
          <p className='text-xs'>©Copyright-2023</p>
        </div>
      </body>
    </html>
  )
}