import IntlData from "./model/IntlData";
import * as React from "react";
import { IntlProvider } from "react-intl";
import { Router, Switch } from "react-router-dom";
import Routing from "./util/Routing";
import Routes from "./util/Routes";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import { connect } from "react-redux";
import TermItState from "./model/TermItState";
import BreadcrumbRoute from "./component/breadcrumb/BreadcrumbRoute";
import Mask from "./component/misc/Mask";
import { CompatRouter, CompatRoute } from "react-router-dom-v5-compat";

const PublicMainView = React.lazy(() => import("./component/public/MainView"));
const MainView = React.lazy(() => import("./component/MainView"));

interface IntlWrapperProps {
  intl: IntlData;
}
//TODO: Last step of migration will require changing the Router and rewriting the CompatRoute to regular Route + Switch -> Routes
const IntlWrapper: React.FC<IntlWrapperProps> = (props) => {
  const { intl } = props;
  return (
    <IntlProvider {...intl}>
      <Router history={Routing.history}>
        <CompatRouter>
          <React.Suspense fallback={<Mask />}>
            <Switch>
              <CompatRoute path={Routes.login.path} component={Login} />
              <CompatRoute path={Routes.register.path} component={Register} />
              <BreadcrumbRoute
                path={Routes.publicDashboard.path}
                title={intl.messages["main.nav.dashboard"]}
                component={PublicMainView}
              />
              <BreadcrumbRoute
                title={intl.messages["main.nav.dashboard"]}
                component={MainView}
              />
            </Switch>
          </React.Suspense>
        </CompatRouter>
      </Router>
    </IntlProvider>
  );
};

export default connect((state: TermItState) => {
  return { intl: state.intl };
})(IntlWrapper);

{
  /*
   IMPORTANT!!!!
   TODO: The last step of the migration will require to change the router to this one
   It is needed because we route using external non-render components, taken from: https://stackoverflow.com/questions/63471931/using-history-with-react-router-dom-v6

 const CustomRouter = ({
                          basename,
                          children,
                          history,
                      }) => {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    });

    React.useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            basename={basename}
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
};
 */
}
