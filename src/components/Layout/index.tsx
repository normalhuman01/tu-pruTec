import { ReactNode } from "react"
import { Header } from "./Header"
import { Nav } from "./Nav"
import { Footer } from "./Footer"
import classes from "./style.module.css"

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.container}>
      <Header />
      <Nav />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  )
}
