require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const sourceRoutes = require('./routes/source.routes');
const roleRoutes = require('./routes/role.routes');
const userRoutes = require('./routes/user.routes');
const jobRoutes = require('./routes/job.routes');
const docsRoutes = require('./routes/docs.routes');
const {authCourse, authPage} =require("./middlewares/authentification/middleware");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get("/course/grade", authPage(["admin", "fixer"]), (req, res) => {
    res.json({
        job: 'dev',
        country: 'france',
    });
    console.log(User.getAttributes().role.values);
});

// Routes Admin
app.use('/admin/sources', sourceRoutes);
app.use('/admin/users', userRoutes);
app.use('/admin/roles', roleRoutes);

// Routes Api
app.use('/api/jobs', jobRoutes);

// Routes Docs
app.use('/docs', docsRoutes);

app.get('*', function(req, res) {
    res.status(404).json({
        status: 404,
        error: 'Endpoint not found'
    });
});


app.listen(PORT, () => {
    console.log(`Server running on : http://localhost:${PORT}`)
})