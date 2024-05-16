import { StackActions } from "@react-navigation/native";
/**
 * 全局导航跳转工具类
 */
export default class NavigationUtil {
    static navigation: any;
/**
 * 跳转到指定页面
 * @param parmas 跳转到页面传递的参数
 * @param page  跳转的页面名
 * @returns 
 */
    static goPage(parmas, page) {
        const navigation = NavigationUtil.navigation || (parmas || {}).navigation;
        if (!navigation) { 
            console.log('NavigationUtil.navigation can not be nil');
            return;
        }
        navigation.navigate(page, {
            ...parmas,
            navigation:undefined
        })
    }

    /**
     * 返回上一页
     * @param navigation 
     */
    static goBack(navigation) {
        navigation.goback();
    }

    /**
     * 重置回到首页
     * @param parmas 
     */
    static resetToHomePage(parmas) {
        const { navigation } = parmas;
        navigation.dispatch(StackActions.replace(('HomePage'), {}));
    }

    /**
     * 回到登录页
     * @param parmas 
     */
    static login(parmas) {
        const { navigation } = parmas;
        // if (!navigation) { 
        //     navigation = NavigationUtil.navigation;
        // }
        navigation.dispatch(StackActions.replace(('LoginPage'), {}));
    }

     /**
     * 回到注册页
     * @param parmas 
     */
    static registration(parmas) {
        const { navigation } = parmas;
        // if (!navigation) { 
        //     navigation = NavigationUtil.navigation;
        // }
        navigation.dispatch(StackActions.replace(('RegistPage'), {}));
    }

}
