import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { SIGNUP_MUTATION } from './Signup';
import { parse } from 'date-fns';

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
    $myCreatedAt: DateTime
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

      console.log(tags);
      console.log(ddx);

      const physicalExamNew = `${physicalExam} \n--Labs--\nCBC: ${wbc}/${hgb}/${plt}\nBMP: ${Na}/${K}/${Cl}/${HCO2}/${BUN}/${Cr}/${Glu}\nLFTs: ${AP}/${ALT}/${AST}/${Tbili}\n${additionalLabs}\n---Imaging---\n${imaging}`;
      const taggedUser = [];
      var whatWasLearned = `## ${title}\n`;
      var tagsNew = JSON.parse('[' + tags + ']');
      tagsNew = tagsNew[0].map(tag => {
        return tag.charAt(0).toUpperCase() + tag.slice(1);
      });
      if (tagsNew.length) {
        tagsNew.forEach(tag => {
          whatWasLearned = whatWasLearned + ` [#${tag}](/rotations/${tag})`;
        });
      }

      var ddxNew = JSON.parse('[' + ddx + ']');
      whatWasLearned = whatWasLearned + `\n${embedPresentationSting}`;
      const createdBy = _presentor;
      const createdAt = parse(presentationDate, 'MM/dd/yy', new Date());

      console.log('running');

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

      // console.log(
      //   tagsNew,
      //   whatWasLearned,
      //   presentationType.charAt(0).toUpperCase() + presentationType.slice(1)
      // );

      // return title;
    });
  };

  render() {
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
      </>
    );
  }
}
