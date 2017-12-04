import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    //console.log('Action called', action);

    switch (action.type) {
        case 'FETCH_WEATHER':
         //return state.concat([action.payload.data]);
         //Dont manipulate state. Just concat which will return a new array with old contents

         return [action.payload.data, ...state];
    }

    return state;
}