/* rutas de las respuestas*/
const {Router} = require('express');
const {check}= require('express-validator');

const router = Router();

router.get('/answers/all');
router.get('/top/answers');
router.post('/add/answers',
    [// middleware de express validator
        check('id', 'El nombre es obligatoria').not().isEmpty(),
        check('uid', 'Este campo es obligatoria').not().isEmpty(),
        check('name', 'El nombre es obligatoria').not().isEmpty(),
        check('qualification', 'la ').isLength({max: 2}),
        check('answer', 'Este campo es obligatoria').not().isEmpty(),
    ],
 );

module.exports = router;