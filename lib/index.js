module.exports = {
  get: require('./api/utils/request'),
  people: require('./api/people'),
  films: require('./api/films'),
  planets: require('./api/planets'),
  species: require('./api/species')
}