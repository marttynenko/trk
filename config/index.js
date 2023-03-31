module.exports = exports = {
  port: 3000,
  // APIserver: 'http://bitrixvm.farbatest.com',
  APIserver: 'http://api.tvrgomel.by',
  domain: 'http://tvrgomel.by',
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
      videonews: '10',
      meta: '44'
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
      videonews: '19',
      meta: '43'
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
      loc = 'be'
      // loc = 'be-BE'
    }
    const d = new Date(dateString)
    d.setTime( d.getTime() + d.getTimezoneOffset()*60*1000 );
    const time = new Intl.DateTimeFormat(loc, {
      hour: '2-digit', minute: '2-digit'
    }).format(d)
    const date = new Intl.DateTimeFormat(loc, {
      day: 'numeric', month: 'long'
    }).format(d)
    return time + ' | ' + date
  },

  ytParser(url, size) {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      // return match[2];
      return `//img.youtube.com/vi/${match[2]}/${size}.jpg`
    }
    return '/images/plugs/main-mews.jpeg'
  }
}