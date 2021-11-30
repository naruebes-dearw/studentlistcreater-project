const server_dev = 'http://localhost:5000';
const server_production = '';
const server_url = (process.env.NODE_ENV === 'production') ?
  server_production : server_dev;

export const GET_STUDENTS = `${server_url}/api/students`;
export const CREATE_STUDENT = `${server_url}/api/create-student`;
export const EDIT_STUDENT = `${server_url}/api/edit-student/`;
export const UPDATE_STUDENT = `${server_url}/api/update-student/`;
export const DELETE_STUDENT = `${server_url}/api/delete-student/`;