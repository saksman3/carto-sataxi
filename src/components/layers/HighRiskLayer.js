import { useSelector } from 'react-redux';
import { CartoLayer } from '@deck.gl/carto';
import { selectSourceById } from '@carto/react-redux';
import { useCartoLayerProps } from '@carto/react-api';
import htmlForFeature from 'utils/htmlForFeature';

export const HIGH_RISK_LAYER_ID = 'highRiskLayer';

export default function HighRiskLayer() {
  const { highRiskLayer } = useSelector((state) => state.carto.layers);
  const source = useSelector((state) => selectSourceById(state, highRiskLayer?.source));
  const cartoLayerProps = useCartoLayerProps({ source });

  if (highRiskLayer && source) {
    return new CartoLayer({
      ...cartoLayerProps,
      id: HIGH_RISK_LAYER_ID,
      getFillColor: [241, 109, 122],
      pointRadiusMinPixels: 2,
      pickable: true,
      onHover: (info) => {
        if (info?.object) {
          info.object = {
            html: htmlForFeature({ feature: info.object }),
            style: {},
          };
        }
      },
    });
  }
}
