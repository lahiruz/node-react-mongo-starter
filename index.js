const app = require('./app/routes');
const config =  require('./config');
const { PORT } = config;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));