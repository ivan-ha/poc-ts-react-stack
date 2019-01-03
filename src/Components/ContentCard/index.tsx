import { Card } from "antd";
import React from "react";

type ContentCardProps = {
  imgSrc: string;
  title: string;
  subText: string;
};

const ContentCard = (props: ContentCardProps) => (
  <Card cover={<img src={props.imgSrc} />} style={{ width: 240 }}>
    <Card.Meta title={props.title} description={props.subText} />
  </Card>
);

export default ContentCard;
