import React, { Fragment } from 'react';
import { Breadcrumbs, H5, P } from '../../../AbstractElements';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

const SamplePage = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Sample Card' parent='Pages' title='Sample Card' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader>
                <H5>Sample Card</H5>
                <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
              </CardHeader>
              <CardBody>
                <P>
                  "4564465465465465465t in culpa qui officia deserunt mollit anim id est laborum."
                </P>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SamplePage;
