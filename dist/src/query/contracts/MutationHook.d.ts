import Model from '../../model/Model';
export declare type MutationHook = (newModel: Model, oldModel: Model | null, entity: string) => void | false;
export default MutationHook;
