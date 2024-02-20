import { Button, Card, Col, Image, Row } from "antd";

const FriendTimeline = () => {
  return (
    <Card title="Friends">
      <Row gutter={[16, 16]} style={{ margin: "10px 0" }}>
        <Col>
          <Image
            src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
            alt="image"
            preview={false}
            style={{
              borderRadius: 10,
              height: 130,
              width: 130,
              objectFit: "cover",
            }}
          />
          <h4 style={{ textAlign: "center", marginTop: 5, color: "#666" }}>
            Truong Do
          </h4>
        </Col>
        <Col>
          <Image
            src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
            alt="image"
            preview={false}
            style={{
              borderRadius: 10,
              height: 130,
              width: 130,
              objectFit: "cover",
            }}
          />
          <h4 style={{ textAlign: "center", marginTop: 5, color: "#666" }}>
            Truong Do
          </h4>
        </Col>
        <Col>
          <Image
            src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
            alt="image"
            preview={false}
            style={{
              borderRadius: 10,
              height: 130,
              width: 130,
              objectFit: "cover",
            }}
          />
          <h4 style={{ textAlign: "center", marginTop: 5, color: "#666" }}>
            Truong Do
          </h4>
        </Col>
        <Col>
          <Image
            src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
            alt="image"
            preview={false}
            style={{
              borderRadius: 10,
              height: 130,
              width: 130,
              objectFit: "cover",
            }}
          />
          <h4 style={{ textAlign: "center", marginTop: 5, color: "#666" }}>
            Truong Do
          </h4>
        </Col>
        <Col>
          <Image
            src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
            alt="image"
            preview={false}
            style={{
              borderRadius: 10,
              height: 130,
              width: 130,
              objectFit: "cover",
            }}
          />
          <h4 style={{ textAlign: "center", marginTop: 5, color: "#666" }}>
            Truong Do
          </h4>
        </Col>
        <Col>
          <Image
            src="https://media.bongda.com.vn/files/duc.nguyen/2023/12/29/screenshot-2023-12-29-103817-1201.png"
            alt="image"
            preview={false}
            style={{
              borderRadius: 10,
              height: 130,
              width: 130,
              objectFit: "cover",
            }}
          />
          <h4 style={{ textAlign: "center", marginTop: 5, color: "#666" }}>
            Truong Do
          </h4>
        </Col>
      </Row>

      <Button className="btn">See all</Button>
    </Card>
  );
};

export default FriendTimeline;
