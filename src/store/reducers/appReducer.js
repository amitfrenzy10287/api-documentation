import * as actionTypes from  '../actions/actionTypes';

const initialState = {
    loading : false,
    result :[],
    resultDetail:[]
};

export const getData = (state,action) =>{
    return {
        ...state,result: action.data, loading:false
    }
};
export const getDataId = (state,action) =>{
    return {
        ...state,resultDetail: action.data
    }
};
export const loadDoc = (state) =>{
    return {
        ...state, loading:true
    }
};

const reducer =(state = initialState, action)=>{
    switch(action.type){
        case actionTypes.GET_DATA:
            return getData(state,action);
        case actionTypes.LOAD_DOCUMENTATION:
            return loadDoc(state,action);
        case actionTypes.GET_DATA_ID:
            return getDataId(state,action);
        default:
            return state;
    }
}

export default reducer;