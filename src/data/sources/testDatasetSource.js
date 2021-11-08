import { MAP_TYPES } from '@deck.gl/carto';

const TEST_DATASET_SOURCE_ID = 'testDatasetSource';

const source = {
  id: TEST_DATASET_SOURCE_ID,
  type: MAP_TYPES.QUERY,
  connection: 'sa_taxi_default',
  data: 'select * from sa-taxi-edw.CartoTest.Odometer_Calculations_Per_Vehicle_no_nulls',
};

export default source;
