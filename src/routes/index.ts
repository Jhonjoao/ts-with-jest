import { Router } from 'express';

const routes = Router();

routes.use('/', (_,res) => {
    res.json("Test")
});

export default routes;