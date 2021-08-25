/* rutas del usuario*/
const {Router} = require('express');
const {check}= require('express-validator');



const router = Router();


router.post(
    '/new',
    [// middleware de express validator
       check('name', 'El nombre es obligatoria').not().isEmpty(),
        check('email', 'El email es obligatoria').isEmail(),
        check('password', 'El password es obligatoria').isLength({min: 8}),

    ],
   );

router.post(
    '/login',
    [// middleware de express validator
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatoria').isLength({min: 8}),

    ],
   ) ;

router.get('/renew');


module.exports = router;