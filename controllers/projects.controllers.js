import { Projects } from "../models/Project.js";

export const projectsGet = async( req, res ) => {

    const projectsFind = await Projects.findAll();


    res.json( projectsFind )

};

export const projectsPost = async( req, res ) => {

    const { name, priority, description } = req.body;

   const newProject = await Projects.create({
        name,
        desc: description,
        priority

    })



    res.json( newProject.dataValues )

};

