# Installing in new project

api.js
```javascript
  // replace all CHANGEME references
```

reducer.js
```javascript
  // import HubSpotFormReducer * selectors
  import HubSpotFormReducer, { getContactFormStatus } from './hub_spot_form/reducer';
  // add reducer to root reducer
  const Reducer = combineImmutableReducers({
    // other reducers
    hubSpotForm: HubSpotFormReducer,
  });
  // Add HubSpot Selectors
  export const getHubSpotContactFormStatus = state => getContactFormStatus(state.get('hubSpotForm'));
```

your_view.js
```javascript
  // import form component
  import ContactForm from '../hub_spot_form/components/contact_form';
  // render
  render(){
    return (
      <div>
        {/* Other View Content */}
        <ContactForm />
      </div>
    );
  }
```