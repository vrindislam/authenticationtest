// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import Ajax from './Ajax';

class LoginService {
  // eslint-disable-next-line class-methods-use-this
  async LoginResult(customerData: any) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return Ajax.post('/customers/login', customerData);
  }

  // eslint-disable-next-line class-methods-use-this
  checkSessionStatus(ok: any, nok: any) {
    if (localStorage.getItem('token')) {
      const decoded = jwt_decode(<string>localStorage.getItem('token'));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (decoded?.exp && decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        localStorage.removeItem('persist:root');
        nok();
      } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete decoded.iat;
        ok(decoded);
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line no-underscore-dangle,class-methods-use-this
  _isUserAuthenticated({ exp, isAuthenticated, isAdmin }, shouldBeAdmin) {
    return isAuthenticated && isAdmin === shouldBeAdmin && localStorage.token && exp && exp > Date.now() / 1000;
  }
}

export default new LoginService();
