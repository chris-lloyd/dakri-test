import React from "react";
import RentalTools from "./RentalTools";
import WorkOrderStatus from "./WorkOrderStatus";
import MissingItems from "./MissingItems";
import ToolEquipmentAvailable from "./ToolEquipmentAvailable";
import RestockItems from "./RestockItems";
import ReceptionSummary from "./ReceptionSummary";

const DashBoard = () => {
  return (
    <div className="flex  flex-col w-full p-5 gap-4 bg-white overflow-auto max-h-screen">
      <div className="flex  flex-row w-full">
        <RentalTools />
        <WorkOrderStatus />
      </div>
      <div className="flex  flex-row w-full">
        <MissingItems />
        <ToolEquipmentAvailable />
      </div>
      <div className="flex  flex-row w-full">
        <RestockItems />
        <ReceptionSummary />
      </div>
    </div>
  );
};

export default DashBoard;
