module.exports = exports = {
  port: 3000,
  // APIserver: 'http://bitrixvm.farbatest.com',
  APIserver: 'http://apitrk.farbatest.com',
  domain: 'http://trk.farbatest.com',
  iblocks: {
    ru: {
      news: '2',
      keythemes: '1',
      shows: '22',
      schedule: '20',
      podcasts: '24',
      podcastsInfo: '28',
      banners: '10',
      pages: '25',
      vacancies: '29',
      vacanciesCats: '39',
      press: '41',
      ads: '32',
      videonews: '10'
    },
    by: {
      news: '4',
      keythemes: '3',
      shows: '21',
      schedule: '19',
      podcasts: '23',
      podcastsInfo: '27',
      banners: '15',
      pages: '26',
      vacancies: '30',
      vacanciesCats: '40',
      press: '42',
      ads: '31',
      videonews: '19'
    }
  },

  getIblock(locale,name) {
    return this.iblocks[locale][name]
  },

  checkMoreData(obj, limit = 10) {
    const {currentPage,total} = obj
    if (+currentPage * limit >= total) {
      return false
    } else {
      return true
    }
  },

  dateFormatter(dateString,locale = 'ru') {
    let loc = 'ru-RU'
    if (locale === 'by') {
      loc = 'be-BE'
    }
    const d = new Date(dateString)
    const time = new Intl.DateTimeFormat(loc, {
      hour: '2-digit', minute: '2-digit',
    }).format(d)
    const date = new Intl.DateTimeFormat(loc, {
      day: 'numeric', month: 'long'
    }).format(d)

    return time + ' | ' + date
  }
}