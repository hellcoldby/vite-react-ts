import request from 'umi-request';

async function request(...args) {
    const count = 3;
    const params = args;
    try {
        const response = await request(...params); // request(args);
        switch (response.code) {
            default:
                return response;
        }
    } catch (err) {
        console.log(err);
    }
}

export default request;
