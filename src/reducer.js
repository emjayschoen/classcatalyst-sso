import { reducer as FormReducer } from 'redux-form/immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { Util } from '@protastudios/prota-core-react';
import SessionReducer, * as SessionSelect from './session/reducer';
import ExampleAppReducer, * as ExampleAppSelectors from './example_app/reducer';
import GlobalSettingsReducer, * as GlobalSettingsSelectors from './global_settings/reducer';
import HubSpotFormReducer, { getContactFormStatus } from './hub_spot_form/reducer';

const { combineImmutableReducers } = Util;

const Reducer = (history) =>
  combineImmutableReducers({
    router: connectRouter(history),
    // content: ContentReducer,
    form: FormReducer,
    session: SessionReducer,
    exampleApp: ExampleAppReducer,
    globalSettings: GlobalSettingsReducer,
    hubSpotForm: HubSpotFormReducer,
  });

export default Reducer;

// HubSpot Selectors
export const getHubSpotContactFormStatus = (state) => getContactFormStatus(state.get('hubSpotForm'));

export const getExampleAppFormStatus = (state) => ExampleAppSelectors.getFormStatus(state.get('exampleApp'));
export const getWidgets = (state) => ExampleAppSelectors.getWidgets(state.get('exampleApp'));
export const getGlobalSetting = (state, key, notSetValue = undefined) => GlobalSettingsSelectors.getSetting(state.get('globalSettings'), key, notSetValue);
export const getFlashList = (state) => SessionSelect.getFlashList(state.get('session'));
export const getCurrentUser = (state) => SessionSelect.getCurrentUser(state.get('session'));
export const getTreatment = (state, experiemnt, defaultTreatment) => SessionSelect.getTreatment(state.get('session'), experiemnt, defaultTreatment);
