import {helloWorld} from "./helloworld.js";
import {ambilDataUser} from './ambilDataUser.js';
const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
    console.log(ambilDataUser);
};

messages();
