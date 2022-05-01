require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});


console.log(process.env);
console.log(process.env.PORT);
console.log(process.env.MESSAGE);
console.log(process.env.NODE_ENV);
console.log(process.env.ENV_MESSAGE);
