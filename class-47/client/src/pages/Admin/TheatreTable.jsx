import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { getAllTheatres, updateTheatre } from "../../apicalls/theatre";

function TheatreTable() {
  const [theatres, setTheatres] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    dispatch(showLoading());
    const response = await getAllTheatres();
    const allTheatres = response.data;
    setTheatres(
      allTheatres.map(function (item) {
        return { ...item, key: `theatre_${item._id}` };
      })
    );
    dispatch(hideLoading());
  };

  const handleStatusChange = async (theatre) => {
    try {
      dispatch(showLoading());
      let values = {
        ...theatres,
        isActive: !theatre.isActive,
      };
      const response = await updateTheatre(theatre._id, values);
      if (response.success) {
        console.log(response);
        getData();
      }
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Owner",
      dataIndex: "owner",
      render: (_, data) => {
        return data.owner && data.owner.name;
      },
    },
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
      render: (_, data) => {
        return (
          <Button onClick={() => handleStatusChange(data)}>
            {data.isActive ? "Block" : "Approve"}
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Table dataSource={theatres} columns={columns} />
    </div>
  );
}

export default TheatreTable;
