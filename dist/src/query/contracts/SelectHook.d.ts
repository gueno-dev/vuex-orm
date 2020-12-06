import Collection from '../../data/Collection';
export declare type SelectHook<T extends Collection = Collection> = (models: T, entity: string) => T;
export default SelectHook;
