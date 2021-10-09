import React from "react";
import DetailMovie from "../../../components/organisms/DetailMovie";
import PagePaper from "../../templates/PagePaper";

const DetailPage = () => {
  return (
    <PagePaper title={"Detail"}>
      <DetailMovie />
    </PagePaper>
  );
};

export default DetailPage;
