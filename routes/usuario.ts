import { Router } from "express";
import { getUsuario, getUsuarios, putUsuario, postUsuario, deleteUsuario } from "../controllers/usuarios";

const router = Router();

router.get('/:id',getUsuario);
router.get('/',getUsuarios);
router.post('/',postUsuario);
router.put('/:id',putUsuario);
router.delete('/:id',deleteUsuario);

export default router;
