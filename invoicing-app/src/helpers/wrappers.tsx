import { useParams, useNavigate } from "react-router-dom";

export function withParams(Component: any) {
    return (props: JSX.IntrinsicAttributes) => <Component {...props} params={useParams()} />;
}

export function withNavigate(Component: any) {
    return (props: JSX.IntrinsicAttributes) => <Component {...props} navigate={useNavigate()} />;
}