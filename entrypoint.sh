#!/bin/bash

set -e

cd /pipeline

echo "Authenticating with SA Key"

gcloud auth activate-service-account --key-file ./sa-key.json

exec "$@"