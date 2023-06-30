import { Despesa } from "./../models/despesa.model";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class DespesaController {
  async cadastrar(request: Request, response: Response): Promise<Response> {
    let despesa: Despesa = new Despesa();
    despesa.descricao = request.body.descricao;
    despesa.preco = Number.parseInt(request.body.preco);

    const despesaCadatrada = await prisma.despesa.create({
      data: {
        descricao: despesa.descricao,
        preco: despesa.preco,
      },
    });

    return response.status(201).json({ message: "Despesa cadastrada!", dados: despesaCadatrada });
  }

  async listarDespesas(request: Request, response: Response): Promise<Response> {
    try {
      const despesas = await prisma.despesa.findMany();
      return response.status(200).json(despesas);
    } catch (error) {
      return response.status(500).json({ error: "Erro ao listar despesas" });
    } finally {
      await prisma.$disconnect();
    }
  }

  async calcularMediaESomaDespesas(request: Request, response: Response): Promise<Response> {
    const despesas = await prisma.despesa.findMany();


    let soma = 0;
    for (const despesa of despesas) {

      if (despesa.preco != null){
      soma += despesa.preco;
    }else{
      soma = 404
    }
  }
    const media = soma / despesas.length;

    return response.status(200).json({media, soma});
  }
}
