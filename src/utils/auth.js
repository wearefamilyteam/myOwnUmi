import { history } from 'umi';

export function getAuthHeader() {
   return {
       token: localStorage.getItem('userInfo')
   }
}


export function returnToLogin() {
    history.push('/login')
}