import express from 'express';

const router = express.Router();


router.get('/users', (req, res)=> {
    res.send('hell0');
});


export default router;