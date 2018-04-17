import getEmpl from '../../services/employeService'
import {GETEMPLOYES} from '../Constants/constants';

export const getEmployes = () => {
    return (dispatch) => {
        return getEmpl().then(data => {
            dispatch(getEmployesSuccess(data))
        })
    }
}

const getEmployesSuccess = (data ) => {
    return {
        type: GETEMPLOYES,
        payload: data
    }
}