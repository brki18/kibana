/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { FtrProviderContext } from '../../../ftr_provider_context';

export default function ({ loadTestFile }: FtrProviderContext) {
  describe('data visualizer', function () {
    this.tags(['skipFirefox', 'mlqa']);

    loadTestFile(require.resolve('./index_data_visualizer'));
    loadTestFile(require.resolve('./index_data_visualizer_grid_in_discover'));
    loadTestFile(require.resolve('./index_data_visualizer_grid_in_dashboard'));
    loadTestFile(require.resolve('./index_data_visualizer_actions_panel'));
    loadTestFile(require.resolve('./index_data_visualizer_index_pattern_management'));
    loadTestFile(require.resolve('./file_data_visualizer'));
  });
}
