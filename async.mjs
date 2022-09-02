function samplePromise(){
    return Promise.resolve("AJENG");
    }

    const nama = await samplePromise();
    console.info(nama);    