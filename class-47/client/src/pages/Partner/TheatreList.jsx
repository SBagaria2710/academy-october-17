import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { getAllTheatresByOwner } from "../../apicalls/theatre";
import { Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import TheatreDelete from "./TheatreDelete";
import TheatreModal from "./TheatreForm";

const TheatreList = () => {
  const { user } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowModalOpen, setIsShowModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedTheatre, setSelectedTheatre] = useState(null);
  const [formType, setFormType] = useState("add");
  const [theatres, setTheatres] = useState(null);
  const dispatch = useDispatch();

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Phone Number", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, data) => {
        if (data.isActive) {
          return "Approved";
        } else {
          return "Pending/Blocked";
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, data) => {
        return (
          <div>
            <Button
              onClick={() => {
                setIsModalOpen(true);
                setFormType("edit");
                setSelectedTheatre(data);
              }}
            >
              <EditOutlined />
            </Button>
            <Button
              style={{ marginLeft: "4px" }}
              onClick={() => {
                setIsDeleteModalOpen(true);
                setSelectedTheatre(data);
              }}
            >
              <DeleteOutlined />
            </Button>
            {data.isActive && (
              <Button
                style={{ marginLeft: "4px" }}
                onClick={() => {
                  setIsShowModalOpen(true);
                  setSelectedTheatre(data);
                }}
              >
                Add Shows
              </Button>
            )}
          </div>
        );
      },
    },
  ];

  const getData = async () => {
    dispatch(showLoading());
    const response = await getAllTheatresByOwner(user._id);
    const allTheatres = response.data;
    setTheatres(
      allTheatres.map(function (item) {
        return { ...item, key: `theatre_${item._id}` };
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
          Add Theatre
        </Button>
      </div>
      <Table dataSource={theatres} columns={columns} />
      {isModalOpen && (
        <TheatreModal
          isModalOpen={isModalOpen}
          selectedTheatre={selectedTheatre}
          setIsModalOpen={setIsModalOpen}
          formType={formType}
          setSelectedTheatre={setSelectedTheatre}
          getData={getData}
        />
      )}
      {isDeleteModalOpen && (
        <TheatreDelete
          isDeleteModalOpen={isDeleteModalOpen}
          selectedTheatre={selectedTheatre}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          setSelectedTheatre={setSelectedTheatre}
          getData={getData}
        />
      )}
      {isShowModalOpen && (
        <ShowModal
          isShowModalOpen={isShowModalOpen}
          selectedTheatre={selectedTheatre}
          setIsShowModalOpen={setIsShowModalOpen}
        />
      )}
    </div>
  );
};

export default TheatreList;
