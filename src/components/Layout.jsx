import { Outlet } from "react-router-dom"

export function Layout() {
    return (
        <>
        <Header />

        <main>
            <Outlet />
        </main>

        <Footer />
        </>
    )
}