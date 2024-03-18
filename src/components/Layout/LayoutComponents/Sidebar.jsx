import styles from "../Layout.module.css"
import { NavLink } from "react-router-dom"
import {
    FcAreaChart,
    MdOutlineDashboard,
    BsBarChartLine,
    TbZoomMoney,
    BiWallet,
    HiOutlineNewspaper,
    BsFillPersonFill,
    SiBuymeacoffee,
    BsGithub
} from 'react-icons/all'
import Logo from "../../Logo/Logo"
import { Box, Link as Anchor, Divider } from "@chakra-ui/react"

function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <Box className={styles.logoResponsive}><FcAreaChart /></Box>
            <Box className={styles.logo} ><Logo size='1.5rem' /></Box>
            <nav className={styles.navbar}>
                <ul>
                    <NavLink to={"/overview"} ><li><MdOutlineDashboard /><span>Overview</span></li></NavLink>
                    <NavLink to={"/stocks"}><li><TbZoomMoney /><span>Stocks</span></li></NavLink>
                    <NavLink to={"/investments"}><li><BsBarChartLine /><span>Investments</span></li></NavLink>
                    <NavLink to={"/wallet"}><li><BiWallet /><span>Wallet</span></li></NavLink>
                    <NavLink to={"/news"}><li><HiOutlineNewspaper /><span>News</span></li></NavLink>
                </ul>
                <ul>
                    <Divider />
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar