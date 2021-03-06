const db = require("../connection/pg");
const express = require("express");
const router = express.Router();

module.exports = {
  async insert(data) {
    const response = await db.query(`
        insert into user_relations (type, user_id1, user_id2) values ('${data.type}', '${data.userId1}', '${data.userId2}'); 
        `);
    return response;
  },
  async fetchRelationsByUserId(data) {
    const response = await db.query(`
      select  *, (select username from users where id_user = user_id1) as username1, 
        (select profile_image from users where id_user = user_id1) as profile_image1,
        (select username from users where id_user = user_id2) as username2,
        (select profile_image from users where id_user = user_id2) as profile_image2
        from user_relations
        WHERE (user_id1 = '${data.id}' or user_id2 = '${data.id}') and type = '${data.type}';
      `);
    return response;
  },
  async update(id) {
    const response = await db.query(`update user_relations set type='friends' where id_user_relations = '${id}'`);
    return response;
  },
  async delete(id) {
    const response = await db.query(`
         delete from user_relations where id_user_relations = '${id}';
          `);
    return response;
  },
};
