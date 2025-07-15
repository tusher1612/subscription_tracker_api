import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from "../config/env.js";



const aj = arcjet({

  key:ARCJET_KEY,
  characteristics: ["ip.src"], 
  rules: [
  
    shield({ mode: "LIVE" }),

    detectBot({
      mode: "LIVE", 
   
     allow: [
    "CATEGORY:SEARCH_ENGINE",
    "POSTMAN",

  ],
    }),

    tokenBucket({
      mode: "LIVE",
      refillRate: 5, 
      interval: 10, 
      capacity: 10, 
    }),
  ],
});


export default aj;