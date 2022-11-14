import express from "express";
import db from "../database/dbConnector.js";
const router = express.Router();

router.post("/createUser", async (req, res) => {
  console.log("reached");
  console.log("req is", req?.body);
  const resp = await db.addUser(req?.body || {});
  res.status(resp).send({ code: resp });
});

//AUTHOR: MIHIR MESIA

router.post("/send_wishlist_data", async (req, res) => {
  const resp = await db.send_wishlist(req?.body || {});
  res.status(resp).send();
});

export default router;
