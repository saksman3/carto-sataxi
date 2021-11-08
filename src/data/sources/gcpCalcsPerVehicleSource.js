import { MAP_TYPES } from '@deck.gl/carto';

const GCP_CALCS_PER_VEHICLE_SOURCE_ID = 'gcpCalcsPerVehicleSource';

const source = {
  id: GCP_CALCS_PER_VEHICLE_SOURCE_ID,
  type: MAP_TYPES.QUERY,
  connection: 'sa_taxi_default',
  data: 'select * from sa-taxi-edw.CartoTest.Odometer_Calculations_Per_Vehicle',
};

export default source;
