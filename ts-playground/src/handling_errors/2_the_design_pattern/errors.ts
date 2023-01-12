import { ErrorBase } from "./error_base";

type ProjectErrorName =
    | 'GET_PROJECT_ERROR'
    | 'CREATE_PROJECT_ERROR'
    | 'PROJECT_LIMIT_REACHED';

export class ProjectError extends ErrorBase<ProjectErrorName> {}
