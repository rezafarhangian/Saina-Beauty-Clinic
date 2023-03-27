import React from 'react'
import NavbarDesktop from "../Components/NavbarDesktop"
import NavbarMobile from "../Components/NavbarMobile"
import Footer from "../Components/Footer"
import ArticleBody from '../Components/ArticleBody'

export default function ArticlesPage() {
    return (
        <div>
            <div className='container'>
                <NavbarDesktop />
                <NavbarMobile />
                <ArticleBody />
            </div>
            <Footer />
        </div>
    )
}
