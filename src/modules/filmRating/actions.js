import constants from '../../constants/index';

export const saveCardData =  data => ({
      type: constants.SAVE_CARDS,
      payload: data ,
});