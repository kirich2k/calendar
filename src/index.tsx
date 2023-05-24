import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/Page";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <Header />
        <Main />
        <Footer />
    </>
);
