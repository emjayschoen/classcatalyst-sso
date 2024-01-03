const ACTIONS = {
  SET_GLOBAL_SETTINGS: 'SET_GLOBAL_SETTINGS',
};

export function setGlobalSettings(settings = {}) {
  return {
    type: ACTIONS.SET_GLOBAL_SETTINGS,
    settings,
  };
}

export default ACTIONS;
