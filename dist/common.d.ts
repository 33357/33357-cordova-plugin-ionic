import { CallbackFunction, IAppInfo, IPluginBaseAPI } from './IonicCordova';
/**
 * BASE API
 *
 * All features of the Ionic Cordova plugin are registered here, along with some low level error tracking features used
 * by the monitoring service.
 */
declare class IonicCordova implements IPluginBaseAPI {
    deploy: IDeployPluginAPI;
    constructor();
    getAppInfo(success: CallbackFunction<IAppInfo>, failure: CallbackFunction<string>): void;
    getAppDetails(): Promise<IAppInfo>;
}
declare const instance: IonicCordova;
export = instance;
