exports.createPostValidator =(req, res, next) => {
    req.check('reviewerName', 'Please provide the name of the reviewer').notEmpty();
    req.check('reviewerName', 'Name should be between 4 to 50 characters').isLength({
        min: 4,
        max:50
    })

    req.check('reviewComment', 'Write your Comment. This cannot be empty').notEmpty();
    req.check('reviewComment', 'Length of the Comment should be bw 10 to 2000').isLength({
        min: 10,
        max:2000
    })
    req.check('rating', 'Provide your rating. This cannot be empty').notEmpty();
    req.check('rating', 'Rating should be a numeric value between 1 and 10').isInt({
        min: 1,
        max:10
    })

    const errors = req.validationErrors()

    if(errors) {
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError})
    }
    next()
}