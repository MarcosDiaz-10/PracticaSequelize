import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";

export const Projects = sequelize.define( 'projects', {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name: {
        type: DataTypes.STRING
    },
    priority: { 
        type: DataTypes.INTEGER
    },
    desc: {
        type: DataTypes.STRING
    },

} );

Projects.hasMany( Task, {
    foreignKey: 'projectid',
    sourceKey: 'id'
})

Task.belongsTo( Projects, {
    foreignKey: 'projectid',
    targetId: 'id'
})

