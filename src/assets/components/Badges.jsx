import React from "react";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Badges = ({ bgBadge, textBadge }) => {
  return (
    <Stack
      className="d-flex justify-content-center"
      direction="horizontal"
      gap={2}
    >
      <Badge className="p-2 mb-2 w-50" bg={bgBadge}>
        {textBadge}
      </Badge>
    </Stack>
  );
};

export default Badges;
