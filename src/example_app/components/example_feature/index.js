import { Util } from '@protastudios/prota-core-react';
import ViewA from './example_feature_view_a';
import ViewB from './example_feature_view_b';

const { featureFlag } = Util;

const ExampleFeature = featureFlag('featureA', { enabled: ViewA, alt: ViewB });
export default ExampleFeature;
