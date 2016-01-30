if(process.env.NODE_ENV==='production') {
  require('./prodServer');
} else {
  require('./devServer');
}
