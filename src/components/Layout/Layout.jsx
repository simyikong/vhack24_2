import Header from "./LayoutComponents/Header"
import Sidebar from "./LayoutComponents/Sidebar"
import styles from "./Layout.module.css"
import { Flex } from "@chakra-ui/react"
import React from "react";


function Layout({ children }) {

    return (
        <div className={styles.layout}>
            <Sidebar />
            <div className={styles.container}>
                <Header />
                <main className={styles.content}>
                    {children}
                    <span className={styles.footer}>
                        <Flex alignItems='center' gap='5px'>
                        </Flex>
                    </span>
                </main>
            </div>
        </div>
    )
}

export default Layout