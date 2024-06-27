const express = require("express");
const router = express.Router();
const { prisma } = require("../db/prisma");
const { Prisma } = require("@prisma/client");
const { auth } = require("../middlewares/auth");
const { z } = require("zod");


const musicSchema = z.object({
  name: z.string().min(1, "O campo não pode estar vazio").max(150, "O nome de uma musica deve ter o limite máximo de 150 caracteres")
});

router.get("/musics", auth, async (req, res) => {
  const musicas = await prisma.musics.findMany();
  res.json(musicas);
});

router.get("/music/:id", auth, async (req, res) => {
  const id = Number(req.params.id);
  const musicas = await prisma.musics.findMany({
    where: { id }
  });
  if (!musicas) return res.status(404).json({ message: `Musica id ${id} não encontrada` });
  res.json(musicas);
});

router.post("/music", auth, async (req, res) => {
  try {
    musicSchema.parse(req.body);
    const data = req.body;
    const musica = await prisma.musics.create({
      data: {
        name: data.name,
        artists: data.artists
      }
    });
    res.status(201).json(musica);
  } catch (e) {
    res.status(400).json({ errors: e.errors });
  }
});

router.put("/music/:id", auth, async (req, res) => {
  try {
        musicSchema.parse(req.body);
        const id = Number(req.params.id);
        const musica = await prisma.musics.update({
            data: {
                name: req.body.name,
                artists: req.body.artists,
                userId: req.body.userId
            },
            where: { id }
      
    });
    res.json(musica);
    } catch (e) {
    res.status(400).json({ errors: e.errors });
  }
  
});

router.delete("/music/:id", auth, async (req, res) => {
  const id = Number(req.params.id);
  await prisma.musics.delete({
    where: { id }
  });
  res.status(204).send();
});

module.exports = { router };
