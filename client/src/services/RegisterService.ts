import Ajax from './Ajax';

class RegisterService {
  // eslint-disable-next-line class-methods-use-this
  async RegisterResult(newCustomer: any) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return Ajax.post('/customers', newCustomer);
  }
}

export default new RegisterService();
