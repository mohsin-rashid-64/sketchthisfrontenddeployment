import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import MainBlogs from './MainBlogs'
import YouMayLike from '../SeeBoard/SeeBoard'
import MembershipCards from './MembershipCards'
import './BlogDetail.scss'
import Banner from './Banner/Banner'


function Blog() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <MainBlogs />
      <YouMayLike />
      <MembershipCards />
      <Footer />
    </React.Fragment>
  )
}

export default Blog
