const express = require("express");
const { addContact, getContact, updateContact } = require("../Controller/Contact.controller");
const { firstMiddleware } = require("../Middleware/auth.middleware");

const contactRouter = express.Router();

contactRouter.post("/add-contact", firstMiddleware, addContact);
contactRouter.get("/get-contact", firstMiddleware, getContact);
contactRouter.patch("/update-contact/:id", firstMiddleware, updateContact);

module.exports = { contactRouter };
