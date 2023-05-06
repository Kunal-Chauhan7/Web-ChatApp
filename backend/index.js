const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: username,
                secret: username,
                first_name : username
            },
            {
                headers:{
                    "private-key": "e43efb58-1d84-42e8-a5ee-5a4467e122c7"
                }
            }
        )
        return r.status(r.status).json(r.data)
    } catch (error) {
        return r.status(r.response.status).json(r.response.data)
    }
});

app.listen(3001);