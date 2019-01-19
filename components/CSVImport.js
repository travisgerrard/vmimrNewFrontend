import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { parse } from 'date-fns';
import { SIGNUP_MUTATION } from './Signup';
import { ALL_USERS_QUERY } from './CreateLearningCard';

const DELETE_ALL_PRESENTATIONS = gql`
  mutation DELETE_ALL_PRESENTATIONS($presentationType: PresentationTypes!) {
    deleteAllPresentations(presentationType: $presentationType) {
      id
    }
  }
`;

const BATCH_CREATE_PRESENTATION_MUTATION = gql`
  mutation BATCH_CREATE_PRESENTATION_MUTATION(
    $presentationType: PresentationTypes!
    $hpi: String!
    $physicalExam: String!
    $summAssessment: String!
    $ddx: [String]!
    $tags: [RotationTags]!
    $whatWasLearned: String!
    $taggedUser: [ID]!
    $createdBy: String!
    $myCreatedAt: DateTime!
  ) {
    batchLoadPresentation(
      presentationType: $presentationType
      hpi: $hpi
      physicalExam: $physicalExam
      summAssessment: $summAssessment
      ddx: $ddx
      tags: $tags
      whatWasLearned: $whatWasLearned
      taggedUser: $taggedUser
      createdBy: $createdBy
      myCreatedAt: $myCreatedAt
    ) {
      id
    }
  }
`;

const BATCH_CREATE_LEARNING_MUTATION = gql`
  mutation BATCH_CREATE_LEARNING_MUTATION(
    $presentationType: PresentationTypes!
    $tags: [RotationTags]!
    $whatWasLearned: String!
    $taggedUser: [ID]!
    $createdBy: String!
    $myCreatedAt: DateTime!
  ) {
    batchLoadLearning(
      presentationType: $presentationType
      tags: $tags
      whatWasLearned: $whatWasLearned
      taggedUser: $taggedUser
      createdBy: $createdBy
      myCreatedAt: $myCreatedAt
    ) {
      id
    }
  }
`;

export default class CSVImport extends Component {
  handleForce = (data, signup) => {
    console.log(data);

    data.map(newData => {
      return signup({
        variables: {
          email: newData.email,
          name: newData.name,
          username: newData.username,
          password: newData.username
        }
      });
    });
  };

  handlePresntation = (e, batchLoadPresentation) => {
    // console.log(e);
    e.map(newData => {
      const {
        ALT,
        AP,
        AST,
        BUN,
        Cl,
        Cr,
        Glu,
        HCO2,
        K,
        Na,
        Tbili,
        additionalLabs,
        ddx,
        embedPresentationSting,
        hgb,
        hpi,
        imaging,
        physicalExam,
        plt,
        presentationDate,
        presentationType,
        summAssessment,
        tags,
        title,
        wbc,
        _presentor
      } = newData;

      // console.log(tags);
      // console.log(ddx);

      const physicalExamNew = `${physicalExam} \n--Labs--\nCBC: ${wbc}/${hgb}/${plt}\nBMP: ${Na}/${K}/${Cl}/${HCO2}/${BUN}/${Cr}/${Glu}\nLFTs: ${AP}/${ALT}/${AST}/${Tbili}\n${additionalLabs}\n---Imaging---\n${imaging}`;
      const taggedUser = [];
      var whatWasLearned = `## ${title}\n`;
      var tagsNew = JSON.parse('[' + tags + ']');
      tagsNew = tagsNew[0].map(tag => {
        return tag.charAt(0).toUpperCase() + tag.slice(1);
      });
      if (tagsNew.length) {
        tagsNew.forEach(tag => {
          whatWasLearned = whatWasLearned + ` [#${tag}](/rotation?id=${tag})`;
        });
      }

      var ddxNew = JSON.parse('[' + ddx + ']');
      whatWasLearned = whatWasLearned + `\n${embedPresentationSting}`;
      const createdBy = _presentor;
      const createdAt = parse(presentationDate, 'MM/dd/yy', new Date());

      //  console.log(createdAt);

      const objectForReturn = {
        presentationType:
          presentationType.charAt(0).toUpperCase() + presentationType.slice(1),
        hpi,
        physicalExam: physicalExamNew,
        summAssessment,
        ddx: ddxNew[0],
        tags: tagsNew,
        whatWasLearned,
        taggedUser,
        createdBy,
        myCreatedAt: createdAt
      };

      console.log(objectForReturn);

      return batchLoadPresentation({
        variables: {
          presentationType:
            presentationType.charAt(0).toUpperCase() +
            presentationType.slice(1),
          hpi,
          physicalExam: physicalExamNew,
          summAssessment,
          ddx: ddxNew[0],
          tags: tagsNew,
          whatWasLearned,
          taggedUser,
          createdBy,
          myCreatedAt: createdAt
        }
      });
    });
  };

  handlelearning = (e, userArray, batchLoadLearning) => {
    // console.log(userArray);
    e.map(newData => {
      const {
        dateField,
        seenWith,
        tags,
        usersTagged,
        whatWasLearned,
        _condition,
        _creator
      } = newData;

      var whatWasLearnedNew = `## ${_condition}\nLearned with attending ${seenWith} on ${dateField}`;

      var usersTaggedNew = JSON.parse('[' + usersTagged + ']');
      // console.log(usersTaggedNew[0]);

      var usersTaggedText = [];

      if (usersTaggedNew.length) {
        whatWasLearnedNew = whatWasLearnedNew + ` with`;
        usersTaggedText = usersTaggedNew[0].map(taggedUser => {
          //console.log(taggedUser);
          const userData = userArray.find(e => e.display === taggedUser);
          //console.log(userData);
          whatWasLearnedNew =
            whatWasLearnedNew +
            ` [${userData.display}](/user?id=${userData.id})`;
          return userData.id;
        });
      }

      var tagsNew = JSON.parse('[' + tags + ']');
      tagsNew = tagsNew[0].map(tag => {
        return tag.charAt(0).toUpperCase() + tag.slice(1);
      });
      if (tagsNew.length) {
        tagsNew.forEach(tag => {
          whatWasLearnedNew =
            whatWasLearnedNew + ` [#${tag}](/rotation?id=${tag})`;
        });
      }

      whatWasLearnedNew = whatWasLearnedNew + `\n\n${whatWasLearned}`;
      // console.log(whatWasLearnedNew);

      const createdBy = _creator;
      const createdAt = parse(dateField, 'MM/dd/yy', new Date());
      console.log(tagsNew, usersTaggedText, createdBy, createdAt);

      return batchLoadLearning({
        variables: {
          presentationType: 'Pearl',
          tags: tagsNew,
          whatWasLearned: whatWasLearnedNew,
          taggedUser: usersTaggedText,
          createdBy,
          myCreatedAt: createdAt
        }
      });
    });
  };

  render() {
    return (
      <Query query={ALL_USERS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          const userArray = data.users.map(user => {
            return { id: user.id, display: `@${user.name}` };
          });
          return (
            <>
              <Mutation mutation={SIGNUP_MUTATION}>
                {(signup, { loading, error }) => (
                  <CSVReader
                    cssClass="react-csv-input"
                    label="Select CSV with users"
                    onFileLoaded={e => this.handleForce(e, signup)}
                    parserOptions={{ header: true }}
                  />
                )}
              </Mutation>
              <Mutation mutation={BATCH_CREATE_PRESENTATION_MUTATION}>
                {(batchLoadPresentation, { loading, error }) => (
                  <CSVReader
                    cssClass="react-csv-input"
                    label="Select CSV with presentations"
                    onFileLoaded={e =>
                      this.handlePresntation(e, batchLoadPresentation)
                    }
                    parserOptions={{ header: true }}
                  />
                )}
              </Mutation>
              <Mutation mutation={BATCH_CREATE_LEARNING_MUTATION}>
                {(batchLoadLearning, { loading, error }) => (
                  <CSVReader
                    cssClass="react-csv-input"
                    label="Select CSV with learning"
                    onFileLoaded={e =>
                      this.handlelearning(e, userArray, batchLoadLearning)
                    }
                    parserOptions={{ header: true }}
                  />
                )}
              </Mutation>
              <Mutation mutation={DELETE_ALL_PRESENTATIONS}>
                {(deleteAllPresentations, { loading, error }) => (
                  <button
                    onClick={() =>
                      deleteAllPresentations({
                        variables: {
                          presentationType: 'Case'
                        }
                      })
                    }
                  >
                    Delete All
                  </button>
                )}
              </Mutation>
            </>
          );
        }}
      </Query>
    );
  }
}
