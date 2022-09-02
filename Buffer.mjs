import { Console } from "console";

const buffer = Buffer.from("AJENG NIKITA ANGGRAENI","utf8");
console.info(buffer.toString());

buffer.reserve();
console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("RwtvIEt1cm5pYXdhbiBLaGFubmVkeQ==" , "base64");
console.info(bufferBase64.toString("utf8"));