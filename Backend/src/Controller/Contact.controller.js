const { Contact } = require("../Model/Contact.model");

const addContact = async (req, res, next) => {
    try {
        let contact = new Contact(req.body);

        await contact.save();

        return res.status(201).send({
            success: true,
            message: "Contact saved successfully",
            contact,
        });
    } catch (error) {
        console.log("Error Form Add Contact Controller");
        next(error);
    }
};

const getContact = async (req, res, next) => {
    try {
        let contact = await Contact.findById({ authId: req.body.authId });

        if (!contact) {
            return res.status(401).send({
                success: false,
                message: "Contact not found",
            });
        }

        return res.status(201).send({
            success: true,
            message: "Contact found successfully",
            contact,
        });
    } catch (error) {
        console.log("Error Form Get Contact Controller");
        next(error);
    }
};

const updateContact = async (req, res, next) => {
    try {
        let { id } = req.params;

        if (!id) {
            return res.status(401).send({
                success: false,
                message: "please provide ID",
            });
        }

        let contact = await Contact.findOne({ _id: id });

        if (req.body.authID !== contact.authId) {
            return res.status(401).send({
                success: false,
                message: "you are not authorized person to do this action ",
            });
        } else {
            let updateContact = await Contact.findByIdAndUpdate(
                { _id: id },
                req.body,
                { new: true }
            );

            return res.status(200).send({
                success: true,
                message: "contact updated successfully",
                updateContact,
            });
        }
    } catch (error) {
        console.log("Error Form update Contact Controller");
        next(error);
    }
};

module.exports = { addContact, getContact,updateContact };
