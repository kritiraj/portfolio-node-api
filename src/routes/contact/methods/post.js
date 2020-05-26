const service = require('../../../services')
const catchAsync = require('../../../helper/catchAsync');
const post = catchAsync(async (req, res,next) => {
    let data = {
        ...req.body
    };
    await service.contactRequest(data)
    await service.mail(data);
    res.status(200).json({
        'message': 'success'
    })
})
module.exports = post