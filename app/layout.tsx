"use client"
import { Provider } from 'react-redux';
import '../styles/globals.css';
import { store } from '@/lib/redux-store';
import { ToastContainer } from "react-toastify"

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-sans">
                <Provider store={ store }>
                    {children}
                    <ToastContainer 
                        // theme='dark'
                        position='top-center'
                        autoClose={5000}
                    />
                </Provider>
            </body>
        </html>
    );
}
