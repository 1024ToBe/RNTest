import ConstApi from "./ConstApi";
/**
 * 
 * @param api 
 * @returns 
 */
export function get(api: string) {
    return async (params?: {}) => {
        const { headers, url } = ConstApi;
        return handleData(fetch(builParams(url + api, params), {
            headers: {
                ...headers,
            }
        }));

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
            if ((type||'' ).indexof('json')!==-1) { 
                return res.json();
            }
            return res.text();
        }).then((result) => { 
            console.log('1====',JSON.stringify(result));
            resolve(result);
        }).catch((error) => { 
            console.log('2====',error);
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