const express = require("express");
const { read } = require("fs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 01,
    nome: "bulbassaur",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    tipo: "Planta",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    altura: "0.7 m",
    peso: "6.9 kg",
    habilidade: "Overgrow",
  },

  {
    id: 02,
    nome: "charmander",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "fogo",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    altura: "0.6 m",
    peso: "8.5 kg",
    habilidade: "Blaze",
  },

  {
    id: 03,
    nome: "squirtle",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "agua",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    altura: "0.5 m",
    peso: "9.0 kg",
    habilidade: "Torrent",
  },

  {
    id: 04,
    nome: "Electabuzz",
    descricao:
      "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.",
    tipo: "Electric",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png",
    altura: "0.5 m",
    peso: "9.0 kg",
    habilidade: "Torrent",
  },

  {
    id: 05,
    nome: "Snorlax",
    descricao:
      "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
    tipo: "normal",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    altura: "0.5 m",
    peso: "9.0 kg",
    habilidade: "Torrent",
  },

  {
    id: 06,
    nome: "Gengar",
    descricao:
      "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar’s doing.",
    tipo: "agua",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    altura: "0.5 m",
    peso: "9.0 kg",
    habilidade: "Torrent",
  },
];

//rotas

app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.post("/add", (req, res) => {
  const pokemon = req.body;

  pokedex.push(pokemon);

  res.redirect("/");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
