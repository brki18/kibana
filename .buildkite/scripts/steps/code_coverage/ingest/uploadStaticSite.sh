#!/usr/bin/env bash

set -euo pipefail

echo "timestamp value = ${timestamp}"
uploadPrefix="gs://elastic-bekitzur-kibana-coverage-live/"
uploadPrefixWithTimeStamp="${uploadPrefix}${timestamp}/"

for x in 'src/dev/code_coverage/www/index.html' 'src/dev/code_coverage/www/404.html'; do
    gsutil -m cp -r -a public-read -z js,css,html ${x} '${uploadPrefix}'
done

# for x in 'target/kibana-coverage/functional-combined' 'target/kibana-coverage/jest-combined'; do
#     gsutil -m cp -r -a public-read -z js,css,html ${x} '${uploadPrefixWithTimeStamp}'
# done
echo "navigating to target/kibana-coverage/jest-combined"
cd target/kibana-coverage/jest-combined
echo "uploading report"
gsutil -m cp -r -a public-read -z js,css,html gs://elastic-bekitzur-kibana-coverage-live/2021-12-14T12:04:00Z/
echo "navigating to Kibana root folder"
cd "$KIBANA_DIR"