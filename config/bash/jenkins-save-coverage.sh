#!/bin/bash
#
# store coverage in database

payload=$(cat ../../target/coverage/summary/statistics.json)

#echo $payload

db.coverage.insertOne(payload);
