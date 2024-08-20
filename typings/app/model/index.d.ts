// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    User: ReturnType<typeof ExportUser>;
  }
}
