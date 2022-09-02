function samplePromise(){
return Promise.resolve("AJENG");
}
function run(){
const nama = await samplePromise();
console.info(nama);
}