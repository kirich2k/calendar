import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer";
import Header from "./components/header";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <Header />
        <Footer />
    </>
);
