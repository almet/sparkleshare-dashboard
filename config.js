exports.sessionSecret = 'qsdlkjqsldk45qd8d4@';

exports.folders = [
  { type: 'git', name: 'docs du grappe', path: '/home/storage/reseaugrappe/', pub: false },
];

exports.listen = {
  port: 3000,
  host: null
};

exports.https = {
  enabled: false,
  key: '/path/to/private.key',
  cert: '/path/to/cert.crt'
};

exports.basepath = '';
exports.externalUrl = null;

// 300 sec
exports.linkCodeValidFor = 300;

// none | min | info | debug
exports.logging = 'none';

exports.fanout = {
  enabled: false,
  host: null,
  port: 1986
};

exports.backend = {
  'git': {
    'bin': 'git'
  }
};

exports.fingerprint = 'b1:ed:b6:dd:a4:ee:db:d6:ed:67:fa:18:4b:b8:67:4b';
exports.git_host = 'ssh://storage@reseaugrappe.org:12345'
exports.git_path = '/home/storage/reseaugrappe'
exports.sparkleshare_host = 'sparkleshare://partage.reseaugrappe.org'
