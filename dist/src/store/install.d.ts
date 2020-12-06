import * as Vuex from 'vuex';
import Database from '../database/Database';
export declare type Install = (database: Database, options?: Options) => Vuex.Plugin<any>;
export interface Options {
    namespace?: string;
}
declare const _default: (database: Database, options?: Options) => Vuex.Plugin<any>;
export default _default;
