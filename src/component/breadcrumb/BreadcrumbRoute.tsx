import * as React from "react";
import { Route, RouteComponentProps, RouteProps } from "react-router-dom";
import { Breadcrumb } from "react-breadcrumbs";

interface BreadcrumbRouteProps extends RouteProps {
  title: string;
  component: React.ComponentType<any>;
  includeSearch?: boolean;
}

const BreadcrumbRoute = (props: BreadcrumbRouteProps) => {
  const { title, component, includeSearch, ...rest } = { ...props };
  const Component = component; // lowercase first character does not pass through JSX validation
  const renderRoute = (routeProps: RouteComponentProps<any>) => (
    <Breadcrumb
      data={{
        title,
        pathname: routeProps.match.url,
        search: includeSearch ? routeProps.location.search : undefined,
      }}
    >
      <Component {...routeProps} />
    </Breadcrumb>
  );
  {
    /** TODO: Solve the render issue, probably gonna be gone when replacing the breadCrumb **/
  }
  return <Route {...rest} render={renderRoute} />;
};

export default BreadcrumbRoute;
