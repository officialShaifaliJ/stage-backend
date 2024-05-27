const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());

const stories = [
    {
      name: "Alia",
      id: 1,
      image: [
        "https://i.imgur.com/3irGgvp_d.webp?maxwidth=520&shape=thumb&fidelity=high",
        "https://i.imgur.com/xUDYehk_d.webp?maxwidth=520&shape=thumb&fidelity=high",
        "https://i.imgur.com/jwj7pKv_d.webp?maxwidth=520&shape=thumb&fidelity=high",
      ],
      duration: 5000,
    },
    {
      name:"Tommy",
      id: 2,
      image:
      [
          "https://img.freepik.com/premium-vector/group-funny-tropical-birds-jungle_1196-721.jpg?t=st=1716530642~exp=1716531242~hmac=cde5e4d844b53db45ef23b05d78323c08530b3959891b73eadf87611d57f11b4",
          "https://img.freepik.com/free-vector/flat-design-hello-summer-concept_23-2148532646.jpg?size=626&ext=jpg",
        ],
      duration: 5000,
    },
    {
      name:"Noddy",
      id: 3,
      image:
      [
          "https://img.freepik.com/premium-photo/trees-growing-park-during-autumn_1048944-18587514.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-photo/alley-among-trees-fall_1161-137.jpg?size=626&ext=jpg",
          "https://img.freepik.com/free-vector/autumn-background-with-leaves-sky_23-2147880223.jpg?size=626&ext=jpg",
        ],
      duration: 5000,
    },
  ];

app.get('/api/stories', (req, res) => {
    res.json(stories);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
