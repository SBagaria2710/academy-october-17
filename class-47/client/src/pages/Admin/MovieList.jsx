import React from "react";
import { Table } from "antd";

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
  return (
    <div>
      <Table dataSource={movies} columns={tableHeadings} />
    </div>
  );
}

export default MovieList;
