import Model from '../../model/Model';
export declare type Predicate<M extends Model = Model> = (model: M) => boolean;
export default Predicate;
