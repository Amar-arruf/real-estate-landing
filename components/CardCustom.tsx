"use client";

import * as React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface propsType {
  backgroundColor: string;
  Icon: any;
  text: string;
  Color: string;
}

const CardCustom: React.ElementType = (props: propsType) => {
  const Icon = props.Icon;

  return (
    <Card
      className={`mt-6 lg:max-w-[137px] p-5 ${props.Color} text-center ${props.backgroundColor}`}
    >
      {<Icon className="text-5xl mx-auto my-auto" />}
      <CardBody className="!p-0 !py-2">
        <Typography className="text-[14px]">{props.text}</Typography>
      </CardBody>
    </Card>
  );
};

export default CardCustom;
