const jwt = require('jsonwebtoken');

// Verificar token
let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401)
                .json({
                    ok: false,
                    err: {
                        message: 'TOKEN no válido'
                    }
                });
        }

        req.usuario = decoded.usuario;
        next();
    });
};

// Verificar Token para imágen
let verificaTokenImg = (req, res, next) => {
    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401)
                .json({
                    ok: false,
                    err: {
                        message: 'TOKEN no válido'
                    }
                });
        }

        req.usuario = decoded.usuario;
        next();
    });
}

// Verifica Rol Administrador
let verificaRolAdmin = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })
    }
}

module.exports = {
    verificaToken,
    verificaTokenImg,
    verificaRolAdmin
}