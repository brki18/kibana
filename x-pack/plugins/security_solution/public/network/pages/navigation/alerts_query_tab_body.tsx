/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';

import type { Filter } from '@kbn/es-query';
import { TimelineId } from '../../../../common/types/timeline';
import { AlertsView } from '../../../common/components/alerts_viewer';
import { NetworkComponentQueryProps } from './types';

export const filterNetworkData: Filter[] = [
  {
    query: {
      bool: {
        filter: [
          {
            bool: {
              should: [
                {
                  bool: {
                    should: [
                      {
                        exists: {
                          field: 'source.ip',
                        },
                      },
                    ],
                    minimum_should_match: 1,
                  },
                },
                {
                  bool: {
                    should: [
                      {
                        exists: {
                          field: 'destination.ip',
                        },
                      },
                    ],
                    minimum_should_match: 1,
                  },
                },
              ],
              minimum_should_match: 1,
            },
          },
        ],
      },
    },
    meta: {
      alias: '',
      disabled: false,
      key: 'bool',
      negate: false,
      type: 'custom',
      value:
        '{"bool":{"filter":[{"bool":{"should":[{"bool":{"should":[{"exists":{"field": "source.ip"}}],"minimum_should_match":1}},{"bool":{"should":[{"exists":{"field": "destination.ip"}}],"minimum_should_match":1}}],"minimum_should_match":1}}]}}',
    },
  },
];

export const NetworkAlertsQueryTabBody = React.memo((alertsProps: NetworkComponentQueryProps) => (
  <AlertsView
    entityType="events"
    timelineId={TimelineId.networkPageExternalAlerts}
    {...alertsProps}
    pageFilters={filterNetworkData}
  />
));

NetworkAlertsQueryTabBody.displayName = 'NetworkAlertsQueryTabBody';
