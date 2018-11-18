const config = {
  mongo: {
    uri: process.env.MONGO_URI,
    options: {
      poolSize: 10,
      autoIndex: false,
      keepAlive: true
    }
  },
  app: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0'
  }
}

export default config
