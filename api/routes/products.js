const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products',
        ProductName: 'Lego',
        Model: 12325,
        Price: 'Rm35',
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products',
        ProductName: 'Lego',
        Model: 12325,
        Price: 'Rm35',
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'limited') {
        res.status(200).json({
            message: 'You discovered the Limited Edition Lego',
            id: id,
            ProductName: 'Limited Edition Lego',
            Model: 43859,
            Price: 'Rm289',
        })
    }else{
        res.status(200).json({
            message: 'You passed an ID',
            ProductName: 'Lego',
            Model: 12325,
            Price: 'Rm35',
        })
    }
})

module.exports = router;
