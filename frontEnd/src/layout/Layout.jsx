import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Routers from "../routes/Routers"

function Layout() {
  return (
    <div>
        <Header/>
        <main>
            <Routers/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout