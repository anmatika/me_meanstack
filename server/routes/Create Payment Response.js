{
  id: 'PAY-40584686BE185074WKS32SUA',
  create_time: '2015-01-15T11:49:36Z',
  update_time: '2015-01-15T11:49:36Z',
  state: 'created',
  intent: 'sale',
  payer: {
    payment_method: 'paypal',
    payer_info: {
      shipping_address: {}
    }
  },
  transactions: [{
    amount: [Object],
    description: 'This is the payment description.',
    related_resources: []
  }],
  links: [{
    href: 'https://api.sandbox.paypal.com/v1/payments/payment/PAY-40584686BE185074WKS32SUA',
    rel: 'self',
    method: 'GET'
  }, {
    href: 'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-59Y290095R074262L',
    rel: 'approval_url',
    method: 'REDIRECT'
  }, {
    href: 'https://api.sandbox.paypal.com/v1/payments/payment/PAY-40584686BE185074WKS32SUA/execute',
    rel: 'execute',
    method: 'POST'
  }],
  httpStatusCode: 201
}