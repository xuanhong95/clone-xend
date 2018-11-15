
import { requestPostJson, requestGetJson, requestPutJson, requestDeleteJson } from './index.js';

export const login = (params) =>{
	let url = 'login';
	return dispatch => {
		requestPostJson(url, params, function(response){
			dispatch({
				type: 'LOGIN',
				data: response.data
			})
		})
	}
}