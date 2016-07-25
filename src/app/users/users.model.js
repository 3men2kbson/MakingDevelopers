import Model from '../../lib/model';

const Users = new Model();

let fields1 = ['network', 'networkId', 'username', 'password'];
let fields2 = ['email', 'avatar', 'subscribed'];

export default {
  getPrivilege,
  getUser,
  save
};

function getPrivilege(user, callback) {
  const procedure = Users.getProcedure('getUserPrivilege', user, fields1);

  Users.query(procedure, callback, (result, callback) => {
    const data = (result && result[0].length > 0) ? result[0] : false;

    callback(data);
  });
}

function getUser(user, callback) {
  const procedure = Users.getProcedure('getUser', user, fields1);

  Users.query(procedure, callback, (result, callback) => {
    const data = (result && result[0].length > 0) ? result[0] : false;

    callback(data);
  });
}

function save(user, callback) {
  const procedure = Users.getProcedure('saveUser', user, fields1.concat(fields2), {
    password: 'encrypt'
  });

  Users.query(procedure, callback, (result, callback) => {
    callback(result);
  });
}
