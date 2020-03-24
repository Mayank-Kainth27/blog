const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailer');
const blogTemplate = require('../services/emailTemplates/blogTemplate');
const Blog = mongoose.model('blogs');





module.exports = app => {
    /*app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thankss for voting');
    });*/

    app.get('/api/blogs', requireLogin, async (req, res) => {
        const blogs = await Blog.find({ _user: req.user.id });
        res.send(blogs);
    })

    app.get('/api/blogs/:id', requireLogin, async (req, res) => {
        const blog = await Blog.findById({ _id: req.params.id });
        res.send(blog);
    })

    /*app.post('/api/surveys/webhooks', (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');

        /*const events = _.map(req.body, ({ email, url }) => {
            const match = p.test(new URL(url).pathname);
            if (match) {
                return { email, surveyId: match.surveyId, choice: match.choice };
            }
        });
        const compactEvents = _.compact(events);
        const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyId');
        console.log(uniqueEvents);
        res.send({});*/
    
    
    
        /*_.chain(req.body)
            .map(({ email, url }) => {
                const match = p.test(new URL(url).pathname);
                if (match) {
                    return { email, surveyId: match.surveyId, choice: match.choice };
                }
            })
            .compact()
            .uniqBy('email', 'surveyId')
            .each(({ surveyId, email, choice }) => {
                Survey.updateOne({
                    _id: surveyId,
                    recipients: {
                        $elemMatch: { email: email, responded: false }
                    }
                }, {
                    $inc: { [choice]: 1 },
                    $set: { 'recipients.$.responded': true }
                }).exec();
            })
            .value();
        res.send({});

    });*/

    app.delete('/api/blogs/delete/:id', requireLogin, async (req, res) => {

        try {
            await Blog.findOneAndDelete({ _id: req.params.id})
        } catch (err) {
            res.status(422).send(error);
        }
    })

    app.get('/api/blogs/update/:id', requireLogin, async (req, res) => {
        try {
            console.log(req);
            //await Blog.findByIdAndUpdate({ _id: req.params.id })
        } catch (err) {
            res.status(422).send(error);
        }
    })



    app.post('/api/blogs', requireLogin, async (req, res) => {
        
        const { title, Body } = req.body;
        const blog = new Blog({
            title,
            body: Body,
            _user: req.user.id,
            dateCreated: Date.now()
        });
        //console.log(blog);
        // place to send mail as it is after the survey genration
        //const mailer = new Mailer(survey, surveyTemplate(survey)); 

        try {
            await blog.save();
            const user = await req.user.save();

            res.send(user);
        }
        catch (err) {
            res.status(422).send(err);//unprocessable entity
        }
    });
};