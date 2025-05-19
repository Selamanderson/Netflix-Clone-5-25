import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import RowList from "../../components/Rows/RowList/RowList";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}

export default Home;
