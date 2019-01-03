import { storiesOf } from "@storybook/react";
import React from "react";

import ContentCard from "./index";

const props = {
  imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  title: "Hello World",
  subText: "Some extra text",
};

storiesOf("ContentCard", module).add("default", () => (
  <ContentCard {...props} />
));
