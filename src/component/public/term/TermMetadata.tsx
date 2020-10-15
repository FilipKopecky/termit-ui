import * as React from "react";
import Term from "../../../model/Term";
import BasicTermMetadata from "../../term/BasicTermMetadata";
import {Card, CardBody, Col, Row} from "reactstrap";
import Vocabulary from "../../../model/Vocabulary";
import Terms from "./Terms";
import {RouteComponentProps, withRouter} from "react-router";

interface TermMetadata extends RouteComponentProps<any> {
    term: Term;
    vocabulary: Vocabulary;
    language: string;
}

const TermMetadata: React.FC<TermMetadata> = props => {
    const {term, vocabulary, language} = props;

    return <>
        <Row>
            <Col xl={9} lg={12}>
                <Row>
                    <Col xs={12}>
                        <Card className="mb-3">
                            <CardBody className="card-body-basic-info">
                                <BasicTermMetadata term={term} withDefinitionSource={true} language={language}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col xl={3} lg={0}>
                <Card>
                    <Terms vocabulary={vocabulary} match={props.match} location={props.location} isDetailView={true}/>
                </Card>
            </Col>
        </Row>
    </>;
}

export default withRouter(TermMetadata);
