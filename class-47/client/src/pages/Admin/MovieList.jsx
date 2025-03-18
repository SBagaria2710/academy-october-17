import React, { useState, useEffect } from "react";
import { Button, Table } from "antd";
import { useDispatch } from "react-redux";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import MovieForm from "./MovieForm";
import { showLoading, hideLoading } from "../../redux/loaderSlice";
import { getAllMovies } from "../../apicalls/movies";

const movies = [
  {
    key: "1",
    poster: "Image1",
    name: "Mastaney",
    description:
      "Set in 1739, Nadar Shah`s undefeated army was attacked by Sikh Rebellions. ",
    duration: 120,
    genre: "Action",
    language: "Hindi",
    releaseDate: "Oct  25, 2023",
  },
  {
    key: "2",
    poster: "Image2",
    name: "Mastaney",
    description:
      "Set in 1739, Nadar Shah`s undefeated army was attacked by Sikh Rebellions. ",
    duration: 120,
    genre: "Action",
    language: "Hindi",
    releaseDate: "Oct  25, 2023",
    action: "Delete",
  },
];

function MovieList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [formType, setFormType] = useState("add");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();

  const tableHeadings = [
    {
      title: "Poster",
      dataIndex: "poster",
    },
    {
      title: "Movie Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
    },
    {
      title: "Actions",
    },
  ];

  const getData = async () => {
    dispatch(showLoading());
    const response = await getAllMovies();
    const allMovies = response.data;
    setMovies(
      allMovies.map(function (item) {
        return { ...item, key: `movie_${item._id}` };
      })
    );
    dispatch(hideLoading());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "end", marginBottom: "8px" }}
      >
        <Button
          onClick={() => {
            setIsModalOpen(true);
            setFormType("add");
          }}
        >
          Add Movie
        </Button>
      </div>
      <Table dataSource={movies} columns={tableHeadings} />
      {isModalOpen && (
        <MovieForm
          setIsModalOpen={setIsModalOpen}
          selectedMovie={selectedMovie}
          formType={formType}
          setSelectedMovie={setSelectedMovie}
          getData={getData}
        />
      )}
    </div>
  );
}

export default MovieList;
