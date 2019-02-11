import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import _ from 'lodash';
import Showdown from 'showdown';
import ReactMarkdown from 'react-markdown';

const PRESENTATIONS_FROM_LAST_WEEK = gql`
  query PRESENTATIONS_FROM_LAST_WEEK($oneWeekAgo: DateTime) {
    presentations(
      where: {
        AND: [{ myCreatedAt_gt: $oneWeekAgo }, { presentationType_not: Pearl }]
      }
    ) {
      id
      whatWasLearned
      createdBy {
        id
        name
      }
      likes {
        id
      }
      createdAt
      myCreatedAt
      tags
      taggedUser {
        id
      }
      hpi
      physicalExam
      summAssessment
      ddx
      presentationType
      isPinned
    }
  }
`;

Showdown.extension('escapemd', function() {
  return [
    {
      type: 'lang',
      regex: /(?:__|[*#])|\[(.*?)\]\(.*?\)/gm,
      replace: '$1'
    }
  ];
});

export default class WeeklyEmailCreator extends Component {
  render() {
    const today = new Date();
    var oneWeekAgo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );

    var converter = new Showdown.Converter({
      extensions: ['escapemd']
    });

    return (
      <Query query={PRESENTATIONS_FROM_LAST_WEEK} variables={{ oneWeekAgo }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;

          if (!data.presentations)
            return <p>No Pesentations Found for {this.props.id}</p>;

          const { presentations } = data;
          console.log(presentations);

          const residentPresentations = _.filter(presentations, function(o) {
            return o.presentationType === 'Case';
          });

          const specialistPresentations = _.filter(presentations, function(o) {
            return o.presentationType === 'Specialist';
          });

          const primaryCarePresentations = _.filter(presentations, function(o) {
            return o.presentationType === 'PrimaryCare';
          });

          const morningPresentations = _.filter(presentations, function(o) {
            return o.presentationType === 'Morning';
          });

          if (presentations.length > 0) {
            return (
              <div>
                {`<h1>VMIMR: This Week</h1>
                <h2>
                  <a href="https://www.vmimr.com/presentationType?id=Case">
                    Resident Cases
                  </a>
                </h2>`}
                {residentPresentations.map(presentation => {
                  return (
                    <div>
                      {` <p>
                        <b>
                        <a
                          href=https://www.vmimr.com/card?id=${presentation.id}
                        >`}
                      {converter.makeHtml(
                        presentation.whatWasLearned.split(/\r?\n/)[0]
                      )}
                      {`</a>
                      </b>
                      </p>`}
                      <div>
                        {converter.makeHtml(presentation.summAssessment)}
                      </div>
                      <div>
                        {`<p><a
                          href=https://www.vmimr.com/card?id=${presentation.id}
                        >
                        <img src="imgURL" alt="TextIfImageCantLoad" border="2">
                        </a></p>`}
                      </div>
                    </div>
                  );
                })}
                {`<h2>
                  <a href="https://www.vmimr.com/presentationType?id=Specialist">
                    Specialists
                  </a>
                </h2>`}
                {specialistPresentations.map(presentation => {
                  return (
                    <div>
                      {`
                      <p>
                        <b>
                          <a
                            href=https://www.vmimr.com/card?id=${
                              presentation.id
                            }
                          >`}
                      {converter.makeHtml(
                        presentation.whatWasLearned.split(/\r?\n/)[0]
                      )}

                      {`</a>
                        </b>
                      </p>`}
                      <div>
                        {`<p><a
                          href=https://www.vmimr.com/card?id=${presentation.id}
                        >
                        <img src="imgURL" alt="TextIfImageCantLoad" border="2">
                        </a></p>`}
                      </div>
                    </div>
                  );
                })}
                {`<h2>
                  <a href="https://www.vmimr.com/presentationType?id=PrimaryCare">
                    Primary Care Didactic
                  </a>
                </h2>`}
                {primaryCarePresentations.map(presentation => {
                  return (
                    <div>
                      {` <p>
                        <b>
                          <a
                            href=https://www.vmimr.com/card?id=${
                              presentation.id
                            }
                          >`}
                      {converter.makeHtml(
                        presentation.whatWasLearned.split(/\r?\n/)[0]
                      )}
                      {` </a>
                        </b>
                      </p>`}
                      <div>
                        {`<p><a
                          href=https://www.vmimr.com/card?id=${presentation.id}
                        >
                        <img src="imgURL" alt="TextIfImageCantLoad" border="2">
                        </a></p>`}
                      </div>
                    </div>
                  );
                })}
                {`<h2>
                <a href="https://www.vmimr.com/presentationType?id=Morning">
                  Morning Report
                </a>
              </h2>`}
                {morningPresentations.map(presentation => {
                  return (
                    <div>
                      {` <p>
                        <b>
                          <a
                            href=https://www.vmimr.com/card?id=${
                              presentation.id
                            }
                          >`}
                      {converter.makeHtml(
                        presentation.whatWasLearned.split(/\r?\n/)[0]
                      )}
                      {`</a>
                        </b>
                      </p>`}
                      <div>
                        {`<p><a
                          href=https://www.vmimr.com/card?id=${presentation.id}
                        >
                        <img src="imgURL" alt="TextIfImageCantLoad" border="2">
                        </a></p>`}
                      </div>
                    </div>
                  );
                })}
                {`<h2>Upcoming Week</h2>`}
              </div>
            );
          }
          return <div />;
        }}
      </Query>
    );
  }
}
