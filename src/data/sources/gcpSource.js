import { MAP_TYPES } from '@deck.gl/carto';

const GCP_SOURCE_ID = 'gcpSource';

const source = {
  id: GCP_SOURCE_ID,
  type: MAP_TYPES.QUERY,
  connection: 'sa_taxi_default',
  data: 'select wkt as geom from sa-taxi-edw.CartoTest.HighRiskAreas_Enriched',
};

export default source;
