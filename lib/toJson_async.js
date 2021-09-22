const delay = async (sec) => {
    await new Promise(resolve => setTimeout(() => resolve(), sec * 1000))
}


module.exports = async (result) => {

    // procesar result
    // procesar llamando a wait ...
    await delay(3);

    const res = { message: 'Esto es un JSON' };

    console.log(">>>", res);

    return res
}