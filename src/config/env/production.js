export default { 
    DATABASE_URL: process.env.CHATAPP_DATABASE_URL || 'xxxxxxxxxxxxxxx',
    CHATAPP_NODE_ENV: process.env.CHATAPP_NODE_ENV || 'xxxxxxxxxxxxxxx',
    PORT: process.env.CHATAPP_PORT,
    KEY: process.env.SECRET_KEY,
}