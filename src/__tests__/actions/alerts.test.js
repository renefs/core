import Alerts from '../../actions/alerts';

describe('Alerts', () => {
  it('Alerts action returns alerts', () => {
    Alerts('test', 'mobile', { withAuth: () => null }).getAlerts();
  });
  it('Alerts renders properly with alerts', () => {
    expect(Alerts('test', 'mobile', { withAuth: () => null }).alertSeen(0).type).toBe("@@alerts/GET_ALERTS_REQUEST");
  });
});