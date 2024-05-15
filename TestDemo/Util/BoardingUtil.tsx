import AsyncStorage from '@react-native-async-storage/async-storage';
const KYE_BOARDING_PASS = "boarding-pass"
/**
 * 保存登录态
 * @param data 
 */
export function saveBoarding(data: string) { 
    AsyncStorage.setItem(KYE_BOARDING_PASS,data);
}
/**
 * 
 * @returns 读取登录态
 */
export async function getBoarding() { 
    return await AsyncStorage.getItem(KYE_BOARDING_PASS);
}