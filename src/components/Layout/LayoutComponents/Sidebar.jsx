import styles from "../Layout.module.css"
import { NavLink } from "react-router-dom"

import Logo from "../../Logo/Logo"
import { Box, Link as Anchor, Divider } from "@chakra-ui/react"
import {FcAreaChart} from "react-icons/fc";
import {MdOutlineDashboard} from "react-icons/md";
import {TbStars, TbZoomMoney} from "react-icons/tb";
import {BsBarChartLine} from "react-icons/bs";
import {BiGroup, BiWallet} from "react-icons/bi";
import {HiOutlineNewspaper} from "react-icons/hi";

function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <Box className={styles.logoResponsive}><FcAreaChart /></Box>
            <Box className={styles.logo} ><Logo size='1.5rem' /></Box>
            <nav className={styles.navbar}>
                <ul>
                    <NavLink to={"/overview"} ><li><MdOutlineDashboard /><span>Overview</span></li></NavLink>
                    <NavLink to={"/stocks"}><li><TbZoomMoney /><span>Stocks</span></li></NavLink>
                    <NavLink to={"/ai"}><li><TbStars /><span>AI</span></li></NavLink>
                    <NavLink to={"/investments"}><li><BsBarChartLine /><span>Investments</span></li></NavLink>
                    <NavLink to={"/community"}><li><BiGroup /><span>Forum</span></li></NavLink>
                    <NavLink to={"/wallet"}><li><BiWallet /><span>Wallet</span></li></NavLink>
                    <NavLink to={"/news"}><li><HiOutlineNewspaper /><span>News</span></li></NavLink>
                    <NavLink to={"/learning"}><li><HiOutlineNewspaper /><span>Learning</span></li></NavLink>
                </ul>
                <ul>
                    <Divider />
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar