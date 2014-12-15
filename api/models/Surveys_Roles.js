/**
* Surveys_Roles.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    survey_id:
    {
      type: "integer",
      primaryKey: true,
      required: true,
      model: 'surveys'
    },
    role_id:
    {
      type: "integer",
      required: true,
      model: 'roles'
    }
  }
};

