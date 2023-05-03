import baseURL from "../baseURL";

export default async function getDatas() {
    try {
        const response = await baseURL.get('/')
        const {data} = response
        console.log(data)

        return {
            status: 200,
            datas: data
        }
    } catch (error) {
        return {
            status: 400,
            datas: error.message
        }
    }
}