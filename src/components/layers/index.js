import HighRiskLayer from './HighRiskLayer';
//import CalcsPerVehicleLayer from './CalcsPerVehicleLayer';
//import TestDatasetViewLayer from './TestDatasetViewLayer';
// [hygen] Import layers

export const getLayers = () => {
  return [
    HighRiskLayer(),
    //CalcsPerVehicleLayer(),
    //TestDatasetViewLayer(),
    // [hygen] Add layer
  ];
};
