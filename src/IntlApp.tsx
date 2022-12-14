import IntlData from "./model/IntlData";
import * as React from "react";
import { IntlProvider } from "react-intl";
import {
  BrowserRouter,
  Route,
  Routes as ReactRouterRoutes,
} from "react-router-dom";
//import Routing from "./util/Routing";
import Routes from "./util/Routes";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import { connect } from "react-redux";
import TermItState from "./model/TermItState";
//import BreadcrumbRoute from "./component/breadcrumb/BreadcrumbRoute";
import Mask from "./component/misc/Mask";

//const PublicMainView = React.lazy(() => import("./component/public/MainView"));
//const MainView = React.lazy(() => import("./component/MainView"));

interface IntlWrapperProps {
  intl: IntlData;
}

const IntlWrapper: React.FC<IntlWrapperProps> = (props) => {
  const { intl } = props;
  return (
    <IntlProvider {...intl}>
      {/** TODO: Not sure if the Routes.history should be passed**/}
      {/**TODO: Return the breadCrumbs **/}
      <BrowserRouter>
        <React.Suspense fallback={<Mask />}>
          <ReactRouterRoutes>
            <Route path={Routes.login.path} element={Login} />
            <Route path={Routes.register.path} element={Register} />
            {/*<BreadcrumbRoute*/}
            {/*  path={Routes.publicDashboard.path}*/}
            {/*  title={intl.messages["main.nav.dashboard"]}*/}
            {/*  component={PublicMainView}*/}
            {/*/>*/}
            {/*<BreadcrumbRoute*/}
            {/*  title={intl.messages["main.nav.dashboard"]}*/}
            {/*  component={MainView}*/}
            {/*/>*/}
          </ReactRouterRoutes>
        </React.Suspense>
      </BrowserRouter>
    </IntlProvider>
  );
};

export default connect((state: TermItState) => {
  return { intl: state.intl };
})(IntlWrapper);
