#!/usr/bin/env bash

set -euo pipefail

echo "timestamp=${timestamp}"
uploadPrefix="gs://elastic-bekitzur-kibana-coverage-live/"
uploadPrefixWithTimeStamp="${uploadPrefix}${timestamp}/"

for x in 'src/dev/code_coverage/www/index.html' 'src/dev/code_coverage/www/404.html'; do
    gsutil -m cp -r -a public-read -z js,css,html ${x} '${uploadPrefix}'
done

# for x in 'target/kibana-coverage/functional-combined' 'target/kibana-coverage/jest-combined'; do
#     gsutil -m cp -r -a public-read -z js,css,html ${x} '${uploadPrefixWithTimeStamp}'
# done
gsutil -m cp -r -a public-read -z js,css,html 'target/kibana-coverage/jest-combined' '${uploadPrefixWithTimeStamp}'