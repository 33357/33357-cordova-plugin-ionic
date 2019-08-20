import { CallbackFunction, CheckForUpdateResponse, ICurrentConfig, IDeployConfig, ISnapshotInfo, ISyncOptions } from './IonicCordova';
export declare class DeployClass implements IDeployPluginAPI {
    configure(config: IDeployConfig): Promise<void>;
    getConfiguration(): Promise<ICurrentConfig>;
    checkForUpdate(): Promise<CheckForUpdateResponse>;
    downloadUpdate(progress?: CallbackFunction<number>): Promise<boolean>;
    extractUpdate(progress?: CallbackFunction<number>): Promise<boolean>;
    reloadApp(): Promise<boolean>;
    sync(options: ISyncOptions, progress?: CallbackFunction<number>): Promise<ISnapshotInfo | undefined>;
    getCurrentVersion(): Promise<ISnapshotInfo | undefined>;
    getAvailableVersions(): Promise<ISnapshotInfo[]>;
    deleteVersionById(versionId: string): Promise<boolean>;
    getVersionById(versionId: string): Promise<ISnapshotInfo | undefined>;
}
export declare const Deploy: DeployClass;
