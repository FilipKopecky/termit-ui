import { Route, Routes as ReactRouterRoutes } from "react-router";
import Routes from "../../util/Routes";
import * as React from "react";
import ChangePassword from "./ChangePassword";
import Profile from "./Profile";
import { HasI18n } from "../hoc/withI18n";
import BreadcrumbRoute from "../breadcrumb/BreadcrumbRoute";
import { useI18n } from "../hook/useI18n";

const ProfileRoute: React.FC<HasI18n> = () => {
  const { i18n } = useI18n();
  return (
    <ReactRouterRoutes>
      {/** TODO: Return the breadcrumb **/}
      {/*<BreadcrumbRoute*/}
      {/*  title={i18n("profile.change-password")}*/}
      {/*  path={Routes.changePassword.path}*/}
      {/*  component={ChangePassword}*/}
      {/*/>*/}
      <Route element={Profile} />
    </ReactRouterRoutes>
  );
};

export default ProfileRoute;
