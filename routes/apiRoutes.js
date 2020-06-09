const router = require('express').Router();

//TODO: add our routes

//TODO: route for saving activity data

router.post('/activities', (req, res) => {
    const (milage, duration, date) = req.body;
    if (!mileage) {
        return res.json({
            success: false,
            message: 'Milegae is required.',
        });
    }

    if (!duration) {
        return res.json({
            success: false,
            message: 'Duration is required.'
        });
    }
    activities.push(req.body);
    res.json({
        activities: activities,
        success: true,
    });
    //TODO: route for getting activity data by duration

    //TODO: route for getting activity data by mileage

    router.post;

    module.exports = router;
