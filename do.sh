#!/bin/bash

set -e

gcloud run deploy carto --image gcr.io/sa-taxi-edw/carto-react-docker 