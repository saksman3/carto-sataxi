import { useEffect } from 'react';
//import testDatasetSource from 'data/sources/testDatasetSource';
//import { TEST_DATASET_VIEW_LAYER_ID } from 'components/layers/TestDatasetViewLayer';
//import gcpSource from 'data/sources/gcpSource';
import gcpCalcsPerVehicleSource from 'data/sources/gcpCalcsPerVehicleSource';
import { HIGH_RISK_LAYER_ID } from 'components/layers/HighRiskLayer';
import { useDispatch } from 'react-redux';
import { addLayer, removeLayer, addSource, removeSource } from '@carto/react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { Divider } from '@material-ui/core';
import { AggregationTypes } from '@carto/react-core';
import { FormulaWidget, PieWidget } from '@carto/react-widgets';
//import { NumberFormat } from '@formatjs/intl-numberformat'
//import { SubscriptionsRounded } from '@material-ui/icons';
//import { NumberFormat } from '@formatjs/intl-numberformat';
//import { ContactsOutlined } from '@material-ui/icons';
//import { is } from 'immer/dist/internal';
//import { currencyFormatter, numberFormatter } from 'utils/formatter';

const customFormatter = (value) => `${value}`.substring(0, `${value}`.indexOf(`.`)) + ` Km`;

const useStyles = makeStyles(() => ({
  highRiskAreas: {},
}));

export default function HighRiskAreas() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(addSource(gcpCalcsPerVehicleSource));

    dispatch(
      addLayer({
        id: HIGH_RISK_LAYER_ID,
        source: gcpCalcsPerVehicleSource.id,
      })
    );

    return () => {
      dispatch(removeLayer(HIGH_RISK_LAYER_ID));
      dispatch(removeSource(gcpCalcsPerVehicleSource.id));
    };
  }, [dispatch]);

  // [hygen] Add useEffect

  return (
    <Grid container direction='column' className={classes.highRiskAreas}>
      <Grid item>
        <div>
          <FormulaWidget
            id='numVehicles'
            title='Number of Vehicles'
            dataSource={gcpCalcsPerVehicleSource.id}
            column='vehicleid'
            operation={(AggregationTypes.COUNT)}
            //formatter={numberFormatter}
          />

          <Divider />

          <h6 class="MuiTypography-root MuiTypography-subtitle1 MuiTypography-colorTextPrimary"><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mileage (All vehicles)</h6>

          <FormulaWidget
            id='30DayAverage'
            title='Last 30 Day Average'
            dataSource={gcpCalcsPerVehicleSource.id}
            column='DistanceMTD'
            operation={(AggregationTypes.AVG)}
            formatter={customFormatter}
          />

          <Divider />

          <FormulaWidget
            id='7DayAverage'
            title='Last 7 Day Average'
            dataSource={gcpCalcsPerVehicleSource.id}
            column='Distance7Days'
            operation={(AggregationTypes.AVG)}
            formatter={customFormatter}
          />

          <Divider />

          <FormulaWidget
            id='mileageYesterday'
            title='Yesterday'
            dataSource={gcpCalcsPerVehicleSource.id}
            column='DistanceYesterday'
            operation={(AggregationTypes.SUM)}
            formatter={customFormatter}
          />

          <Divider />

          <FormulaWidget
            id='mileageToday'
            title='Today'
            dataSource={gcpCalcsPerVehicleSource.id}
            column='DistanceToday'
            operation={(AggregationTypes.SUM)}
            formatter={customFormatter}
          />

          <Divider />

          <PieWidget
            id='vehicleManufacturer'
            title='Vehicle Manufacturer'
            dataSource={gcpCalcsPerVehicleSource.id}
            column='Manufacture'
            operationColumn='vehicleid'
            operation={AggregationTypes.COUNT}
          />
        </div>
      </Grid>
    </Grid>
  );
}
