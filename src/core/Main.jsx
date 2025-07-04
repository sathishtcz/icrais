import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header/Header'
import Register from '../shared/components/Registerbanner/Register'
import Footer from './Footer/Footer'

export default function Main() {
    return (
        <>
            <Header />
            <main className={`w-auto mx-auto`}>
                <Outlet />
            </main>
            <Register />
            <Footer />
        </>
    )
}
