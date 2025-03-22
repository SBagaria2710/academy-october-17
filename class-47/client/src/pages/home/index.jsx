import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { getAllMovies } from "../../apicalls/movies";
import { Col, Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";

function Home() {
  const [movies, setMovies] = useState(null);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getAllMovies();
      console.log(response);
      if (response.success) {
        setMovies(response.data);
      } else {
        setMovies(null);
      }
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
    }
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const redirectToMoviesPage = (movieId) => {
    navigate(`/movie/${movieId}?date=${moment().format("YYYY-MM-DD")}`);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!movies) return <h1>Loading...</h1>;
  return (
    <>
      <Row className="justify-content-center w-100">
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Input
            placeholder="Type here to search for movies"
            onChange={handleSearch}
            prefix={<SearchOutlined />}
          />
          <br />
          <br />
          <br />
        </Col>
      </Row>
      <Row
        style={{ justifyContent: "center" }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        {movies &&
          movies
            .filter((movie) =>
              movie.movieName.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((movie) => {
              return (
                <Col
                  className="gutter-row mb-5"
                  key={movie._id}
                  span={{ xs: 24, sm: 24, md: 12, lg: 10 }}
                >
                  <div
                    className="text-center"
                    role="button"
                    onClick={() => redirectToMoviesPage(movie._id)}
                  >
                    <img
                      src={movie.poster}
                      alt="Movie Poster"
                      width={200}
                      style={{ borderRadius: "8px" }}
                    />
                    <h3 className="cursor-pointer">{movie.movieName}</h3>
                  </div>
                </Col>
              );
            })}
      </Row>
    </>
  );
}

export default Home;
