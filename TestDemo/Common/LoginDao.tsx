
import ConstApi from "../ConstApi";
import { saveBoarding } from "../Util/BoardingUtil";
import { post } from "./HiNet";
export default class LoginDao {
    private static instance: LoginDao;
    private constructor() { }
    public static getInstance(): LoginDao {
        if (!LoginDao.instance) {
            LoginDao.instance = new LoginDao();
        }
        return LoginDao.instance;
    }
    login(userName: string, password: string): Promise<any> {
        return new Promise<void>((resolve, reject) => {
            const {
                login: { api }
            } = ConstApi;
            const formData = new FormData();
            formData.append('userName', userName);
            formData.append('password', password);
            console.log('---传参---',userName,password);
            post(api)(formData)().then((res: any) => {
                const { code, msg, data } = res;
                if (code === 0) {
                    saveBoarding(data);
                    resolve(data || msg);
                } else {
                    reject(res);
                }
            }).catch((e) => {
                reject({ code: -1, msg: '哎呀出错了' });
            })
        })
    }

}