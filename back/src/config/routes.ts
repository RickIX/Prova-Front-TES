import { Router } from "express";
import { DespesaController } from "../controllers/despesa.controller";

const router: Router = Router();

router.post("/", new DespesaController().cadastrar);
router.get("/", new DespesaController().listarDespesas);
router.get("/somaEMedia", new DespesaController().calcularMediaESomaDespesas);

export { router };


