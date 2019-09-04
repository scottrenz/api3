const express = require('express');

const router = express.Router();
router.use(express.json());

function uppercaser () {
    
}

router.get('/', (req, res) => {
    res.send('get to /suppliers ' + id)
}
)
router.get('/:name', (req, res) => {
    const { id } = req.params;
    res.send(`get to /suppliers/${req.params.name}`);
})

module.exports = router;
