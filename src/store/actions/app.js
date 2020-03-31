import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setData = (data)=>{
   return{
       type:actionTypes.GET_DATA,
       data,
   }
};
export const setDataId = (data) =>{
    return {
        type: actionTypes.GET_DATA_ID,
        data
    }
};
export const startDoc = ()=>{
    return {
        type: actionTypes.LOAD_DOCUMENTATION
    }
};
export const getAllData =()=>{
    return dispatch => {
        dispatch(startDoc());
        axios.get('http://localhost:3001/documentation')
            .then((response)=> response)
            .then((resp) => {
                setTimeout(()=>{
                    dispatch(
                        setData(resp.data)
                    )
                }, 1000)
            });
    }
};
export const getDatabyId =(id)=>{
    return dispatch => {
        axios.get(`http://localhost:3001/documentation/${id}`)
            .then((response)=> response)
            .then((resp) => {
                dispatch(
                    setDataId(resp.data)
                )
            });
    }
};