import { Col, Row } from "antd";
import React from "react";
import { WrapperBox } from "./index";

const TodayPart = () => {
  return (
    <div>
      <WrapperBox>
        <Col span={12}>
          <img
            src="https://camnang.bibomart.com.vn//wp-content/media/2024/05/Anh-dai-dien-cham-soc-tre-so-sinh-mua-he.jpg"
            alt="img"
          ></img>
        </Col>
        <Col span={12}>
          <div className="Content1">
            <Row>
              <Col span={12}>
                <img
                  style={{ width: "202px", marginLeft: "49px" }}
                  src="https://camnang.bibomart.com.vn//wp-content/media/2024/04/Quan-lot-giay-02-ok.jpg"
                  alt="img"
                ></img>
              </Col>

              <Col span={12}>
                <p>
                  Quần lót giấy là gì? 4 tiêu chí mua quần lót giấy chất lượng,
                  an toàn
                </p>
                <p>
                  <strong>Quần lót giấy</strong> đang ngày càng trở nên thông
                  dụng với chị em phụ nữ nhờ nhiều lợi ích trong việc nâng niu,
                  bảo vệ vùng nhạy cảm. Tuy nhiên vẫn có nhiề...
                </p>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <img
                  style={{ width: "202px", marginLeft: "49px" }}
                  src="https://camnang.bibomart.com.vn//wp-content/media/2024/04/Sua-Han-Quoc-1.jpg"
                  alt="img"
                ></img>
              </Col>

              <Col span={12}>
                <p>
                  Sữa Hàn Quốc cho bé loại nào tốt? Mách mẹ địa chỉ mua sữa bột
                  Hàn Quốc uy tín
                </p>
                <p>
                  {" "}
                  <strong>Quần lót giấy</strong> đang ngày càng trở nên thông
                  dụng với chị em phụ nữ nhờ nhiều lợi ích trong việc nâng niu,
                  bảo vệ vùng nhạy cảm. Tuy nhiên vẫn có nhiề...
                </p>
              </Col>
            </Row>
          </div>

          <div className="Content2"></div>
        </Col>
      </WrapperBox>
    </div>
  );
};

export default TodayPart;
