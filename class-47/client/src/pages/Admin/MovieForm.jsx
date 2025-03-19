import React from "react";
import { Modal, Col, Row, Form, Input, Select, Button, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import moment from "moment";
import { addMovie, updateMovie } from "../../apicalls/movies";
import { hideLoading, showLoading } from "../../redux/loaderSlice";

const MovieForm = ({
  setIsModalOpen,
  selectedMovie,
  setSelectedMovie,
  formType,
  getData,
}) => {
  const dispatch = useDispatch();

  if (selectedMovie) {
    selectedMovie.releaseDate = moment(selectedMovie.releaseDate).format(
      "YYYY-MM-DD"
    );
  }

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      let response = null;
      if (formType === "add") {
        response = await addMovie(values);
      } else {
        response = await updateMovie(selectedMovie._id, values);
      }
      if (response.success) {
        getData();
        message.success(response.message);
        setIsModalOpen(false);
      } else {
        message.error(response.message);
      }
      setSelectedMovie(null);
      dispatch(hideLoading());
    } catch (err) {
      dispatch(hideLoading());
      message.error(err.message);
    }
  };

  const handleCancel = () => {
    console.log("Here");
    setIsModalOpen(false);
    setSelectedMovie(null);
  };
  return (
    <Modal
      centered
      open={true}
      width={800}
      footer={null}
      title={formType === "add" ? "Add Movie" : "Edit Movie"}
      onCancel={handleCancel}
    >
      <Form layout="vertical" initialValues={selectedMovie} onFinish={onFinish}>
        <Row gutter={{ xs: 6, sm: 10, md: 12, lg: 16 }}>
          <Col span={24}>
            <Form.Item label="Movie Name" name="movieName">
              <Input placeholder="Enter the movie name" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Description" name="description">
              <TextArea rows="4" placeholder="Enter the movie description" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Row gutter={{ xs: 6, sm: 10, md: 12, lg: 16 }}>
              <Col span={8}>
                <Form.Item label="Movie Duration (in min)" name="duration">
                  <Input type="number" placeholder="Enter the movie duration" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Select Movie Language" name="language">
                  <Select
                    placeholder="Select Language"
                    options={[
                      { value: "English", label: "English" },
                      { value: "hindi", label: "Hindi" },
                      { value: "German", label: "German" },
                      { value: "Telugu", label: "Telugu" },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Release Date" name="releaseDate">
                  <Input type="date" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={{ xs: 6, sm: 10, md: 12, lg: 16 }}>
              <Col span={8}>
                <Form.Item label="Select Movie Genre" name="genre">
                  <Select
                    placeholder="Select Movie Genre"
                    options={[
                      { value: "Action", label: "Action" },
                      { value: "Drama", label: "Drama" },
                      { value: "Romance", label: "Romance" },
                      { value: "Comedy", label: "Comedy" },
                      { value: "Mystery", label: "Mystery" },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={16}>
                <Form.Item label="Poster URL" name="poster">
                  <Input placeholder="enter the poster URL" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Form.Item
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ fontSize: "1rem", fontWeight: "600" }}
          >
            Submit the Data
          </Button>
          <Button
            className="mt-3"
            style={{
              marginLeft: "4px",
            }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MovieForm;
