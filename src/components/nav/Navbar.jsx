import React, { Component } from 'react'
import Css from'./navbar.module.css'
import Logo from '../../assets/svg/Group.svg'
export class Navbar extends Component {
  render() {
    return (
        <>

        <div className={Css['navBar']}>
            <a href=""><img src={Logo} alt="" /></a>
           <div > <a href="">About Me </a>
            <a href="">Skills </a>
            <a href="">Portfolio </a>
            <a href="" className={Css['btn-contact']} >Contact Me</a>
            </div>
        </div>
        </>
    )
  }
}

export default Navbar