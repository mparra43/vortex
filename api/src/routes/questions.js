/* rutas de las preguntas */
const {Router} = require('express');
const {check} = require('express-validator');
const router = Router();

router.get('/questions/all');
router.get('/questions/all/categories');
router.post('/add/questions',
    [// middleware de express validator
        check('question', 'El nombre es obligatoria').not().isEmpty(),
        check('uid', 'Este campo es obligatoria').not().isEmpty(),
        check('qualification', 'la ').isLength({max: 2}),
        check('category', 'Este campo es obligatoria').not().isEmpty(),
    ],
    );

module.exports = router;