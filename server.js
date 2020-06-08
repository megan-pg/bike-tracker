const express = require('express');
const app = express();

const PORT = 8080;

const apiRoutes = require('./routes/api/Routes');
const htmlRoutes = require('./routes/');

//added some comment
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});