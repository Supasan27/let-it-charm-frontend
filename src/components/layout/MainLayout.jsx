import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({children}) {
    return (
        <div style={styles.container}>
            <Header/>
            <main style={styles.main}>{children}</main>
            <Footer/>
        </div>
    )
}

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    main: {
        flex: 1,
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
    },
};