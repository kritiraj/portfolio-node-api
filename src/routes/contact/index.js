const router=require('express').Router();
const {post} = require('./methods')

router.post('/',post);

module.exports=router;
