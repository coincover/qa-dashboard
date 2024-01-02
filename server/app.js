// eslint-disable-next-line import/order
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './../.env.local') });
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const app = express();

const error404 = require('./errors/404');
const error500 = require('./errors/500');
const e2e = require('./routes/e2e.routes');
const proxy = require('./routes/proxy.routes');
const shared = require('./routes/shared.routes');
const PORT = process.env.PORT || 5001;

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/e2e', e2e);
app.use('/', proxy, shared);

app.use(error404);
app.use(error500);

app.listen(PORT, () => console.log(`Server up at PORT:${PORT}`));
