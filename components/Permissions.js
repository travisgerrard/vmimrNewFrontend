import React from 'react';
import { Query, Mutation } from 'react-apollo';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import Table from './styles/Table';
import SickButton from './styles/SickButton';
import PropTypes from 'prop-types';
import { visible } from 'ansi-colors';

const possiblePermissions = ['ADMIN', 'USER', 'PERMISSIONUPDATE'];

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation UPDATE_PERMISSIONS_MUTATION(
    $permissions: [Permission]
    $visible: Boolean!
    $userId: ID!
  ) {
    updatePermission(
      permissions: $permissions
      visible: $visible
      userId: $userId
    ) {
      id
      permissions
      name
      email
      visible
    }
  }
`;

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
      visible
    }
  }
`;

const Permissions = props => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;

      return (
        <div>
          <Error error={error} />
          <div>
            <h2>Manage Permissions</h2>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  {possiblePermissions.map(permission => (
                    <th key={permission}>{permission}</th>
                  ))}
                  <th>Visible</th>
                  <th>👇</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map(user => (
                  <UserPermissions user={user} key={user.id} />
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      );
    }}
  </Query>
);

class UserPermissions extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.string,
      permissions: PropTypes.array,
      visible: PropTypes.bool
    }).isRequired
  };

  state = {
    permissions: this.props.user.permissions,
    visible: this.props.user.visible
  };

  handlePermissionChange = e => {
    const checkbox = e.target;
    // copy of current permission
    let updatedPermissions = [...this.state.permissions];
    // figue out if we remove or add permission
    if (checkbox.checked) {
      // add it in
      updatedPermissions.push(checkbox.value);
    } else {
      updatedPermissions = updatedPermissions.filter(
        permission => permission !== checkbox.value
      );
    }
    this.setState({ permissions: updatedPermissions });
  };

  handleVisibleChange = e => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const user = this.props.user;

    return (
      <Mutation
        mutation={UPDATE_PERMISSIONS_MUTATION}
        variables={{
          permissions: this.state.permissions,
          visible: this.state.visible,
          userId: this.props.user.id
        }}
      >
        {(updatePermissions, { loading, error }) => (
          <>
            {error && (
              <tr>
                <td colspan="8">
                  <Error error={error} />
                </td>
              </tr>
            )}

            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {possiblePermissions.map(permission => (
                <td key={permission}>
                  <label htmlFor={`${user.id}-permission-${permission}`}>
                    <input
                      id={`${user.id}-permission-${permission}`}
                      type="checkbox"
                      checked={this.state.permissions.includes(permission)}
                      value={permission}
                      onChange={this.handlePermissionChange}
                    />
                  </label>
                </td>
              ))}
              <td>
                <label htmlFor={`${user.id}-visibile-${user.visible}`}>
                  <input
                    id={`${user.id}-visibile-${user.visible}`}
                    type="checkbox"
                    checked={this.state.visible}
                    value={this.state.visible}
                    onChange={this.handleVisibleChange}
                  />
                </label>
              </td>
              <td>
                <SickButton
                  type="button"
                  disabled={loading}
                  onClick={updatePermissions}
                >
                  Updat
                  {loading ? 'ing' : 'e'}
                </SickButton>
              </td>
            </tr>
          </>
        )}
      </Mutation>
    );
  }
}

export default Permissions;
