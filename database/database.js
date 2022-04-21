import  Sequelize  from "sequelize"

 export const sequelize = new Sequelize (
    'Proyects DB', 
    'postgres', 
    '123456', 
    {
    host: 'localhost',
    dialect: 'postgres'
    } 
);

