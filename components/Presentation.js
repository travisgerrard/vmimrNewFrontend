import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';

import Form from './styles/Form';
import Error from './ErrorMessage';
import Router from 'next/router';
import styled from 'styled-components';
import Mentions from './Mentions';
import { possibleRotationTypes, ALL_USERS_QUERY } from './CreateLearningCard';

const CaseLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  width: 100%;
  margin: 0 auto;
  & > textarea {
    font-size: 2rem;
  }
`;

const SUBJECTIVE = `HPI:
45F p/w ...



PMH/PSH:
MEDS:
SOCIAL: Tobacco/EtOH/Illicits
Fam Hx:`;

const OBJECTIVE = `Vitals:
Tmax: HR: BP: / RR:

Physical Exam
Const:
HEENT:
Neck:
Heart:
Lungs:
Abd:
Extremities:
Neuro:
Skin:
Psych:

---Labs---
CBC: WBC / Hg / Plt
BMP: Na / K / Cl / HCO2 / BUN / Cr / Glu
LFTs: AP / ALT / AST / Tbili

---Imaging---`;

export default class Presentation extends Component {
  state = {
    subjective: SUBJECTIVE,
    objective: OBJECTIVE,
    sumAssess: '',
    ddx: []
  };

  tagsAdded = id => {
    this.setState({ tags: [...this.state.tags, id] }, () =>
      console.log(this.state.tags)
    );
  };

  usersAdded = id => {
    this.setState({ taggedUser: [...this.state.taggedUser, id] }, () =>
      console.log(this.state.taggedUser)
    );
  };

  handleChange = e => {
    const { name, type, value } = e.target;

    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Form>
        <Query query={ALL_USERS_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            const userArray = data.users.map(user => {
              return { id: user.id, display: `@${user.name}` };
            });
            const rotationArray = possibleRotationTypes.map(rotation => {
              return {
                id: rotation.value,
                display: `#${rotation.label}`
              };
            });

            return (
              <fieldset disabled={loading} aria-busy={loading}>
                <Error error={error} />

                <CaseLayout>
                  <div>
                    <label>Subjective/HPI</label>
                    <Mentions
                      name="subjective"
                      users={userArray}
                      rotations={rotationArray}
                      whatWasLearned={this.state.subjective}
                      handleChange={this.handleChange}
                      tagsAdded={this.tagsAdded}
                      usersAdded={this.usersAdded}
                    />
                  </div>
                  <div>
                    <label>Objective/Exam|Labs|Imaging</label>
                    <Mentions
                      name="objective"
                      users={userArray}
                      rotations={rotationArray}
                      whatWasLearned={this.state.objective}
                      handleChange={this.handleChange}
                      tagsAdded={this.tagsAdded}
                      usersAdded={this.usersAdded}
                    />
                  </div>
                  <div>
                    <label>Summary assessment</label>
                    <Mentions
                      name="sumAssess"
                      users={userArray}
                      rotations={rotationArray}
                      whatWasLearned={this.state.sumAssess}
                      handleChange={this.handleChange}
                      tagsAdded={this.tagsAdded}
                      usersAdded={this.usersAdded}
                    />
                    <label>DDx</label>
                  </div>
                </CaseLayout>
              </fieldset>
            );
          }}
        </Query>
      </Form>
    );
  }
}
