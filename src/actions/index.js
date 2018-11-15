import apiURL from '../../config/config.json'
import axios from 'axios';


export const baseURL = apiURL.base_url;

export const requestPostJson = (url, params, callback)=>{
	axios({
		method: 'POST',
		baseURL: baseURL,
		url: url,
		data: params,
		headers: {
	        'Content-Type': 'application/json',
	        Authorization: localStorage.getItem('access_token')
	    },
	    validateStatus: function (status) {
	    	return true
		}
	}).then(function(response){
		if(response.status == 401){
			localStorage.removeItem('access_token')
			localStorage.removeItem('refresh_token')
			localStorage.removeItem('info')
			window.location.href = '/#/login'
		}else{
			callback(response)	
		}
	});
}
export const requestPostFormData = (url, params, callback)=>{
	axios({
		method: 'POST',
		baseURL: baseURL,
		url: url,
		data: params,
		headers: {
			'Content-Type': 'multipart/form-data',
			// 'Authorization': cookie.load('token'),
	    }
	}).then(function(response){
		callback(response)
	});
}
export const requestGetJson = (url, callback)=>{
	
	axios({
		method: 'GET',
		baseURL: baseURL,
		url: url,
		headers: {
	        'Content-Type': 'application/json',
	        // 'Authorization': cookie.load('token')

	    },
	    validateStatus: function (status) {
	    	if(status == 500){
	    		return true
	    	}else{
	    		return true;
	    	}
			// return status >= 200 && status < 500;
		}
	}).then(function(response){
		callback(response)
	})
}
export const requestPutJson = (url, params, callback)=>{
	axios({
		method: 'PUT',
		baseURL: baseURL,
		url: url,
		data: params,
		headers: {
	        'Content-Type': 'application/json',
	        // 'Authorization': cookie.load('token'),

	    },
	    validateStatus: function (status) {
	    	if(status == 500){
	    		return true
	    		// deleteToken()
	    	}else{
	    		return true
	    	}
		}

	}).then(function(response){
		callback(response)
	});
}
export const requestDeleteJson = (url, params, callback)=>{
	axios({
		method: 'DELETE',
		baseURL: baseURL,
		url: url,
		data: params,
		headers: {
	        'Content-Type': 'application/json',
	        // 'Authorization': cookie.load('token')
	    },
	    validateStatus: function (status) {
	    	if(status == 500){
	    		return true
	    		// deleteToken()
	    	}else{
	    		return true
	    	}
		}
	}).then(function(response){
		callback(response)
	});
}

export const badRequest = ()=>{
	return{
		type: 'BAD_REQUEST'
	}
}
export const notFound = ()=>{
	return{
		type: 'NOT_FOUND'
	}
}