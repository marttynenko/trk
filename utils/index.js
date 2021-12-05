module.exports = exports = {
  stripTags (string) {
    return string.replace(/<\/?[^>]+>/ig, " "); 
  }
}