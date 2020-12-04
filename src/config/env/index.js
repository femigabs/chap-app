import path from 'path';
import util from 'util';

import development from './development';
import test from './test';
import production from './production';

const extend = (util)._extend;
const defaults = {
	root: path.normalize(`${__dirname}/..`),
};

const {
    CHATAPP_NODE_ENV: NODE_ENV
} = process.env; 

export default {
	development: extend(development, defaults),
	test: extend(test, defaults),
	production: extend(production, defaults),
}[NODE_ENV || 'development'];