import Model from '../../model/Model';
export declare type OrderKey<T extends Model = Model> = string | ((record: T) => any);
export default OrderKey;
