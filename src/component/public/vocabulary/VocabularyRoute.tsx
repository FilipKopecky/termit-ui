import * as React from "react";
import { Routes as ReactRouterRoutes } from "react-router";
import Routes from "../../../util/Routes";
import Route from "../../misc/Route";
import DynamicBreadcrumbRoute from "../../breadcrumb/DynamicBreadcrumbRoute";
import TermDetail from "../term/TermDetail";
import VocabularySummary from "./VocabularySummary";

const VocabularyRoute: React.FC = () => {
  return (
    <ReactRouterRoutes>
      <DynamicBreadcrumbRoute
        asset="selectedTerm"
        path={Routes.publicVocabularyTermSnapshotDetail.path}
        component={TermDetail}
        includeSearch={true}
      />
      <DynamicBreadcrumbRoute
        asset="selectedTerm"
        path={Routes.publicVocabularyTermDetail.path}
        component={TermDetail}
        includeSearch={true}
      />
      <Route
        asset="vocabulary"
        path={Routes.publicVocabularySummary.path}
        includeSearch={true}
        component={VocabularySummary}
      />
    </ReactRouterRoutes>
  );
};

export default VocabularyRoute;
