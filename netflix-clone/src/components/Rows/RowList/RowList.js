import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/Requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        // isLargeRow={true}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        // isLargeRow={true}
      />
      <Row
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
        // isLargeRow={true}
      />
      <Row
        title="Action movies"
        fetchUrl={requests.fetchActionMovies}
        // isLargeRow={true}
      />
      <Row
        title="Horror movies"
        fetchUrl={requests.fetchHorrorMovies}
        // isLargeRow={true}
      />
      <Row
        title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
        // isLargeRow={true}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        // isLargeRow={true}
      />
    </>
  );
};

export default RowList;
