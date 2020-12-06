import Query from '../Query';
export declare type Constraint = (query: Query) => boolean | null | void;
export default Constraint;
