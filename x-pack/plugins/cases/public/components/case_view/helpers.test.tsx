/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { AssociationType, CommentType } from '../../../common/api';
import { SECURITY_SOLUTION_OWNER } from '../../../common/constants';
import { Comment } from '../../containers/types';

import { getManualAlertIdsWithNoRuleId } from './helpers';

const comments: Comment[] = [
  {
    associationType: AssociationType.case,
    type: CommentType.alert,
    alertId: 'alert-id-1',
    index: 'alert-index-1',
    id: 'comment-id',
    createdAt: '2020-02-19T23:06:33.798Z',
    createdBy: { username: 'elastic' },
    rule: {
      id: null,
      name: null,
    },
    pushedAt: null,
    pushedBy: null,
    updatedAt: null,
    updatedBy: null,
    version: 'WzQ3LDFc',
    owner: SECURITY_SOLUTION_OWNER,
  },
  {
    associationType: AssociationType.case,
    type: CommentType.alert,
    alertId: 'alert-id-2',
    index: 'alert-index-2',
    id: 'comment-id',
    createdAt: '2020-02-19T23:06:33.798Z',
    createdBy: { username: 'elastic' },
    pushedAt: null,
    pushedBy: null,
    rule: {
      id: 'rule-id-2',
      name: 'rule-name-2',
    },
    updatedAt: null,
    updatedBy: null,
    version: 'WzQ3LDFc',
    owner: SECURITY_SOLUTION_OWNER,
  },
];

describe('Case view helpers', () => {
  describe('getAlertIdsFromComments', () => {
    it('it returns the alert id from the comments where rule is not defined', () => {
      expect(getManualAlertIdsWithNoRuleId(comments)).toEqual(['alert-id-1']);
    });
  });
});
