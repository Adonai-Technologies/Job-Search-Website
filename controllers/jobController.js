// controllers/jobController.js
const Job = require('../models/jobModel');

const jobController = {
    getAllJobs: async (req, res) => {
        try {
            const jobs = await Job.find();
            res.render('index', { jobs });
        } catch (err) {
            console.log(err);
            res.status(500).send('Server Error');
        }
    },
    // Other methods like job details, applying for a job, etc.
};

module.exports = jobController;
