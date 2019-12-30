#!/bin/bash
#
# store coverage in database

payload=$(cat target/coverage/summary/statistics.json)

echo $"db.coverage.insertOne(${payload})" | mongo
