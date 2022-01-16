module.exports = exports = {
  port: 3000,
  APIserver: 'http://bitrixvm.farbatest.com',
  iblocks: {
    ru: {
      news: '2',
      keythemes: '1',
      shows: '22'
    },
    by: {
      news: '4',
      keythemes: '3',
      shows: '21'
    }
  },
  getIblock(locale,name) {
    return this.iblocks[locale][name]
  }
}