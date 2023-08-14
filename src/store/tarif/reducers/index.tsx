const initialState = {
  allFields: {
    number: null,
    operator: null,
    minutes: null,
    internet: null,
    wifi: null,
    socialSumm: null,
  },
};

const allFieldseducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'UPDATE_FIELDS':
      return { ...state, allFields: { ...state.allFields, [action.item.key]: action.item.value } };
    default:
      return state;
  }
};

export default allFieldseducer;
