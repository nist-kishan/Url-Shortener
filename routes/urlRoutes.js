import express from 'express';
import { handleUrlShortener,handleShortId } from '../controller/url.controllers.js';

const routes = express.Router();

routes.post('/', handleUrlShortener);
routes.get('/:shortUrl', handleShortId);

export { routes };
