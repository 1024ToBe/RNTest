import ConstApi from "../ConstApi";
import { getBoarding } from "../Util/BoardingUtil";
/**
 * 
 * @param api 
 * @returns 
 */
export function get(api: string) {
    return async (params?: {}) => {//函数柯里化
        const boarding = await getBoarding();
        const { headers, url } = ConstApi;
        return handleData(fetch(builParams(url + api, params), {
            headers: {
                ...headers,
                'boarding-pass':boarding || ''
            }
        }));
    }
}

export function post(api:string) { 
    /**
     * 第一个参数作为body参数，第二个参数作为url path或者查询参数
     */
    return (params:{}) => {
        return async (queryParmas?: {} | string) => { 
            const boarding = await getBoarding();
            const { headers, url } = ConstApi;
            var data = params instanceof FormData ? params : JSON.stringify(params);
            return handleData(fetch(builParams(url+api, queryParmas), {
                method: 'POST',
                body: data,
                headers: {
                    'content-type': 'application/json',
                    ...headers,
                    'boarding-pass':boarding || ''
                }
            }));
        }
     }
}

/**
 * 解析网络请求回传数据
 * @param doAction 
 */
function handleData(doAction: Promise<any>) {
    return new Promise((resolve, reject) => { 
        doAction.then((res) => { 
            const type = res.headers.get('Content-Type');
            if ((type || '' ).indexOf('json')!==-1) { 
                return res.json();
            }
            return res.text();
        }).then((result) => { 
            if (typeof result === 'string') {
                throw new Error(result);
            } 
            const { code, msg, data: { list = undefined } = {} } = result;
            if (code === 401) { 
                //TODO:跳转登录页
                return;
            }
            resolve(list || result);
        }).catch((error) => { 
            console.log(error);
            reject(error);
        })
    })
}


/**
 * 构建get参数
 * @param url 
 * @param params 
 * @returns 
 */
function builParams(url: string, params?: {} | string): string {
    let newUrl = new URL(url), finalUrl;
    // debugger
    if (typeof params === 'object') {
        for (const [key, value] of Object.entries(params)) {
            newUrl.searchParams.append(key, value as string);
        }
        finalUrl = newUrl.toString();
    } else if (typeof params === 'string') {
        finalUrl = url.endsWith("/") ? url + params : url + "/" + params;
    } else {
        finalUrl = newUrl.toString();
    }
    console.log('----buildParams---', finalUrl);
    return finalUrl;
}