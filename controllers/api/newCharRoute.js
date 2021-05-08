const router = require('express').Router();
const withAuth = require('../../utils/auth')
const { NewCharacter } = require('../../models')

router.get('/', withAuth, async (req, res) => {
    try {
        const newChar = await NewCharacter.findAll();
        res.status(200).json(newChar)
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post('/', withAuth, async (req, res) => {
    try {
        const createChar = await NewCharacter.create(req.body);
        res.status(200).json(createChar);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/', withAuth, async (req, res) => {
    try {
        const deleteChar = await NewCharacter.destroy({
            where: {
                id: req.params.id
            }

        })
        res.status(200).json(deleteChar)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
