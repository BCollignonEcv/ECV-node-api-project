require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sourceRoutes = require('./routes/source.routes');
const roleRoutes = require('./routes/role.routes');
const userRoutes = require('./routes/user.routes');
const jobRoutes = require('./routes/job.routes');
const docsRoutes = require('./routes/docs.routes');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors())


app.get('/', (req, res) => {
    res.send("Welcome on API")
})

// Routes Admin
app.use('/admin/sources', sourceRoutes);
app.use('/admin/users', userRoutes);
app.use('/admin/roles', roleRoutes);

// Routes Api
app.use('/api/jobs', jobRoutes);

// Routes Docs
app.use('/api/docs', docsRoutes);

app.get('*', function(req, res) {
    res.status(404).json({
        status: 404,
        error: 'Endpoint not found'
    });
});


app.listen(PORT, () => {
    console.log(`Server running on : http://localhost:${PORT}`)
})